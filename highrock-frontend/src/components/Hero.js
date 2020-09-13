import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import heroImg from "../assets/hero-img.jpg"

const query = graphql`
  {
    strapiHerobannerHome {
      ctaText
      ctaLink
      subTitle
      secondTitle
      title
    }
  }
`;

const Hero = () => {
  const data = useStaticQuery(query);
  const herobanner = data.strapiHerobannerHome;

  return <header className="hero" style={{backgroundImage: "url(" + heroImg + ")"}}>
    <div className="section-center-narrow hero-center">
      <article className="hero-image"></article>
      <div>
        <h1>{herobanner.title}<div className="secondTitle">{herobanner.secondTitle}<span></span></div></h1>
        <h4 style={{visibility:'hidden'}}>{herobanner.subTitle}</h4>
        <Link className="btn" to={herobanner.ctaLink}>
          {herobanner.ctaText}
        </Link>
      </div>
    </div>
  </header>
}

export default Hero
