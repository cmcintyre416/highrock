import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
import Intro from "../components/Intro"
import Histories from "../components/Histories"
import AboutSubNav from "../components/AboutSubNav"
import Accordion from "../components/Accordion"
import Differences from "../components/Differences"

const About = ({
  data: {
    about: { nodes },
    intro,
    allStrapiAboutFaqs: { nodes: faqs }
  },
}) => {
  const{title,info} = nodes[0];
  console.log(faqs);
  return <Layout>
    <SEO title="about" description="About highrock capital"/>
    <div className="section-center-narrow">
        <Intro data={intro}/>
    </div>
    <div className="about-content">
    <AboutSubNav/>
    <section id="intro" className="section-color-gray">
      <div className="about-page section-center-narrow section-padding">
          <article className="about-text">
            <ReactMarkdown source={info}/>
          </article>
      </div>
    </section>
      <section id="history" className="section-center-narrow section-padding">
      <h2>Our History</h2>
      <Histories/>
      </section>
      <section id="difference" className="section-center-narrow section-padding">
      <h2>What makes us different</h2>
      <Differences/>
      </section>
      <section id="what-we-do" className="section-center-narrow section-padding">
      <h2>What we do</h2>
      </section>
      <section id="faq" className="section-center-narrow section-padding">
      <h2>Frequently asked questions</h2>
        { faqs.map( faq => { 
          return <Accordion faq={faq}/>
        })}
      </section>
    </div>
  </Layout>
}

export const query = graphql`
  {
    about:allStrapiAbout {
      nodes {
        title
        info
      }
    }
    intro:strapiIntroAbout {
      title
      subTitle
      description
    }
    allStrapiAboutFaqs {
      nodes {
        id
        question
        answer
      }
    }
  }
`

export default About


