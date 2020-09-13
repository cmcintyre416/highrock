import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import ServiceList from "../components/ServiceList"
import Teams from "../components/Teams"
import SEO from "../components/SEO"
import Title from "../components/Title"
import Differences from "../components/Differences"
import TeamsBox from "../components/TeamsBox"

export default ({data}) => {
  const {
    allStrapiTeams:{ nodes:team },
    allStrapiBlogs:{ nodes:blogs }
  } = data;

  return <Layout indicator navVersion="absolute">
    <div className="home">
      <SEO title="Home" description="This is the home page for Highrock capital."/>
      <Hero/>
      <div className="section-center-narrow section-padding">
            <Title title="Why High Rock?"/>
            <Differences/>
          <div className="section-padding">
            <ServiceList includeLink includeTitle/>
          </div>
          <div className="section-padding">
            <Title title="Meet the team"/>
            <TeamsBox team={team}/>
          </div>
          {/* <Blogs blogs={blogs} title="latest blog posts" showLink/> */}
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