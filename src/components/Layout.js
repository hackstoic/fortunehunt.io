import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import BackToTop from "./BackToTop"

const Layout = ({ children, location }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header location={location} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default Layout