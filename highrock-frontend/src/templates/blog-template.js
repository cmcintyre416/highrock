import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import BackLink from "../components/BackLink"
import SEO from "../components/SEO"

const ComponentName = ({data}) => {
  const { content, title, description } = data.blog;

  return <Layout indicator>
    <SEO title={title} description={description}/>
    <section className="blog-post section-center-narrow section-padding">
    <BackLink title="All Posts" page="media"/>
      <div className="section-center section-padding">
        <article className="blog-content">
          <ReactMarkdown source={content}/>
        </article>
      </div>
    </section>
  </Layout>
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      description
    }
  }
`

export default ComponentName
