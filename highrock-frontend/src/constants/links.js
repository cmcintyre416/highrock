import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from "gatsby"

const data = [
  {
    id: 1,
    text: "about us",
    url: "/about",
  },
  {
    id: 2,
    text: "team",
    url: "/team",
  },
  {
    id: 3,
    text: "services",
    url: "/services",
  },
  {
    id: 5,
    text: "contact",
    url: "/contact",
  },
  {
    id: 6,
    text: "Client Centre",
    url: "https://rjcs.raymondjames.ca/",
    isAnchor: true,
  },
]

// {
//   id: 4,
//   text: "media",
//   url: "/media",
// },

const tempLinks = data.map((link) => {
  return (
    <li key={link.id} className={link.url === '/contact' ? 'contact-li' : 'nav-links-li'}>
      { !link.isAnchor ?
        <Link activeClassName="active" className={link.url === '/contact' ? 'contact-cta btn' : ''} to={link.url}>{link.text}</Link>
        :
        <a className="nav-client-login btn" target="_blank" href={link.url}>
          <span className="nav-client-login-text">Client Login</span>
          <FontAwesomeIcon icon={faUser}/>
        </a>
      }
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
