import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import ServiceList from "../components/ServiceList"
import Teams from "../components/Teams"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

export default ({data}) => {
  const {
    allStrapiTeams:{ nodes:team },
    allStrapiBlogs:{ nodes:blogs }
  } = data;

  return <Layout navVersion="absolute">
    <div className="home">
      <SEO title="Home" description="This is the home page for Highrock capital."/>
      <Hero/>
      <div className="section-center-narrow section-padding">
          <ServiceList/>
          <Teams team={team} title="Meet the team" showLink/>
          <Blogs blogs={blogs} title="latest blog posts" showLink/>
      </div>
    </div>
  </Layout>
}

export const query = graphql`
{
  allStrapiTeams {
    nodes {
      id
      name
      position
      teaser
      slug
    }
  }
  allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
    nodes {
      slug
      description
      date(formatString: "MMMM Do, YYYY")
      id
      title
      category
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`