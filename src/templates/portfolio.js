import React from "react"
import { graphql } from "gatsby"

const Portfolio = props => {
  const {
    data: {
      wordpressData: { portfolio },
    },
  } = props

  return (
    <section>
      <h1>{portfolio.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: portfolio.content }} />
    </section>
  )
}

export default Portfolio

export const pageQuery = graphql`
  query GET_PORTFOLIO($id: ID!) {
    wordpressData {
      portfolio(id: $id) {
        title
        content
        slug
      }
    }
  }
`
