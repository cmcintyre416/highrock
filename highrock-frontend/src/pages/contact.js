import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Teams from "../components/Teams"
import SEO from "../components/SEO"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faPhone, faMapPin } from '@fortawesome/free-solid-svg-icons'


const contact = ({
    data: {
      allStrapiTeams: { nodes: team }
    },
  }) => {
  return <Layout>
    <SEO title="contact" description="Contact High Rock Capital."/>
    <section className="contact-page section-padding">
      <article className="section-center-narrow">
        <h1>Contact us</h1>
        <div className="personal-contact">
          <Teams team={team} list contact/>
        </div>
        <div className="form-wrapper">
          <form action="" method="POST">
            <h2>Form</h2>
            <div className="form-group">
              <input type="text" placeholder="name" name="name" className="form-control"/>
              <input type="email" placeholder="email" name="email" className="form-control"/>
              <input type="tel" placeholder="Telephone" name="telephone" className="form-control"/>
              <textarea name="message" placeholder="message" className="form-control" rows="5"></textarea>
              <button type="submit" className="submit-btn btn">Submit</button>
            </div>
          </form>
        </div>
          <div className="office-wrapper">
            <h2><span aria-hidden="true"><FontAwesomeIcon icon={faBuilding}/> </span>Office</h2>
              <p>
              <FontAwesomeIcon icon={faMapPin}/> 1 Toronto St., Suite 210, PO Box 4</p>
              <p className="office-contact-padding">Toronto, Ont.</p>
              <p className="office-contact-padding">M5C 2V6</p>
              <a href="tel:1-866-697-6928">
              <FontAwesomeIcon icon={faPhone}/> 1-866-697-6928
              </a>
          </div>
      </article>
    </section>
  </Layout>
}

export const query = graphql`
{
  allStrapiTeams {
    nodes {
      id
      name
      position
      telephone
      email
    }
  }
}
`

export default contact
