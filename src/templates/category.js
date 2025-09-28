import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { FaClock, FaTag, FaArrowRight } from "react-icons/fa"

const CategoryTemplate = ({ data, pageContext, location }) => {
  const { category } = pageContext
  const articles = data.allMdx.nodes

  const categoryInfo = {
    dao: {
      title: "道 - 原理和规律",
      description: "深入理解Web3世界的底层逻辑和基本原理，建立正确的投资认知框架。",
      color: "from-blue-500 to-purple-600"
    },
    fa: {
      title: "法 - 策略和原则",
      description: "学习成熟的投资策略和风险管理原则，制定适合自己的投资方法论。",
      color: "from-green-500 to-teal-600"
    },
    shu: {
      title: "术 - 技巧和方法",
      description: "掌握Web3投资的实用技巧和具体操作方法，提升实战能力。",
      color: "from-orange-500 to-red-600"
    },
    qi: {
      title: "器 - 工具和资源",
      description: "精选最实用的Web3工具和优质资源，提高投资效率。",
      color: "from-purple-500 to-pink-600"
    }
  }

  const currentCategory = categoryInfo[category]

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <Layout location={location}>
      <SEO 
        title={currentCategory.title}
        description={currentCategory.description}
        pathname={`/${category}`}
      />
      
      {/* Category Header */}
      <section className={`bg-gradient-to-br ${currentCategory.color} text-white py-20`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              {currentCategory.title}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {currentCategory.description}
            </p>
          </div>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {articles.length > 0 ? (
            <>
              <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary-800 mb-4">
                  相关文章 ({articles.length})
                </h2>
                <p className="text-primary-600">
                  探索{currentCategory.title}相关的深度内容
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <Link
                    key={article.id}
                    to={article.fields.slug}
                    className="crypto-card p-6 group hover:scale-105 transition-all duration-300"
                  >
                    {/* Article Image Placeholder */}
                    <div className={`w-full h-48 bg-gradient-to-br ${currentCategory.color} rounded-lg mb-4 flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg">
                        {article.frontmatter.title.substring(0, 2)}
                      </span>
                    </div>

                    {/* Article Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary-800 mb-3 group-hover:text-accent-600 transition-colors duration-200 line-clamp-2">
                        {article.frontmatter.title}
                      </h3>
                      
                      <p className="text-primary-600 mb-4 line-clamp-3 leading-relaxed">
                        {article.frontmatter.description}
                      </p>

                      {/* Tags */}
                      {article.frontmatter.tags && article.frontmatter.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {article.frontmatter.tags.slice(0, 3).map((tag, index) => (
                            <span 
                              key={index}
                              className="px-2 py-1 bg-gray-100 text-primary-600 rounded text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Article Meta */}
                      <div className="flex items-center justify-between text-sm text-primary-500">
                        <div className="flex items-center">
                          <FaClock className="w-3 h-3 mr-1" />
                          <span>{formatDate(article.frontmatter.date)}</span>
                        </div>
                        <div className="flex items-center">
                          <span>{article.frontmatter.readingTime} 分钟</span>
                        </div>
                      </div>

                      {/* Read More */}
                      <div className="mt-4 flex items-center text-accent-600 group-hover:text-accent-700 transition-colors duration-200">
                        <span className="text-sm font-medium">阅读全文</span>
                        <FaArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className={`w-24 h-24 bg-gradient-to-br ${currentCategory.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <span className="text-white font-bold text-2xl">
                  {currentCategory.title.charAt(0)}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-primary-800 mb-4">
                内容即将上线
              </h3>
              <p className="text-primary-600 mb-8 max-w-md mx-auto">
                我们正在为{currentCategory.title}准备精彩的内容，敬请期待！
              </p>
              <Link 
                to="/" 
                className="neon-button"
              >
                返回首页
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-800 mb-4">
              探索其他分类
            </h2>
            <p className="text-primary-600">
              构建完整的Web3知识体系
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(categoryInfo)
              .filter(([key]) => key !== category)
              .map(([key, info]) => (
                <Link
                  key={key}
                  to={`/${key}`}
                  className="crypto-card p-6 text-center group hover:scale-105 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-white font-bold text-xl">
                      {info.title.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-primary-800 mb-2 group-hover:text-accent-600 transition-colors duration-200">
                    {info.title}
                  </h3>
                  <p className="text-primary-600 text-sm">
                    {info.description}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default CategoryTemplate

export const query = graphql`
  query($category: String!) {
    allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        id
        frontmatter {
          title
          description
          date
          tags
          readingTime
          featured
        }
        fields {
          slug
        }
      }
    }
  }
`