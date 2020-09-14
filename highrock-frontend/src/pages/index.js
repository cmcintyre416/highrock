import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import SEO from "../components/SEO"
import Title from "../components/Title"
import Differences from "../components/Differences"
import TeamsBox from "../components/TeamsBox"
import ServiceList from "../components/ServiceList"

export default ({data}) => {
  const {
    allStrapiTeams:{ nodes:team },
    allStrapiServices:{ nodes:services }
  } = data;

  return <Layout indicator navVersion="absolute">
    <div className="home">
      <SEO title="Home" description="This is the home page for Highrock capital."/>
      <Hero/>
      <div className="section-center-narrow section-padding">
          <Title title="Our services"/>
          <ServiceList data={services}/>
          <Link className="btn center-btn" to={'/services'}>All Services</Link>
        <div className="section-padding">
          <Title title="Why High Rock?"/>
          <Differences/>
        </div>
        <Title title="Meet the team"/>
        <TeamsBox team={team}/>
        <Link className="btn center-btn" to={'/team'}>All Team</Link>
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
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  allStrapiServices {
    nodes {
      icon {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      description
      id
      slug
      title
    }
  }
}
`