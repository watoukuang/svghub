export type IconCategory = 'base' | 'arrows' | 'media' | 'files' | 'editor' | 'social' | 'finance' | 'system' | 'devices' | 'maps' | 'security' | 'devops' | 'brands' | 'ecom';

export interface SvgIconItem {
  id: string;
  name: string;
  category: IconCategory;
  tags?: string[];
  svg: string; // raw svg markup
}

// Minimal内置示例数据（可后续替换为后端/JSON 文件/远端仓库）
export const ICONS: SvgIconItem[] = [
  {
    id: 'base-star',
    name: 'Star',
    category: 'base',
    tags: ['favorite', 'rate'],
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l2.4 6.9L22 9.3l-5 4.4L18.8 22 12 18.3 5.2 22 7 13.7 2 9.3l7.6-.4z"/></svg>'
  },
  {
    id: 'arrow-right',
    name: 'Arrow Right',
    category: 'arrows',
    tags: ['navigate', 'next'],
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 4l6 6h-4v6h-4v-6H6z"/></svg>'
  },
  {
    id: 'media-play',
    name: 'Play',
    category: 'media',
    tags: ['video', 'start'],
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z"/></svg>'
  },
  {
    id: 'file',
    name: 'File',
    category: 'files',
    tags: ['document'],
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M6 2h9l5 5v15H6z"/><path d="M15 2v6h6"/></svg>'
  },
  {
    id: 'edit',
    name: 'Edit',
    category: 'editor',
    tags: ['pen', 'write'],
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3 21l3-1 11-11-2-2L4 18l-1 3z"/><path d="M14 4l2 2"/></svg>'
  },
  {
    id: 'chat',
    name: 'Chat',
    category: 'social',
    tags: ['message'],
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21 6H3v9h5v4l5-4h8z"/></svg>'
  },
  {
    id: 'chart',
    name: 'Chart',
    category: 'finance',
    tags: ['trend'],
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3 10h18v10H3z"/><path d="M7 6h10v4H7z"/></svg>'
  },
  {
    id: 'check',
    name: 'Success',
    category: 'system',
    tags: ['ok'],
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l2.4 6.9L22 9.3l-5 4.4L18.8 22 12 18.3 5.2 22 7 13.7 2 9.3l7.6-0.4z"/></svg>'
  },
  {
    id: 'laptop',
    name: 'Laptop',
    category: 'devices',
    tags: ['pc'],
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16v12H4z"/><path d="M8 21h8"/></svg>'
  },
  {
    id: 'pin',
    name: 'Map Pin',
    category: 'maps',
    tags: ['location'],
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/></svg>'
  },
  {
    id: 'shield',
    name: 'Shield',
    category: 'security',
    tags: ['protect'],
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/></svg>'
  },
  {
    id: 'code',
    name: 'Code',
    category: 'devops',
    tags: ['dev'],
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 9l-4 3 4 3V9zm8 0v6l4-3-4-3z"/><rect x="10" y="7" width="4" height="10" rx="1"/></svg>'
  },
  {
    id: 'twitter',
    name: 'Twitter',
    category: 'brands',
    tags: ['logo'],
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2H21l-6.56 7.5L22.5 22H15.9l-5.02-6.54L4.96 22H2l6.99-8-6.5-8H9.1l4.6 6.02L18.244 2z"/></svg>'
  },
  {
    id: 'cart',
    name: 'Cart',
    category: 'ecom',
    tags: ['shop'],
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M6 6h15l-1.5 9h-12z"/><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/></svg>'
  }
];
