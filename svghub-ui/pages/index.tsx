import React, {useEffect, useMemo, useState} from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import IconsGrid from '../components/IconsGrid';
import { ICONS, IconCategory } from '../lib/icons';

export default function Home(): React.ReactElement {
    const router = useRouter();
    const [selectedCategory, setSelectedCategory] = useState<string>('');

    // 初始化：从 URL 读取 ?category= 同步到状态
    useEffect(() => {
      if (!router.isReady) return;
      const q = (router.query.category as string) || '';
      setSelectedCategory(q);
    }, [router.isReady, router.query.category]);

    // 当选择变化时，更新 URL（浅路由，不刷新页面）
    useEffect(() => {
      if (!router.isReady) return;
      const current = (router.query.category as string) || '';
      if (selectedCategory !== current) {
        const query = { ...router.query } as Record<string, any>;
        if (selectedCategory) query.category = selectedCategory; else delete query.category;
        router.replace({ pathname: router.pathname, query }, undefined, { shallow: true });
      }
    }, [selectedCategory]);

    // 将 URL slug 映射为 IconCategory
    const slugToCategory = (slug: string): IconCategory | undefined => {
      const map: Record<string, IconCategory> = {
        base: 'base', arrows: 'arrows', media: 'media', files: 'files', editor: 'editor',
        social: 'social', finance: 'finance', system: 'system', devices: 'devices', maps: 'maps',
        security: 'security', devops: 'devops', brands: 'brands', ecom: 'ecom',
      };
      return map[slug];
    };

    const filteredIcons = useMemo(() => {
      const c = slugToCategory(selectedCategory);
      if (!c) return ICONS;
      return ICONS.filter(i => i.category === c);
    }, [selectedCategory]);

    return (
        <Layout>
            <div className="container px-4 md:px-6 py-4 pb-20 lg:pb-4">
                <div className="mb-6 md:mb-8">
                    <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight mb-3 bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-cyan-400 dark:to-emerald-400 headline-glow">
                        SVG 图标库
                    </h1>
                    <p className="text-[13.5px] md:text-base leading-relaxed max-w-2xl subtle-muted">
                        浏览、搜索、复制与下载常用矢量图标；支持按分类快速筛选
                    </p>
                </div>

                <IconsGrid icons={filteredIcons} />
            </div>
        </Layout>
    );
}
