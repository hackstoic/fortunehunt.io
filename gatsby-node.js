const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Create pages from MDX files
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Query for all MDX files
  const result = await graphql(`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          id
          frontmatter {
            title
            category
            tags
          }
          fields {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error loading MDX result`, result.errors)
  }

  // Create article pages
  const articles = result.data.allMdx.nodes
  const articleTemplate = path.resolve(`./src/templates/article.js`)

  articles.forEach((article) => {
    createPage({
      path: article.fields.slug,
      component: `${articleTemplate}?__contentFilePath=${article.internal.contentFilePath}`,
      context: {
        id: article.id,
        slug: article.fields.slug,
      },
    })
  })

  // Create category pages
  const categories = ['dao', 'fa', 'shu', 'qi']
  const categoryTemplate = path.resolve(`./src/templates/category.js`)

  categories.forEach((category) => {
    createPage({
      path: `/${category}`,
      component: categoryTemplate,
      context: {
        category: category,
      },
    })
  })

  // Create articles list page
  createPage({
    path: `/articles`,
    component: path.resolve(`./src/templates/articles.js`),
    context: {},
  })
}

// Create slug field for MDX files
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

// Configure webpack for better performance
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  })
}