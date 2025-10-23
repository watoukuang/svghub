import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import { ICONS, IconCategory } from '../lib/icons';

interface MenuItem {
  icon: string;
  name: string;
  href: string;
  colorIcon?: string;   // 图标颜色（浅色 + 深色）
  colorBar?: string;    // 选中条颜色（浅色 + 深色）
}

export default function Sidebar(): React.ReactElement {
  const router = useRouter();
  const {pathname} = router;
  // 渲染合适的 SVG 图标
  const renderIcon = (label: string, className?: string) => {
    const cn = `h-5 w-5 ${className || ''}`;
    switch (label) {
      case '交易所快讯':
        // 闪电 - 快讯
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cn}>
            <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/>
          </svg>
        );
      case '推特情报站':
        // X / Twitter 标志
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cn}>
            <path d="M18.244 2H21l-6.56 7.5L22.5 22H15.9l-5.02-6.54L4.96 22H2l6.99-8-6.5-8H9.1l4.6 6.02L18.244 2z"/>
          </svg>
        );
      case '推特红人':
        // 星标用户
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cn}>
            <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm-9 9a9 9 0 1118 0H3z"/>
            <path d="M17.5 9.5l1.2.7-.3-1.4 1-1-1.4-.2L17.5 6l-.6 1.6-1.4.2 1 1-.3 1.4 1.2-.7z"/>
          </svg>
        );
      // ===== 新增：SVG 图标分类可视化 =====
      case '通用/基础':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cn}>
            <rect x="4" y="4" width="7" height="7" rx="2"/>
            <circle cx="16.5" cy="7.5" r="3.5"/>
            <path d="M4 15h16v5H4z"/>
          </svg>
        );
      case '箭头与导航':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cn}>
            <path d="M12 4l6 6h-4v6h-4v-6H6z"/>
          </svg>
        );
      case '媒体与控制':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cn}>
            <path d="M8 5v14l11-7z"/>
          </svg>
        );
      case '文件与文档':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cn}>
            <path d="M6 2h9l5 5v15H6z"/>
            <path d="M15 2v6h6"/>
          </svg>
        );
      case '编辑与排版':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cn}>
            <path d="M3 21l3-1 11-11-2-2L4 18l-1 3z"/>
            <path d="M14 4l2 2"/>
          </svg>
        );
      case '通信与社交':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cn}>
            <path d="M21 6H3v9h5v4l5-4h8z"/>
          </svg>
        );
      case '商务与金融':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cn}>
            <path d="M3 10h18v10H3z"/>
            <path d="M7 6h10v4H7z"/>
          </svg>
        );
      case '系统与状态':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cn}>
            <path d="M12 2l2.4 6.9L22 9.3l-5 4.4L18.8 22 12 18.3 5.2 22 7 13.7 2 9.3l7.6-0.4z"/>
          </svg>
        );
      case '设备与硬件':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cn}>
            <path d="M4 5h16v12H4z"/>
            <path d="M8 21h8"/>
          </svg>
        );
      case '地图与出行':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cn}>
            <path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
          </svg>
        );
      case '安全与隐私':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cn}>
            <path d="M12 4l6 6h-4v6h-4v-6H6z"/>
          </svg>
        );
      case '开发与运维':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cn}>
            <path d="M8 9l-4 3 4 3v-6h6"/>
            <rect x="10" y="7" width="4" height="10" rx="1"/>
          </svg>
        );
      case '品牌与平台':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cn}>
            <circle cx="7" cy="7" r="3"/>
            <circle cx="17" cy="7" r="3"/>
            <circle cx="7" cy="17" r="3"/>
            <circle cx="17" cy="17" r="3"/>
          </svg>
        );
      case '电商与产品':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cn}>
            <path d="M6 6h15l-1.5 9h-12z"/>
            <circle cx="9" cy="20" r="1.5"/>
            <circle cx="17" cy="20" r="1.5"/>
          </svg>
        );
      case 'CEX交易所':
        // 银行/大楼
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cn}>
            <path d="M12 3l9 5v2H3V8l9-5zM4 11h16v9H4v-9zM6 13v5h2v-5H6zm5 0v5h2v-5h-2zm5 0v5h2v-5h-2z"/>
          </svg>
        );
      case 'DEX交易所':
        // 六边形网络
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cn}>
            <path d="M7 3l-5 3v6l5 3 5-3V6L7 3zm10 0l-5 3v6l5 3 5-3V6l-5-3zM7 15l-5 3v3l5-3 5 3v-3l-5-3zm10 0l-5 3v3l5-3 5 3v-3l-5-3z"/>
          </svg>
        );
      case '全部图标':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cn}>
            <rect x="3" y="3" width="7" height="7" rx="1"/>
            <rect x="14" y="3" width="7" height="7" rx="1"/>
            <rect x="3" y="14" width="7" height="7" rx="1"/>
            <rect x="14" y="14" width="7" height="7" rx="1"/>
          </svg>
        );
      case '最新上传':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cn}>
            <path d="M12 2l3 3h-2v6h-2V5H9l3-3z"/>
            <path d="M4 19h16v2H4z"/>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cn}>
            <circle cx="12" cy="12" r="8"/>
          </svg>
        );
    }
  };
  // 方案A：动态热点（TopN + 编辑推荐），保持样式
  const categoryMap: Record<IconCategory, { name: string; slug: string; colorIcon: string; colorBar: string }>= {
    base:    { name: '通用/基础',   slug: 'base',    colorIcon: 'text-gray-400',                    colorBar: 'bg-gray-400' },
    arrows:  { name: '箭头与导航',   slug: 'arrows',  colorIcon: 'text-amber-500 dark:text-amber-400', colorBar: 'bg-amber-500 dark:bg-amber-400' },
    media:   { name: '媒体与控制',   slug: 'media',   colorIcon: 'text-indigo-500',                  colorBar: 'bg-indigo-500' },
    files:   { name: '文件与文档',   slug: 'files',   colorIcon: 'text-sky-500',                     colorBar: 'bg-sky-500' },
    editor:  { name: '编辑与排版',   slug: 'editor',  colorIcon: 'text-rose-500',                    colorBar: 'bg-rose-500' },
    social:  { name: '通信与社交',   slug: 'social',  colorIcon: 'text-violet-500',                  colorBar: 'bg-violet-500' },
    finance: { name: '商务与金融',   slug: 'finance', colorIcon: 'text-emerald-500',                 colorBar: 'bg-emerald-500' },
    system:  { name: '系统与状态',   slug: 'system',  colorIcon: 'text-orange-500',                  colorBar: 'bg-orange-500' },
    devices: { name: '设备与硬件',   slug: 'devices', colorIcon: 'text-teal-500',                    colorBar: 'bg-teal-500' },
    maps:    { name: '地图与出行',   slug: 'maps',    colorIcon: 'text-cyan-500',                    colorBar: 'bg-cyan-500' },
    security:{ name: '安全与隐私',   slug: 'security',colorIcon: 'text-red-500',                     colorBar: 'bg-red-500' },
    devops:  { name: '开发与运维',   slug: 'devops',  colorIcon: 'text-fuchsia-500',                 colorBar: 'bg-fuchsia-500' },
    brands:  { name: '品牌与平台',   slug: 'brands',  colorIcon: 'text-yellow-500',                  colorBar: 'bg-yellow-500' },
    ecom:    { name: '电商与产品',   slug: 'ecom',    colorIcon: 'text-lime-500',                    colorBar: 'bg-lime-500' },
  };

  const counts = ICONS.reduce((acc, i) => {
    acc[i.category] = (acc[i.category] || 0) + 1;
    return acc;
  }, {} as Record<IconCategory, number>);

  // 精选推荐：差异化快捷入口，避免与热门分类重复
  const topCategory = (Object.keys(counts) as IconCategory[])
    .sort((a,b) => (counts[b]||0) - (counts[a]||0))[0];

  const recoms: MenuItem[] = [
    { icon: '', name: '最新上传', href: '/?sort=newest', colorIcon: 'text-blue-500 dark:text-blue-400', colorBar: 'bg-blue-500 dark:bg-blue-400' },
    { icon: '', name: '热门图标', href: `/?category=${topCategory}`, colorIcon: categoryMap[topCategory]?.colorIcon || 'text-purple-500', colorBar: categoryMap[topCategory]?.colorBar || 'bg-purple-500' }
  ];

    // 热门分类：精简至8个核心分类，提升选择效率
    const channels: MenuItem[] = [
      { icon: "➡️", name: "箭头与导航", href: "/?category=arrows", colorIcon: "text-amber-500 dark:text-amber-400", colorBar: "bg-amber-500 dark:bg-amber-400" },
      { icon: "▶️", name: "媒体与控制", href: "/?category=media", colorIcon: "text-indigo-500", colorBar: "bg-indigo-500" },
      { icon: "📄", name: "文件与文档", href: "/?category=files", colorIcon: "text-sky-500", colorBar: "bg-sky-500" },
      { icon: "✏️", name: "编辑与排版", href: "/?category=editor", colorIcon: "text-rose-500", colorBar: "bg-rose-500" },
      { icon: "💬", name: "通信与社交", href: "/?category=social", colorIcon: "text-violet-500", colorBar: "bg-violet-500" },
      { icon: "⚙️", name: "系统与状态", href: "/?category=system", colorIcon: "text-orange-500", colorBar: "bg-orange-500" },
      { icon: "🏷️", name: "品牌与平台", href: "/?category=brands", colorIcon: "text-yellow-500", colorBar: "bg-yellow-500" },
      { icon: "🛠️", name: "开发与运维", href: "/?category=devops", colorIcon: "text-fuchsia-500", colorBar: "bg-fuchsia-500" },
    ];
    return (
        <aside
            className="w-full lg:w-56 overflow-y-auto py-2 px-2 lg:px-4 lg:border-r lg:border-gray-200 dark:lg:border-[#2a2c31] lg:fixed lg:top-0 lg:h-screen dark:bg-[#1a1b1e]">
            {/* 品牌（桌面端作为主品牌展示） */}
            <div className="hidden lg:flex items-center gap-3 py-3 mb-2">
                <Link href="/" className="flex items-center">
                    <img src="/logo-svg.svg" alt="SVG Hub Logo" className="h-9 w-9"/>
                    <span
                        className="ml-2 text-xl font-semibold tracking-tight bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent dark:from-sky-400 dark:to-emerald-300">SVG HUB</span>
                </Link>
            </div>
            <div className="mb-4 pb-2 lg:pb-4 border-b border-gray-100 dark:border-gray-800 hidden lg:block">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-300">
                  <span aria-hidden>✨</span>
                  精选推荐
                </span>
            </div>
            <nav className="space-y-1">
                {recoms.map((item, index) => {
                    const active = pathname === item.href || pathname.startsWith(item.href + '/');
                    return (
                        <Link href={item.href} key={index}
                              className={`sidebar-link relative pl-3 ${active ? 'active' : ''}`}>
                            {active && <span aria-hidden
                                             className={`absolute left-0.5 top-1/2 -translate-y-1/2 h-6 w-1.5 rounded-full ${item.colorBar || ''}`}/>}
                            <span className={`mr-2 ${item.colorIcon || ''}`}>{renderIcon(item.name, '')}</span>
                            <span className="text-sm">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>
            <div className="mb-4 pb-2 lg:pb-4 border-b border-gray-100 dark:border-gray-800 hidden lg:block mt-10">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-300">
                  <span aria-hidden>🧭</span>
                  热门分类
                </span>
            </div>
            <nav className="space-y-1">
                {channels.map((item, index) => {
                    const active = pathname === item.href || pathname.startsWith(item.href + '/');
                    return (
                        <Link href={item.href} key={index}
                              className={`sidebar-link relative pl-3 ${active ? 'active' : ''}`}>
                            {active && <span aria-hidden
                                             className={`absolute left-0.5 top-1/2 -translate-y-1/2 h-6 w-1.5 rounded-full ${item.colorBar || ''}`}/>}
                            <span className={`mr-2 ${item.colorIcon || ''}`}>{renderIcon(item.name, '')}</span>
                            <span className="text-sm">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}
