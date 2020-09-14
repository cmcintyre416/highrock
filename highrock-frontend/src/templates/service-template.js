import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
import BackLink from "../components/BackLink"
import Accordion from "../components/Accordion"

const ComponentName = ({
  data: {
    services,
    allStrapiPrivateClientFaqs: { nodes: faqs },
  },
}) => {

  return <Layout indicator>
    <SEO title={services.title} description={services.description}/>
    <div className="service-template section-padding section-center-narrow">
    <BackLink title="All services" page="services"/>
    <h1>{services.title}</h1>
    <section className="service-template-content">
      <div className="section-padding">
        <article className="service-content">
          <ReactMarkdown source={services.info}/>
        </article>
      </div>
    </section>
    { services.title === 'Private Client Wealth Management' &&
      <section className="section-center-narrow">
        <h2>Private Client Frequently Asked Questions</h2>
          { faqs.map( faq => { 
            return <Accordion faq={faq}/>
          })}
      </section>
    }
    </div>
  </Layout>
}

export const query = graphql`
  query GetSingleService($slug: String) {
    services: strapiServices(slug: {eq: $slug}) {
      title
      description
      info
    }
    allStrapiPrivateClientFaqs {
      nodes {
        id
        question
        answer
      }
    }
  }
`;

export default ComponentName
