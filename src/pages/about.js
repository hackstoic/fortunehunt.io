import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { FaRocket, FaUsers, FaLightbulb, FaHeart } from "react-icons/fa"

const AboutPage = ({ location }) => {
  const values = [
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "知识分享",
      description: "我们相信知识的力量，致力于分享最有价值的Web3投资智慧"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "社区驱动",
      description: "构建一个开放、包容的学习社区，让每个人都能从中受益"
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "持续创新",
      description: "紧跟Web3发展趋势，不断更新和完善我们的内容体系"
    },
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: "用户至上",
      description: "以用户需求为导向，提供最实用、最有价值的投资指导"
    }
  ]

  return (
    <Layout location={location}>
      <SEO 
        title="关于我们"
        description="了解FortuneHunt的使命、愿景和团队。我们致力于为Web3投资者提供最有价值的知识和工具。"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            关于 <span className="gradient-text">FortuneHunt</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            我们是一群热爱Web3的探索者，致力于帮助更多人在加密世界中找到属于自己的财富密码
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-800 mb-6">
                我们的使命
              </h2>
              <p className="text-lg text-primary-600 mb-6 leading-relaxed">
                在快速发展的Web3世界中，信息繁杂、机会与风险并存。FortuneHunt致力于为投资者提供系统化、实用化的知识体系，帮助大家在这个充满机遇的数字资产世界中找到正确的方向。
              </p>
              <p className="text-lg text-primary-600 leading-relaxed">
                我们相信，通过"道、法、术、器"四个维度的知识体系，每个人都能够建立起自己的投资框架，在Web3的浪潮中乘风破浪。
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent-50 to-success-50 p-8 rounded-2xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-500 to-success-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaRocket className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary-800 mb-4">
                  寻找财富密码
                </h3>
                <p className="text-primary-600">
                  不是投机取巧，而是通过系统学习和实践，掌握Web3投资的核心逻辑和方法论
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-800 mb-4">
              我们的价值观
            </h2>
            <p className="text-xl text-primary-600 max-w-2xl mx-auto">
              这些核心价值观指导着我们的每一个决策和行动
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="crypto-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-success-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-primary-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge System Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-800 mb-4">
              四维知识体系
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              我们将Web3投资知识分为四个层次，帮助你建立完整的认知框架
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="crypto-card p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
                  道
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-800">原理和规律</h3>
                  <p className="text-primary-500">底层逻辑与认知框架</p>
                </div>
              </div>
              <p className="text-primary-600">
                深入理解市场周期、投资第一性原理等底层逻辑，建立正确的投资认知框架。
              </p>
            </div>
            
            <div className="crypto-card p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
                  法
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-800">策略和原则</h3>
                  <p className="text-primary-500">投资方法与风险管理</p>
                </div>
              </div>
              <p className="text-primary-600">
                学习成熟的投资策略，建立完善的风险管理体系，制定适合自己的投资原则。
              </p>
            </div>
            
            <div className="crypto-card p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
                  术
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-800">技巧和方法</h3>
                  <p className="text-primary-500">实操技能与具体方法</p>
                </div>
              </div>
              <p className="text-primary-600">
                掌握打新、空投、出入金等具体操作技巧，提升实际投资操作能力。
              </p>
            </div>
            
            <div className="crypto-card p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
                  器
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-800">工具和资源</h3>
                  <p className="text-primary-500">必备工具与优质资源</p>
                </div>
              </div>
              <p className="text-primary-600">
                精选钱包、交易所、行情工具等必备Web3工具，提供优质的学习资源。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-800 to-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            加入我们的社区
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            与志同道合的Web3投资者一起学习、成长、分享
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="neon-button">
              加入Telegram群
            </a>
            <a href="#" className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-800 transition-all duration-300">
              关注Twitter
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage