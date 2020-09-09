import React from "react"
import {AboutLinks} from "./AboutLinks"
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
              <AboutLinks styleClass="nav-links"></AboutLinks>
            </div>
        </nav>
      </Sticky>
}

export default AboutSubNav
