import React from "react"
import Title from "./Title"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { motion } from "framer-motion";

const query = graphql`
  {
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

const ServiceList = () => {
  const data = useStaticQuery(query);
  const {
    allStrapiServices: { nodes: services },
  } = data;
  return <section className="section section-center">
    <div className="services-section">
      <div className="services-section-top title-margin">
        <Title title="services"/>
        <Link to="/services">
          All Services
        </Link>
      </div>
      <div className="services-center">
        {services.map((service)=> {
          return <motion.article whileHover={{ scale: 1.1 }} whileTap={{ scale: 1}} key={service.id} className="service">
              <Link to={`/services/${service.slug}`} className="service-btn">
                <p>{service.description}</p>
                {
                  service.icon &&
                  <Image fluid={service.icon.childImageSharp.fluid} className="service-icon"/>
                }
                <h4>{service.title}</h4>
              </Link>
          </motion.article>
        })}
      </div>
    </div>
  </section>
}

export default ServiceList
