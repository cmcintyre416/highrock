import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import BackLink from "../components/BackLink"
import Sticky from 'react-sticky-el';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const customStyleObject = {
  top: '110px',
  maxHeight: 'auto',
  minHeight: 'auto',
  width: '100%',
  left: 0
};

const ComponentName = ({data}) => {
  const { description, name, position, image, telephone, email } = data.team;
  return <Layout>
    <section className="team-template section-padding">
      <BackLink title="All team" page="team"/>
      <div className="section-center-narrow">
        <article className="team-info">
          <Sticky topOffset={-110} stickyStyle={customStyleObject}>
            <div className="section-center-narrow team-sticky">
              <div className="team-sticky-info">
                <h1>{name}</h1>
                <h2>{position}</h2>
              </div>
              <div className="team-sticky-contact">
                <a className="telephone" href={`tel:${telephone}`}>{telephone}<FontAwesomeIcon icon={faPhone}/></a>
                <a className="email" href={`mailto:${email}`}>{email}<FontAwesomeIcon icon={faEnvelope}/></a>
              </div>
            </div>
          </Sticky>
          <div className="team-info-text">
            <div className="team-image">
              <Image fluid={image.childImageSharp.fluid}/>
            </div>
            <ReactMarkdown className="team-desc">{description}</ReactMarkdown>
          </div>
        </article>
      </div>
    </section>
  </Layout>
}

export const query = graphql`
  query GetSingleTeam($slug: String) {
    team: strapiTeams(slug: { eq: $slug }) {
      id
      name
      position
      description
      slug
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      telephone
      email
    }
  }
`

export default ComponentName
