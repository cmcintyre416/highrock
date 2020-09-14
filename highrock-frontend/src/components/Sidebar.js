import React from "react"
import Links from "../constants/links"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Sidebar = ({isOpen, toggleSidebar}) => {
  return <aside className={`sidebar ${isOpen? 'show-sidebar' : ''}`}>
    <button className="close-btn" onClick={toggleSidebar}>
      <FontAwesomeIcon icon={faTimes}/>
    </button>
    <div className="side-container">
      <Links styleClass={`${isOpen ? 'sidebar-links': ''}`}/>
    </div>
  </aside>
}

export default Sidebar
