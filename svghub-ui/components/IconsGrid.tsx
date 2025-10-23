import React from 'react';
import IconCard from './IconCard';
import { SvgIconItem } from '../lib/icons';

interface IconsGridProps {
  icons: SvgIconItem[];
}

export default function IconsGrid({ icons }: IconsGridProps): React.ReactElement {
  if (!icons?.length) {
    return (
      <div className="text-sm text-gray-500 dark:text-gray-400">暂无图标</div>
    );
  }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
      {icons.map((icon) => (
        <IconCard key={icon.id} icon={icon} />
      ))}
    </div>
  );
}
