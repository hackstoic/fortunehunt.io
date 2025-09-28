import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { FaClock, FaTag, FaArrowRight } from "react-icons/fa"

const ArticlesPage = ({ data, location }) => {
  const articles = data.allMdx.nodes

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const categoryInfo = {
    dao: { title: "道", color: "from-blue-500 to-purple-600" },
    fa: { title: "法", color: "from-green-500 to-teal-600" },
    shu: { title: "术", color: "from-orange-500 to-red-600" },
    qi: { title: "器", color: "from-purple-500 to-pink-600" }
  }

  return (
    <Layout location={location}>
      <SEO 
        title="所有文章"
        description="浏览FortuneHunt的所有Web3投资相关文章，涵盖原理、策略、技巧和工具四大分类。"
        pathname="/articles"
      />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              所有文章
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              探索Web3投资的完整知识体系，从基础原理到实战技巧
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
                  全部文章 ({articles.length})
                </h2>
                <p className="text-primary-600">
                  按发布时间排序，最新文章优先显示
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => {
                  const category = categoryInfo[article.frontmatter.category] || categoryInfo.dao
                  
                  return (
                    <Link
                      key={article.id}
                      to={article.fields.slug}
                      className="crypto-card p-6 group hover:scale-105 transition-all duration-300"
                    >
                      {/* Category Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${category.color} text-white`}>
                          {category.title}
                        </span>
                        {article.frontmatter.featured && (
                          <span className="px-2 py-1 bg-accent-100 text-accent-800 rounded text-xs font-medium">
                            精选
                          </span>
                        )}
                      </div>

                      {/* Article Image Placeholder */}
                      <div className={`w-full h-48 bg-gradient-to-br ${category.color} rounded-lg mb-4 flex items-center justify-center`}>
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
                        <div className="flex items-center justify-between text-sm text-primary-500 mb-4">
                          <div className="flex items-center">
                            <FaClock className="w-3 h-3 mr-1" />
                            <span>{formatDate(article.frontmatter.date)}</span>
                          </div>
                          <div className="flex items-center">
                            <span>{article.frontmatter.readingTime} 分钟</span>
                          </div>
                        </div>

                        {/* Read More */}
                        <div className="flex items-center text-accent-600 group-hover:text-accent-700 transition-colors duration-200">
                          <span className="text-sm font-medium">阅读全文</span>
                          <FaArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gradient-to-br from-accent-500 to-success-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold text-primary-800 mb-4">
                暂无文章
              </h3>
              <p className="text-primary-600 mb-8 max-w-md mx-auto">
                我们正在准备精彩的内容，敬请期待！
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

      {/* Categories Navigation */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-800 mb-4">
              按分类浏览
            </h2>
            <p className="text-primary-600">
              根据不同分类深入学习Web3投资知识
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(categoryInfo).map(([key, info]) => (
              <Link
                key={key}
                to={`/${key}`}
                className="crypto-card p-6 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white font-bold text-xl">
                    {info.title}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-primary-800 mb-2 group-hover:text-accent-600 transition-colors duration-200">
                  {info.title} - {key === 'dao' ? '原理和规律' : key === 'fa' ? '策略和原则' : key === 'shu' ? '技巧和方法' : '工具和资源'}
                </h3>
                <div className="flex items-center justify-center text-accent-600 group-hover:text-accent-700 transition-colors duration-200">
                  <span className="text-sm font-medium">查看分类</span>
                  <FaArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ArticlesPage

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        frontmatter {
          title
          description
          date
          category
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