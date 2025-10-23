import React from 'react';
import { SvgIconItem } from '../lib/icons';

interface IconCardProps {
  icon: SvgIconItem;
}

export default function IconCard({ icon }: IconCardProps): React.ReactElement {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(icon.svg);
    } catch (e) {
      // ignore
    }
  };

  const handleDownload = () => {
    const blob = new Blob([icon.svg], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${icon.id}.svg`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="group rounded-xl border border-gray-200 bg-white dark:bg-[#1a1b1e] dark:border-[#2a2c31] p-4 flex flex-col items-stretch gap-3 hover:shadow-sm transition-shadow">
      <div className="aspect-square grid place-items-center rounded-lg bg-gray-50 dark:bg-[#111317] overflow-hidden">
        {/* Render raw SVG */}
        <div
          className="w-12 h-12 text-gray-800 dark:text-gray-200"
          dangerouslySetInnerHTML={{ __html: icon.svg }}
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="min-w-0">
          <p className="text-sm font-medium truncate">{icon.name}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{icon.category}</p>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={handleCopy}
            title="复制SVG"
            className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-gray-200 dark:border-[#2a2c31] hover:bg-gray-100 dark:hover:bg-[#15171c]"
          >
            <span aria-hidden>📋</span>
          </button>
          <button
            onClick={handleDownload}
            title="下载SVG"
            className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-gray-200 dark:border-[#2a2c31] hover:bg-gray-100 dark:hover:bg-[#15171c]"
          >
            <span aria-hidden>⬇️</span>
          </button>
        </div>
      </div>
    </div>
  );
}
