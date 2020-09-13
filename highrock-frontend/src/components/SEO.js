import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      id
      siteMetadata {
        author
        siteDesc: description
        image
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
  }
`
const SEO = ({title, description}) => {
  const {site} = useStaticQuery(query);
  const {siteDesc,siteTitle,siteUrl,image,twitteUsername} = site.siteMetadata

  const fixedTitle = title.charAt(0).toUpperCase() + title.slice(1);

  return <Helmet title={`${fixedTitle} | ${siteTitle}`} htmlAttributes={{lang: "en"}}>
    <meta name="description" content={description || siteDesc}/>
    <meta name="image" content={image}/>
  </Helmet>
}

export default SEO
