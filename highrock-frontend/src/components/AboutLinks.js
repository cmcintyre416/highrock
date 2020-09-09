import React from "react"
import { Link } from "gatsby"
import scrollTo from 'gatsby-plugin-smoothscroll';

const data = [
  {
    id: 1,
    text: "Intro",
    url: "#intro",
  },
  {
    id: 2,
    text: "History",
    url: "#history",
  },
  {
    id: 3,
    text: "Difference",
    url: "#difference",
  },
  {
    id: 4,
    text: "Other",
    url: "#other",
  }
]


export const AboutLinks = () => {

  const navigation = (link) => {
    scrollTo(link.url, 'center');
  };

  return <ul className="page-links nav-links">
    {data.map((link, index) => {
      return <li key={link.id} className={` testing  ${link.url === '/contact/' ? 'contact-cta btn' : ''}`}>
          <Link onClick={(e)=>{
            e.preventDefault();
            navigation(link);
          }}>{link.text}</Link>
        </li>
    })}
  </ul>
};