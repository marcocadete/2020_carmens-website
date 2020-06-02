import React from "react"
import { navigate, graphql } from "gatsby"
import PortfolioEntry from "../components/portfolioEntry/portfolioEntry"

const PortfolioList = props => {
  const {
    pageContext: { pageNumber, hasNextPage },
  } = props

  const renderPreviousLink = () => {
    let previousLink = null

    if (!pageNumber) {
      return null
    } else if (1 === pageNumber) {
      previousLink = `/portfolio`
    } else if (1 < pageNumber) {
      previousLink = `/portfolio/page/${pageNumber - 1}`
    }

    return (
      <button onClick={() => navigate(previousLink)}>
        Previous Portfolios
      </button>
    )
  }

  const renderNextLink = () => {
    if (hasNextPage) {
      return (
        <button onClick={() => navigate(`/portfolio/page/${pageNumber + 1}`)}>
          Next Portfolios
        </button>
      )
    } else {
      return null
    }
  }
  console.log(props)
  return (
    <section>
      <h1>Blog Page</h1>
      {props.data &&
        props.data.wordpressData &&
        props.data.wordpressData.portfolios.nodes.map(portfolio => (
          <div key={portfolio.id}>
            <PortfolioEntry portfolio={portfolio} />
          </div>
        ))}
      {renderPreviousLink()}
      {renderNextLink()}
    </section>
  )
}

export default PortfolioList

export const query = graphql`
  query GET_PORTFOLIOS($ids: [ID]) {
    wordpressData {
      portfolios(where: { in: $ids }) {
        nodes {
          ...PortfolioEntryFragment
        }
      }
    }
  }
`
