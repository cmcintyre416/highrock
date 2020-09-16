import React from "react"
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
    text: "What we do",
    url: "#what-we-do",
  },
  {
    id: 4,
    text: "Faq",
    url: "#faq",
  }
]


export const AboutLinks = () => {

  const navigation = (link) => {
    scrollTo(link.url, 'center');
  };

  return <ul className="page-links nav-links about-links">
    { data.map((link, index) => {
      return <li key={index} className={`${link.url === '/contact/' ? 'contact-cta btn' : ''}`} onClick={(e)=>{
        e.preventDefault();
        navigation(link)}}>
          {link.text}
        </li>
    })}
  </ul>
};