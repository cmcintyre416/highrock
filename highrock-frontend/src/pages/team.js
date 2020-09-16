import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Teams from "../components/Teams"
import Intro from "../components/Intro"
import SEO from "../components/SEO"

const TeamPage = ({
  data: {
    allStrapiTeams: { nodes: team },
    strapiIntroTeam
  },
}) => {
  const teamIntro = strapiIntroTeam;
  return (
  <Layout indicator>
    <SEO title="Team" description="Meet and learn about the High Rock Capital team."/>
    <div className="team-page">
      <div className="section-center-narrow">
        <Intro data={teamIntro} slide/>
      </div>
      <div>
      <div className="section-color-gray team-list">
        <section className="section-center-narrow">
          <Teams team={team} title="Meet your team" list deepLink linkTo/>
        </section>
      </div>
      </div>
    </div>
  </Layout>
  );
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
  strapiIntroTeam {
    title
    subTitle
    description
  }
}
`

export default TeamPage
