import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { FaHome, FaSearch } from "react-icons/fa"

const NotFoundPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="页面未找到" />
      
      <div className="min-h-screen bg-gradient-to-br from-primary-800 to-primary-900 flex items-center justify-center px-4">
        <div className="text-center text-white max-w-2xl">
          <div className="mb-8">
            <h1 className="text-8xl sm:text-9xl font-bold gradient-text mb-4">
              404
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              页面未找到
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              抱歉，您访问的页面不存在。可能是链接错误或页面已被移动。
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="neon-button inline-flex items-center justify-center"
            >
              <FaHome className="mr-2 w-4 h-4" />
              返回首页
            </Link>
            <Link 
              to="/dao" 
              className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-800 transition-all duration-300 inline-flex items-center justify-center"
            >
              <FaSearch className="mr-2 w-4 h-4" />
              浏览内容
            </Link>
          </div>
          
          <div className="mt-12 text-sm text-gray-400">
            <p>如果您认为这是一个错误，请联系我们的技术支持</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage