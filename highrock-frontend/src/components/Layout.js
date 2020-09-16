import React, { useState, useEffect } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import Progress from './Progress'

const Layout = ({ children , navVersion, indicator}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false);
  }, [])

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Progress isAnimating={isLoading} animationDuration={300}
  incrementDuration={500}/>
      { !isLoading &&
        <>
          <Navbar indicator={indicator} navVersion={navVersion} toggleSidebar={toggleSidebar}/>
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
            <div className="page-content">
              {children}
            </div>
          <Footer/>
        </>
      }
    </>
  )
}

export default Layout
