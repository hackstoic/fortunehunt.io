/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `FortuneHunt - 寻找加密世界的财富密码`,
    description: `专注于Web3、加密货币、区块链投资策略和工具的知识分享平台`,
    author: `FortuneHunt Team`,
    siteUrl: `https://fortunehunt.io`,
    keywords: `Web3, 加密货币, 区块链, 投资策略, DeFi, NFT, 数字资产`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              quality: 90,
              withWebp: true,
              loading: "lazy",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `FortuneHunt`,
        short_name: `FortuneHunt`,
        start_url: `/`,
        background_color: `#1a202c`,
        theme_color: `#f6ad55`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap`,
        excludes: [`/dev-404-page`, `/404`, `/404.html`, `/offline-plugin-app-shell-fallback`],
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://fortunehunt.io`,
        sitemap: `https://fortunehunt.io/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      },
    },
    `gatsby-plugin-postcss`,
  ],
}