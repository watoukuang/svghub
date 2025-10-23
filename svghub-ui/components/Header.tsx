import React, {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import {HeaderProps} from '../types';
import LoginModal from './LoginModal';

export default function Header({toggleSidebar}: HeaderProps): React.ReactElement {
    // Theme state: 'light' | 'dark' | 'system'
    const [theme, setTheme] = useState<'light' | 'dark' | 'system'>(() => {
        if (typeof window === 'undefined') return 'system';
        return (localStorage.getItem('theme') as 'light' | 'dark' | 'system') || 'system';
    });

    // 下拉开关 & 系统深色侦测
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const [systemDark, setSystemDark] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);

    // Apply theme based on preference and system setting
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const root = document.documentElement;
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setSystemDark(mediaQuery.matches);

        const applyTheme = () => {
            const isDark = theme === 'dark' || (theme === 'system' && mediaQuery.matches);
            root.classList.toggle('dark', isDark);
        };

        // 初始应用主题
        applyTheme();
        localStorage.setItem('theme', theme);

        // 监听系统主题变化
        const handleSystemThemeChange = (e: MediaQueryListEvent) => {
            setSystemDark(e.matches);
            if (theme === 'system') {
                root.classList.toggle('dark', e.matches);
            }
        };

        // 添加事件监听 (兼容新旧API)
        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', handleSystemThemeChange);
            return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
        } else {
            // 旧版浏览器支持
            mediaQuery.addListener(handleSystemThemeChange);
            return () => mediaQuery.removeListener(handleSystemThemeChange);
        }
    }, [theme]);

    // 点击外部关闭菜单
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (!menuRef.current) return;
            if (!menuRef.current.contains(e.target as Node)) setMenuOpen(false);
        };
        if (menuOpen) document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [menuOpen]);
    return (
        <header
            className="sticky top-0 z-40 flex justify-between items-center py-4 px-4 md:px-5 border-b border-gray-100 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:border-gray-800 dark:bg-[#121212]/85">
            <div className="flex items-center">
                <button
                    onClick={toggleSidebar}
                    className="mr-3 lg:hidden"
                    aria-label="Toggle menu"
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>

                {/* 移动端保留品牌，桌面端交给侧边栏显示 */}
                <Link href="/" className="flex items-center lg:hidden">
                    <img
                        src={(theme === 'dark' || (theme === 'system' && systemDark)) ? '/logo-dark.png' : '/logo.png'}
                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/logo.png'; }}
                        alt="SvgHub Logo"
                        className="h-10 w-auto select-none"
                    />
                    <span
                        className="text-xl md:text-2xl font-semibold tracking-tight leading-none select-none bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-sky-400 dark:to-emerald-300
                        bg-clip-text text-transparent">SvgHub</span>
                </Link>

                {/* 桌面端左侧：关于我们 */}
                <Link
                    href="/about"
                    className="hidden md:inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-2 py-1 rounded-md"
                >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 16v-4"/>
                      <path d="M12 8h.01"/>
                    </svg>
                    <span>关于我们</span>
                </Link>
            </div>

            <div className="flex items-center space-x-2 md:space-x-3">
                <div className="relative hidden md:block">
                    <input
                        type="text"
                        placeholder="搜索消息"
                        className="bg-gray-100 rounded-full px-4 py-1.5 w-32 lg:w-48 text-sm"
                    />
                    <svg className="h-4 w-4 absolute right-3 top-2.5 text-gray-500" fill="none" stroke="currentColor"
                         viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                </div>

                <div className="relative" ref={menuRef}>
                    <button
                        onClick={() => setMenuOpen((v) => !v)}
                        className="h-8 w-8 flex items-center justify-center transition-colors md:block"
                        aria-label="主题/设置"
                        aria-expanded={menuOpen}
                        aria-haspopup="menu"
                    >
                        {(theme === 'dark' || (theme === 'system' && systemDark)) ? (
                            <svg className="h-5 w-5 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                            </svg>
                        ) : (
                            <svg className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                            </svg>
                        )}
                    </button>
                    {menuOpen && (
                        <div
                            role="menu"
                            aria-label="主题切换"
                            className="absolute right-0 mt-2 w-56 rounded-2xl border bg-white/98 backdrop-blur-sm shadow-lg ring-1 ring-black/5 p-2
                                       border-gray-200 dark:bg-[#1e1e1e] dark:border-[#2d2d30] dark:ring-white/5 dark:text-gray-200 z-50"
                        >
                            <button
                                role="menuitemradio"
                                aria-checked={theme === 'light'}
                                onClick={() => { setTheme('light'); localStorage.setItem('theme','light'); document.documentElement.classList.remove('dark'); setMenuOpen(false); }}
                                className={`group flex w-full items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-800 ${theme === 'light' ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                            >
                                <span className="text-yellow-500">☀️</span>
                                <span className="flex-1 text-left">明亮主题</span>
                                {theme === 'light' && (
                                  <span aria-hidden className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-blue-500"/>
                                )}
                            </button>
                            <div className="my-1 h-px bg-gray-200 dark:bg-gray-800"/>
                            <button
                                role="menuitemradio"
                                aria-checked={theme === 'dark'}
                                onClick={() => { setTheme('dark'); localStorage.setItem('theme','dark'); document.documentElement.classList.add('dark'); setMenuOpen(false); }}
                                className={`group flex w-full items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-800 ${theme === 'dark' ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                            >
                                <span className="text-gray-700 dark:text-gray-300">🌙</span>
                                <span className="flex-1 text-left">暗黑主题</span>
                                {theme === 'dark' && (
                                  <span aria-hidden className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-blue-500"/>
                                )}
                            </button>
                            <div className="my-1 h-px bg-gray-200 dark:bg-gray-800"/>
                            <button
                                role="menuitemradio"
                                aria-checked={theme === 'system'}
                                onClick={() => { setTheme('system'); localStorage.setItem('theme','system'); document.documentElement.classList.toggle('dark', window.matchMedia('(prefers-color-scheme: dark)').matches); setMenuOpen(false); }}
                                className={`group flex w-full items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-800 ${theme === 'system' ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                            >
                                <span className="text-indigo-600">🖥️</span>
                                <span className="flex-1 text-left">跟随系统</span>
                                {theme === 'system' && (
                                  <span aria-hidden className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-blue-500"/>
                                )}
                            </button>
                        </div>
                    )}
                </div>

                <Link
                    href="/pricing"
                    className="inline-flex items-center text-sm font-medium px-3 py-1.5 md:px-4 rounded-full whitespace-nowrap bg-gradient-to-r from-emerald-500 to-lime-500 text-white shadow-sm hover:opacity-90 transition-opacity dark:from-emerald-400 dark:to-lime-400"
                >
                    价格
                </Link>

                <button
                    onClick={() => setLoginOpen(true)}
                    className="bg-black text-white px-3 py-1.5 md:px-4 rounded-full text-sm whitespace-nowrap">登录/注册
                </button>
            </div>
            <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
        </header>
    );
}
