import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { FaRocket, FaChartLine, FaShieldAlt, FaCogs, FaArrowRight } from "react-icons/fa"

const IndexPage = ({ data, location }) => {
  const featuredCategories = [
    {
      title: "道",
      subtitle: "原理和规律",
      description: "深入理解市场周期、投资第一性原理，掌握认知变现的核心逻辑",
      icon: <FaChartLine className="w-8 h-8" />,
      path: "/dao",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "法",
      subtitle: "策略和原则",
      description: "学习成熟的投资策略，建立完善的风险管理体系",
      icon: <FaShieldAlt className="w-8 h-8" />,
      path: "/fa",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "术",
      subtitle: "技巧和方法",
      description: "掌握打新、空投、出入金等实用技巧和操作方法",
      icon: <FaRocket className="w-8 h-8" />,
      path: "/shu",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "器",
      subtitle: "工具和资源",
      description: "精选钱包、交易所、行情工具等必备Web3工具",
      icon: <FaCogs className="w-8 h-8" />,
      path: "/qi",
      color: "from-purple-500 to-pink-600"
    }
  ]

  return (
    <Layout location={location}>
      <SEO 
        title="首页"
        description="FortuneHunt - 寻找加密世界的财富密码。专注于Web3、加密货币、区块链投资策略和工具的知识分享平台。"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 web3-grid opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              寻找加密世界的
              <span className="block gradient-text">财富密码</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up">
              专注于Web3、加密货币、区块链投资策略和工具的知识分享平台
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link to="/dao" className="neon-button inline-flex items-center">
                开始探索
                <FaArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link 
                to="/about" 
                className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-800 transition-all duration-300"
              >
                了解更多
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent-500 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-success-500 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-accent-400 rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-800 mb-4">
              四大知识体系
            </h2>
            <p className="text-xl text-primary-600 max-w-2xl mx-auto">
              从原理到实践，从策略到工具，全方位构建你的Web3知识框架
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCategories.map((category, index) => (
              <Link
                key={category.title}
                to={category.path}
                className="crypto-card p-6 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:animate-glow`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary-800 mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-accent-600 font-medium mb-3">
                  {category.subtitle}
                </p>
                <p className="text-primary-600 text-sm leading-relaxed">
                  {category.description}
                </p>
                <div className="mt-4 flex items-center justify-center text-accent-600 group-hover:text-accent-700 transition-colors duration-200">
                  <span className="text-sm font-medium">了解更多</span>
                  <FaArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-800 mb-4">
                最新文章
              </h2>
              <p className="text-xl text-primary-600">
                获取最新的Web3投资洞察和市场分析
              </p>
            </div>
            <Link 
              to="/articles" 
              className="hidden sm:flex items-center text-accent-600 hover:text-accent-700 font-medium transition-colors duration-200"
            >
              查看全部
              <FaArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          {/* Placeholder for articles - will be populated when article system is implemented */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="crypto-card p-6">
                <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500">文章封面</span>
                </div>
                <h3 className="text-xl font-bold text-primary-800 mb-2">
                  示例文章标题 {item}
                </h3>
                <p className="text-primary-600 mb-4">
                  这里是文章摘要，介绍文章的主要内容和核心观点...
                </p>
                <div className="flex items-center justify-between text-sm text-primary-500">
                  <span>2024年1月{item}日</span>
                  <span>5分钟阅读</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:hidden">
            <Link 
              to="/articles" 
              className="inline-flex items-center text-accent-600 hover:text-accent-700 font-medium transition-colors duration-200"
            >
              查看全部文章
              <FaArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-500 to-success-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            开始你的Web3财富之旅
          </h2>
          <p className="text-xl mb-8 opacity-90">
            加入我们的社区，获取最新的投资策略和市场洞察
          </p>
          <Link to="/dao" className="neon-button bg-white text-accent-600 hover:bg-gray-100">
            立即开始
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`