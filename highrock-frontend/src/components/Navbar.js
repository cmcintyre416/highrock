import React from "react"
import logo from "../assets/logo.png"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import Sticky from 'react-sticky-el';
import Indicator from "../components/Indicator"

const Navbar = ({toggleSidebar, navVersion, indicator}) => {
    return <nav className={`nav-${navVersion} nav-main`}>
        <Sticky>
          <div className="nav-center">
            <div className="nav-header">
              <a href="/">
              <img src={logo} alt="logo"/>
              </a>
              { indicator &&
                <Indicator/>
              }
              <button type="button" className="toggle-btn" onClick={toggleSidebar}>
                <FaAlignRight></FaAlignRight>
              </button>
            </div>
            <PageLinks styleClass="nav-links"></PageLinks>
          </div>
        </Sticky>
      </nav>
}

export default Navbar
