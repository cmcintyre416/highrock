import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import Intro from "../components/Intro"
import ServiceList from "../components/ServiceList"

const query = graphql`
{
  strapiIntroService {
    title
    subTitle
    description
  }
}
`;

const Services = () => {
  const data = useStaticQuery(query);
  const { strapiIntroService } = data;
  return <Layout>
    <div className="section-center-narrow">
      <Intro data={strapiIntroService}/>
    </div>
    <section className="services-page section-color-gray">
    <div className="section-center-narrow section-padding">
     <ServiceList/>
    </div>
    </section>
  </Layout>
}

export default Services
