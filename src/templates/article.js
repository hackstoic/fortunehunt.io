import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { FaClock, FaTag, FaUser, FaArrowLeft, FaShare } from "react-icons/fa"

// Custom components for MDX
const components = {
  h1: (props) => <h1 className="text-3xl sm:text-4xl font-bold text-primary-800 mb-6 mt-8" {...props} />,
  h2: (props) => <h2 className="text-2xl sm:text-3xl font-bold text-primary-800 mb-4 mt-8" {...props} />,
  h3: (props) => <h3 className="text-xl sm:text-2xl font-bold text-primary-800 mb-3 mt-6" {...props} />,
  p: (props) => <p className="text-primary-600 mb-4 leading-relaxed" {...props} />,
  ul: (props) => <ul className="list-disc list-inside text-primary-600 mb-4 space-y-2" {...props} />,
  ol: (props) => <ol className="list-decimal list-inside text-primary-600 mb-4 space-y-2" {...props} />,
  li: (props) => <li className="ml-4" {...props} />,
  blockquote: (props) => (
    <blockquote className="border-l-4 border-accent-500 pl-4 py-2 my-6 bg-accent-50 italic text-primary-700" {...props} />
  ),
  code: (props) => (
    <code className="bg-gray-100 text-accent-700 px-2 py-1 rounded text-sm font-mono" {...props} />
  ),
  pre: (props) => (
    <pre className="bg-primary-800 text-white p-4 rounded-lg overflow-x-auto mb-6" {...props} />
  ),
  a: (props) => (
    <a className="text-accent-600 hover:text-accent-700 underline transition-colors duration-200" {...props} />
  ),
}

const ArticleTemplate = ({ data, children, location }) => {
  const article = data.mdx
  const { title, description, date, category, tags, author, readingTime } = article.frontmatter

  const categoryNames = {
    dao: "道 - 原理和规律",
    fa: "法 - 策略和原则", 
    shu: "术 - 技巧和方法",
    qi: "器 - 工具和资源"
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareText = `${title} - FortuneHunt`

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: shareText,
        text: description,
        url: shareUrl,
      })
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(shareUrl)
      alert('链接已复制到剪贴板')
    }
  }

  return (
    <Layout location={location}>
      <SEO 
        title={title}
        description={description}
        pathname={article.fields.slug}
        article={true}
        datePublished={date}
        dateModified={date}
      />
      
      <article className="bg-white">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-primary-500 hover:text-accent-600 transition-colors duration-200">
                首页
              </Link>
              <span className="text-primary-400">/</span>
              <Link 
                to={`/${category}`} 
                className="text-primary-500 hover:text-accent-600 transition-colors duration-200"
              >
                {categoryNames[category]}
              </Link>
              <span className="text-primary-400">/</span>
              <span className="text-primary-700 font-medium">{title}</span>
            </nav>
          </div>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent-100 text-accent-800 mb-4">
              {categoryNames[category]}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-primary-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          </div>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-primary-500 border-t border-b border-gray-200 py-6">
            <div className="flex items-center">
              <FaUser className="w-4 h-4 mr-2" />
              <span>{author}</span>
            </div>
            <div className="flex items-center">
              <FaClock className="w-4 h-4 mr-2" />
              <span>{formatDate(date)}</span>
            </div>
            <div className="flex items-center">
              <FaClock className="w-4 h-4 mr-2" />
              <span>{readingTime} 分钟阅读</span>
            </div>
            <button 
              onClick={handleShare}
              className="flex items-center hover:text-accent-600 transition-colors duration-200"
            >
              <FaShare className="w-4 h-4 mr-2" />
              <span>分享</span>
            </button>
          </div>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              <FaTag className="w-4 h-4 text-primary-400" />
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-primary-600 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="article-content">
            <MDXProvider components={components}>
              {children}
            </MDXProvider>
          </div>
        </div>

        {/* Article Footer */}
        <footer className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link 
              to={`/${category}`}
              className="inline-flex items-center text-accent-600 hover:text-accent-700 font-medium transition-colors duration-200"
            >
              <FaArrowLeft className="w-4 h-4 mr-2" />
              返回{categoryNames[category]}
            </Link>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-primary-500">分享到：</span>
              <button 
                onClick={handleShare}
                className="p-2 text-primary-500 hover:text-accent-600 transition-colors duration-200"
              >
                <FaShare className="w-5 h-5" />
              </button>
            </div>
          </div>
        </footer>
      </article>
    </Layout>
  )
}

export default ArticleTemplate

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
        date
        category
        tags
        author
        readingTime
      }
      fields {
        slug
      }
    }
  }
`