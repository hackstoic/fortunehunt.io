import React from "react"
import { Link } from "gatsby"
import { FaTwitter, FaTelegram, FaDiscord, FaGithub } from "react-icons/fa"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-success-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">FH</span>
              </div>
              <div>
                <h3 className="text-xl font-bold gradient-text">FortuneHunt</h3>
                <p className="text-sm text-gray-300">寻找加密世界的财富密码</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              专注于Web3、加密货币、区块链投资策略和工具的知识分享平台。
              帮助用户在数字资产世界中找到属于自己的财富密码。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent-400 transition-colors duration-200">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-400 transition-colors duration-200">
                <FaTelegram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-400 transition-colors duration-200">
                <FaDiscord className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-400 transition-colors duration-200">
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-400">快速导航</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/dao" className="text-gray-300 hover:text-white transition-colors duration-200">
                  道 - 原理和规律
                </Link>
              </li>
              <li>
                <Link to="/fa" className="text-gray-300 hover:text-white transition-colors duration-200">
                  法 - 策略和原则
                </Link>
              </li>
              <li>
                <Link to="/shu" className="text-gray-300 hover:text-white transition-colors duration-200">
                  术 - 技巧和方法
                </Link>
              </li>
              <li>
                <Link to="/qi" className="text-gray-300 hover:text-white transition-colors duration-200">
                  器 - 工具和资源
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-400">资源</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  关于我们
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  联系我们
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors duration-200">
                  隐私政策
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors duration-200">
                  使用条款
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} FortuneHunt. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 sm:mt-0">
            Built with ❤️ for the Web3 community
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer