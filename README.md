# SVG Hub - SVG图标下载平台

一个现代化的SVG图标管理和下载平台，提供图标上传、搜索、分类和下载功能。

## 功能特性

- 🔍 **智能搜索** - 支持关键词和分类搜索
- 📤 **图标上传** - 支持SVG文件上传和代码粘贴
- 🏷️ **标签管理** - 灵活的标签系统便于分类
- 📊 **统计面板** - 实时显示平台数据统计
- 💾 **一键下载** - 支持SVG文件直接下载
- 📋 **代码复制** - 快速复制SVG代码
- 🎨 **实时预览** - 上传和浏览时的实时预览

## 技术栈

### 前端 (svghub-ui)
- **Next.js 13** - React框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **React Icons** - 图标库

### 后端 (svghub-api)
- **Rust** - 系统编程语言
- **Axum** - 异步Web框架
- **SQLx** - 数据库工具包
- **SQLite** - 轻量级数据库

## 快速开始

### 环境要求

- Node.js 14+
- Rust 1.70+
- SQLite 3

### 安装和运行

#### 1. 克隆项目
```bash
git clone <repository-url>
cd svghub
```

#### 2. 启动后端服务

```bash
cd svghub-api

# 安装依赖并构建
cargo build

# 运行服务 (默认端口 8080)
cargo run
```

#### 3. 启动前端服务

```bash
cd svghub-ui

# 安装依赖
npm install

# 复制环境配置
cp .env.example .env.local

# 启动开发服务器 (默认端口 3000)
npm run dev
```

#### 4. 访问应用

- 前端: http://localhost:3000
- 后端API: http://localhost:8080

## API 接口

### SVG管理

- `POST /api/svg` - 创建SVG图标
- `GET /api/svg/search` - 搜索SVG图标
- `GET /api/svg/:id` - 获取单个SVG图标
- `PUT /api/svg/:id` - 更新SVG图标
- `DELETE /api/svg/:id` - 删除SVG图标
- `GET /api/svg/:id/download` - 下载SVG文件
- `GET /api/svg/stats` - 获取平台统计数据

### 请求示例

#### 创建SVG图标
```bash
curl -X POST http://localhost:8080/api/svg \
  -H "Content-Type: application/json" \
  -d '{
    "name": "heart",
    "description": "A heart icon",
    "content": "<svg>...</svg>",
    "tags": ["love", "emotion"],
    "category": "emotion"
  }'
```

#### 搜索图标
```bash
curl "http://localhost:8080/api/svg/search?keyword=heart&category=emotion&page=1&per_page=20"
```

## 数据库结构

### svg_icons 表

| 字段 | 类型 | 描述 |
|------|------|------|
| id | TEXT | 主键 (UUID) |
| name | TEXT | 图标名称 |
| description | TEXT | 图标描述 |
| content | TEXT | SVG内容 |
| tags | TEXT | 标签 (JSON数组) |
| category | TEXT | 分类 |
| size | INTEGER | 文件大小 |
| width | INTEGER | 宽度 |
| height | INTEGER | 高度 |
| download_count | INTEGER | 下载次数 |
| created_at | TEXT | 创建时间 |
| updated_at | TEXT | 更新时间 |

## 开发指南

### 添加新分类

1. 在后端 `svg_handler.rs` 中添加分类验证
2. 在前端 `SvgUpload.tsx` 的 `categories` 数组中添加新分类

### 自定义样式

项目使用 Tailwind CSS，可以在 `tailwind.config.js` 中自定义主题。

### 扩展API

1. 在 `models/svg.rs` 中定义新的数据结构
2. 在 `service/svg_service.rs` 中实现业务逻辑
3. 在 `service/svg_handler.rs` 中添加HTTP处理器
4. 在 `router.rs` 中注册新路由

## 部署

### Docker部署

```bash
# 构建镜像
docker build -t svghub-api ./svghub-api
docker build -t svghub-ui ./svghub-ui

# 运行容器
docker run -p 8080:8080 svghub-api
docker run -p 3000:3000 svghub-ui
```

### 生产环境配置

1. 设置环境变量
2. 配置反向代理 (Nginx)
3. 设置SSL证书
4. 配置数据库备份

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 支持

如果您遇到问题或有建议，请创建 [Issue](https://github.com/your-repo/svghub/issues)。
