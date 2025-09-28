# FortuneHunt - 寻找加密世界的财富密码

专注于Web3、加密货币、区块链投资策略和工具的知识分享平台。

## 🚀 快速开始

### 环境要求

- Node.js 18.0.0 或更高版本
- npm 或 yarn 包管理器
- Git

### 安装依赖

```bash
# 克隆项目
git clone https://github.com/your-username/fortunehunt.git
cd fortunehunt

# 安装依赖
npm install
# 或
yarn install
```

### 开发环境

```bash
# 启动开发服务器
npm run develop
# 或
yarn develop

# 访问 http://localhost:8000
```

### 构建和部署

```bash
# 构建生产版本
npm run build
# 或
yarn build

# 预览生产版本
npm run serve
# 或
yarn serve

# 清理缓存
npm run clean
# 或
yarn clean
```

## 📁 项目结构

```
fortunehunt/
├── src/
│   ├── components/          # 可复用组件
│   │   ├── Layout.js       # 主布局组件
│   │   ├── Header.js       # 头部导航
│   │   ├── Footer.js       # 页脚
│   │   ├── SEO.js          # SEO组件
│   │   └── ...
│   ├── pages/              # 页面组件
│   │   ├── index.js        # 首页
│   │   ├── about.js        # 关于页面
│   │   └── 404.js          # 404页面
│   ├── templates/          # 模板文件
│   │   ├── article.js      # 文章模板
│   │   └── category.js     # 分类模板
│   ├── content/            # Markdown 文章
│   │   ├── dao/            # 道 - 原理和规律
│   │   ├── fa/             # 法 - 策略和原则
│   │   ├── shu/            # 术 - 技巧和方法
│   │   └── qi/             # 器 - 工具和资源
│   ├── images/             # 图片资源
│   ├── styles/             # 样式文件
│   │   └── global.css      # 全局样式
│   └── utils/              # 工具函数
├── static/                 # 静态资源
├── gatsby-config.js        # Gatsby 配置
├── gatsby-node.js          # 构建时配置
├── gatsby-browser.js       # 浏览器端配置
├── tailwind.config.js      # Tailwind CSS 配置
├── postcss.config.js       # PostCSS 配置
└── package.json           # 项目依赖
```

## 🎨 设计系统

### 色彩方案

- **主色调**: 深蓝色 (#1a202c) - 代表专业和信任
- **辅助色**: 金色 (#f6ad55) - 代表财富和机会
- **强调色**: 绿色 (#48bb78) - 代表增长和成功
- **背景色**: 浅灰 (#f7fafc) 和纯白 (#ffffff)

### 字体规范

- **标题字体**: Inter 或 Poppins
- **正文字体**: Source Sans Pro 或系统字体
- **代码字体**: Fira Code 或 Monaco
- **中文字体**: 思源黑体或苹方

## 📝 内容管理

### 添加新文章

1. 在 `src/content/` 对应分类目录下创建 `.mdx` 文件
2. 添加 frontmatter 元数据：

```markdown
---
title: "文章标题"
description: "文章描述"
date: "2024-01-15"
category: "dao" # dao, fa, shu, qi
tags: ["标签1", "标签2"]
author: "作者名称"
readingTime: 8
featured: true
---

# 文章内容

这里是文章正文...
```

### 分类说明

- **道 (dao)**: 原理和规律 - 底层逻辑与认知框架
- **法 (fa)**: 策略和原则 - 投资方法与风险管理
- **术 (shu)**: 技巧和方法 - 实操技能与具体方法
- **器 (qi)**: 工具和资源 - 必备工具与优质资源

## 🛠️ 技术栈

- **前端框架**: Gatsby 5 (React-based)
- **样式**: Tailwind CSS
- **内容管理**: Markdown + MDX
- **图片优化**: Gatsby Image Plugin
- **SEO**: Gatsby SEO Plugin
- **部署**: Cloudflare Pages

## 🔧 开发工具

### VS Code 推荐插件

- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- ESLint
- Tailwind CSS IntelliSense
- MDX

### 代码规范

项目使用 ESLint 和 Prettier 确保代码质量和一致性：

```bash
# 检查代码规范
npm run lint

# 格式化代码
npm run format
```

## 📊 性能优化

### 性能目标

- **首屏加载时间**: < 3秒
- **Lighthouse 评分**: > 90分
- **Core Web Vitals**: 全部指标达到绿色

### 优化策略

- 图片懒加载和 WebP 格式
- 代码分割和预加载
- 静态资源 CDN 加速
- 服务端渲染 (SSR)

## 🚀 部署

### Cloudflare Pages 部署

1. 连接 GitHub 仓库
2. 设置构建命令: `npm run build`
3. 设置输出目录: `public`
4. 配置环境变量

### 环境变量

```bash
GATSBY_SITE_URL=https://fortunehunt.io
GATSBY_GOOGLE_ANALYTICS_ID=your_ga_id
```

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系我们

- 网站: [https://fortunehunt.io](https://fortunehunt.io)
- Twitter: [@FortuneHunt](https://twitter.com/fortunehunt)
- Telegram: [FortuneHunt Community](https://t.me/fortunehunt)

---

**免责声明**: 本网站内容仅供教育和信息目的，不构成投资建议。投资有风险，请根据自身情况谨慎决策。