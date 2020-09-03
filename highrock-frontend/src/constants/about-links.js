import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "Intro",
    url: "/about#intro",
  },
  {
    id: 2,
    text: "History",
    url: "/about#history",
  },
  {
    id: 3,
    text: "Difference",
    url: "/about#difference",
  },
  {
    id: 4,
    text: "Other",
    url: "/about#other",
  }
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link activeClassName="active" className={link.url === '/contact/' ? 'contact-cta btn' : ''} to={link.url}>{link.text}</Link>
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
