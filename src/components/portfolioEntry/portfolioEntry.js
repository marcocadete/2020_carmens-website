import React from "react"
import { Link, graphql } from "gatsby"

const PortfolioEntry = ({ portfolio }) => {
  return (
    <article>
      <h2>
        <Link to={`/portfolio/${portfolio.slug}`}>{portfolio.title}</Link>
      </h2>
      <p>{portfolio.content}</p>
    </article>
  )
}

export default PortfolioEntry

export const query = graphql`
  fragment PortfolioEntryFragment on WPGraphQL_Portfolio {
    id
    title
    slug
    date
    content: excerpt
  }
`
