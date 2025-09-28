我要开发一个网站，网站的内容是和Web3相关的内容。 

# 网站的口号
寻找加密货币世界的财富密码

# 网站的地址
https://fortunehunt.io 

# 网站菜单栏内容

## 【一级菜单】
道（原理和规律）
法（策略和原则）
术（技巧和方法）
器（工具和资源）

## 【二级菜单】
（以下仅为示例，请按照一级分类自行扩展）
道（原理和规律）
- 市场周期
- 投资第一性原理
- 认知变现
法（策略和原则）
- 投资策略
- 风险管理
术（技巧和方法）
- 如何打新
- 如何撸空投
- 如何出入金
- 如何获得海外身份

器（工具和资源）
- 钱包
- 交易所
- 行情工具
- 打新平台

# 网站的技术栈
使用Gatsby 5 框架

## 核心技术
- **前端框架**: Gatsby 5 (React-based)
- **样式**: Tailwind CSS 或 Styled Components
- **内容管理**: Markdown + MDX 支持
- **图片优化**: Gatsby Image Plugin
- **SEO**: Gatsby SEO Plugin
- **部署**: cloudflare

## 必需依赖
```json
{
  "gatsby": "^5.0.0",
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "gatsby-plugin-image": "^3.0.0",
  "gatsby-plugin-sharp": "^5.0.0",
  "gatsby-transformer-sharp": "^5.0.0",
  "gatsby-source-filesystem": "^5.0.0",
  "gatsby-plugin-mdx": "^5.0.0",
  "gatsby-plugin-sitemap": "^6.0.0",
  "gatsby-plugin-robots-txt": "^1.8.0"
}
```

## 推荐插件
- gatsby-plugin-manifest (PWA支持)
- gatsby-plugin-offline (离线支持)
- gatsby-remark-images (Markdown图片优化)

# 网站设计原则
- 简洁、现代、专业
- 响应式设计，适配多设备
- 用户体验友好，导航清晰
- 融入Web3元素和风格

## UI/UX 设计规范

### 色彩方案
- **主色调**: 深蓝色 (#1a202c) - 代表专业和信任
- **辅助色**: 金色 (#f6ad55) - 代表财富和机会
- **强调色**: 绿色 (#48bb78) - 代表增长和成功
- **背景色**: 浅灰 (#f7fafc) 和纯白 (#ffffff)
- **文字色**: 深灰 (#2d3748) 主文字，中灰 (#718096) 辅助文字

### 字体规范
- **标题字体**: Inter 或 Poppins (现代、清晰)
- **正文字体**: Source Sans Pro 或系统字体
- **代码字体**: Fira Code 或 Monaco
- **中文字体**: 思源黑体或苹方

### 布局规范
- **最大宽度**: 1200px (桌面端)
- **网格系统**: 12列网格布局
- **间距**: 基于8px的间距系统 (8px, 16px, 24px, 32px, 48px)
- **圆角**: 4px (小元素), 8px (卡片), 12px (大容器)

### Web3 视觉元素
- 区块链网格背景图案
- 加密货币图标和符号
- 渐变效果模拟数字资产流动
- 霓虹灯效果的按钮和边框
- 数据可视化图表和仪表盘风格

# 目标受众
- 对Web3、加密货币、区块链感兴趣的初学者和进阶用户
- 寻求投资策略和工具的用户

# 内容结构
- 首页：网站口号、最新文章、热门内容、关于我们
- 文章详情页：文章内容、作者信息、相关文章推荐、评论区
- 分类页：按"道、法、术、器"分类展示文章列表
- 关于我们页：网站介绍、团队介绍、联系方式

## 功能需求

### 核心功能
1. **文章管理系统**
   - Markdown/MDX 文章编写和渲染
   - 文章分类和标签系统
   - 文章搜索功能
   - 阅读时间估算
   - 文章目录导航

2. **导航和分类**
   - 四级分类导航 (道、法、术、器)
   - 面包屑导航
   - 侧边栏目录
   - 响应式移动端菜单

3. **用户体验功能**
   - 深色/浅色主题切换
   - 文章收藏功能
   - 社交分享按钮
   - 返回顶部按钮
   - 页面加载进度条

4. **SEO 和性能**
   - 自动生成 sitemap
   - 结构化数据标记
   - 图片懒加载和优化
   - 代码分割和预加载

### 交互设计要求
- **页面过渡**: 平滑的页面切换动画
- **悬停效果**: 按钮和链接的微交互
- **滚动体验**: 平滑滚动和视差效果
- **加载状态**: 骨架屏和加载动画
- **响应式**: 移动端友好的触摸交互

# SEO 优化
- 关键词优化
- 元数据设置
- 友好的URL结构

## 开发环境配置

### 环境要求
- **Node.js**: 版本 18.0.0 或更高
- **包管理器**: npm 或 yarn
- **Git**: 用于版本控制
- **编辑器**: VS Code (推荐插件: ES7+ React/Redux/React-Native snippets, Prettier, ESLint)

### 项目结构
```
fortunehunt/
├── src/
│   ├── components/          # 可复用组件
│   ├── pages/              # 页面组件
│   ├── templates/          # 模板文件
│   ├── content/            # Markdown 文章
│   ├── images/             # 图片资源
│   ├── styles/             # 样式文件
│   └── utils/              # 工具函数
├── static/                 # 静态资源
├── gatsby-config.js        # Gatsby 配置
├── gatsby-node.js          # 构建时配置
└── package.json           # 项目依赖
```

### 开发命令
```bash
npm install          # 安装依赖
npm run develop      # 启动开发服务器
npm run build        # 构建生产版本
npm run serve        # 预览生产版本
npm run clean        # 清理缓存
```

## 部署配置

### 推荐部署平台
1. **Netlify** (推荐)
   - 自动部署从 Git 仓库
   - 内置 CDN 和 SSL
   - 表单处理功能
   - 分支预览功能

2. **Vercel**
   - 零配置部署
   - 边缘函数支持
   - 自动 HTTPS
   - 性能分析工具

### 环境变量
```bash
GATSBY_SITE_URL=https://fortunehunt.io
GATSBY_GOOGLE_ANALYTICS_ID=GA_TRACKING_ID
GATSBY_DISQUS_NAME=DISQUS_SHORTNAME
```

### 构建优化
- 启用增量构建
- 图片格式优化 (WebP)
- 代码压缩和混淆
- 静态资源 CDN 加速

## 性能优化和最佳实践

### 性能目标
- **首屏加载时间**: < 3秒
- **Lighthouse 评分**: > 90分
- **Core Web Vitals**: 全部指标达到绿色
- **图片优化**: 自动 WebP 转换和懒加载

### 代码规范
```javascript
// 组件命名: PascalCase
const ArticleCard = () => {}

// 文件命名: kebab-case
// article-card.js, user-profile.css

// 常量命名: UPPER_SNAKE_CASE
const API_BASE_URL = 'https://api.fortunehunt.io'
```

### 最佳实践
1. **组件设计**
   - 保持组件单一职责
   - 使用 TypeScript 或 PropTypes
   - 实现错误边界处理
   - 合理使用 React.memo 优化渲染

2. **内容管理**
   - 文章使用 frontmatter 元数据
   - 图片统一放在 images 目录
   - 建立清晰的文件命名规范
   - 定期清理未使用的资源

3. **SEO 最佳实践**
   - 每个页面独特的 title 和 description
   - 使用语义化 HTML 标签
   - 添加结构化数据标记
   - 优化图片 alt 属性

4. **安全性**
   - 输入验证和 XSS 防护
   - 使用 HTTPS 和安全头
   - 定期更新依赖包
   - 敏感信息使用环境变量

## AI 开发指导原则

### 开发优先级
1. 首先创建基础项目结构和配置
2. 实现核心页面布局和导航
3. 添加文章系统和内容管理
4. 完善 UI 组件和交互效果
5. 优化性能和 SEO
6. 测试和部署

### 代码生成要求
- 生成完整可运行的代码
- 包含必要的注释和文档
- 遵循 React 和 Gatsby 最佳实践
- 确保代码的可维护性和扩展性
- 提供详细的安装和运行说明