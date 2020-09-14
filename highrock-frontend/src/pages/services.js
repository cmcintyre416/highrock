import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Intro from "../components/Intro"
import ServiceList from "../components/ServiceList"
import SEO from "../components/SEO"

const Services = ({
  data: {
    intro,
    allStrapiServices:{ nodes:services }
  },
}) => {
  return <Layout>
    <SEO title="Services" description="High Rock offers the following services to their customers."/>
    <div className="section-center-narrow">
      <Intro data={intro}/>
    </div>
    <section className="services-page section-color-gray">
    <div className="section-center-narrow section-padding">
     <ServiceList data={services}/>
    </div>
    </section>
  </Layout>
}

export const query = graphql`
{
  intro:strapiIntroService {
    title
    subTitle
    description
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
`;

export default Services
