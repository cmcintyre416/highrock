import React from "react"
import PageLinks from "../constants/about-links"
import Sticky from 'react-sticky-el';

const customStyleObject = {
  top: '110px',
  maxHeight: 'auto',
  minHeight: 'auto'
};

const AboutSubNav = () => {
    return <Sticky topOffset={-110} stickyStyle={customStyleObject}>
        <nav className="about-content-nav">
            <div className="nav-center section-center-narrow">
              <PageLinks styleClass="nav-links"></PageLinks>
            </div>
        </nav>
      </Sticky>
}

export default AboutSubNav
