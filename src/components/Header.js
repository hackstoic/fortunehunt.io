import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FaBars, FaTimes, FaSearch } from "react-icons/fa"
import ThemeToggle from "./ThemeToggle"

const Header = ({ location }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    {
      title: "道",
      subtitle: "原理和规律",
      path: "/dao",
      submenu: [
        { title: "市场周期", path: "/dao/market-cycles" },
        { title: "投资第一性原理", path: "/dao/first-principles" },
        { title: "认知变现", path: "/dao/cognitive-monetization" },
      ]
    },
    {
      title: "法",
      subtitle: "策略和原则", 
      path: "/fa",
      submenu: [
        { title: "投资策略", path: "/fa/investment-strategies" },
        { title: "风险管理", path: "/fa/risk-management" },
      ]
    },
    {
      title: "术",
      subtitle: "技巧和方法",
      path: "/shu",
      submenu: [
        { title: "如何打新", path: "/shu/ido-guide" },
        { title: "如何撸空投", path: "/shu/airdrop-guide" },
        { title: "如何出入金", path: "/shu/fiat-gateway" },
        { title: "如何获得海外身份", path: "/shu/overseas-identity" },
      ]
    },
    {
      title: "器",
      subtitle: "工具和资源",
      path: "/qi",
      submenu: [
        { title: "钱包", path: "/qi/wallets" },
        { title: "交易所", path: "/qi/exchanges" },
        { title: "行情工具", path: "/qi/market-tools" },
        { title: "打新平台", path: "/qi/ido-platforms" },
      ]
    }
  ]

  return (
    <header className="nav-menu sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-success-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">FH</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold gradient-text">FortuneHunt</h1>
              <p className="text-xs text-primary-500 -mt-1">寻找加密世界的财富密码</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                <Link
                  to={item.path}
                  className="flex flex-col items-center px-3 py-2 text-sm font-medium text-primary-700 hover:text-accent-600 transition-colors duration-200"
                >
                  <span className="text-lg font-bold">{item.title}</span>
                  <span className="text-xs text-primary-500">{item.subtitle}</span>
                </Link>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-primary-600 hover:bg-gray-50 hover:text-accent-600 transition-colors duration-150"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Search and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-primary-600 hover:text-accent-600 transition-colors duration-200">
              <FaSearch className="w-5 h-5" />
            </button>
            
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-primary-600 hover:text-accent-600 transition-colors duration-200"
            >
              {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="py-4 space-y-4">
              {menuItems.map((item) => (
                <div key={item.title}>
                  <Link
                    to={item.path}
                    className="flex items-center justify-between px-4 py-2 text-base font-medium text-primary-700 hover:text-accent-600 hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div>
                      <span className="font-bold">{item.title}</span>
                      <span className="ml-2 text-sm text-primary-500">({item.subtitle})</span>
                    </div>
                  </Link>
                  <div className="ml-4 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className="block px-4 py-1 text-sm text-primary-600 hover:text-accent-600 hover:bg-gray-50 transition-colors duration-150"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header