import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Teams from "../components/Teams"

const contact = ({
    data: {
      allStrapiTeams: { nodes: team }
    },
  }) => {
  return <Layout>
    <section className="contact-page section-padding">
      <article className="section-center-narrow">
        <h1>Contact us</h1>
        <div className="personal-contact">
          <Teams team={team} list contact/>
        </div>
        <form action="" method="POST">
          <h3>Form</h3>
          <div className="form-group">
            <input type="text" placeholder="name" name="name" className="form-control"/>
            <input type="email" placeholder="email" name="email" className="form-control"/>
            <input type="tel" placeholder="Telephone" name="telephone" className="form-control"/>
            <textarea name="message" placeholder="message" className="form-control" rows="5"></textarea>
            <button type="submit" className="submit-btn btn">Submit</button>
          </div>
        </form>
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
