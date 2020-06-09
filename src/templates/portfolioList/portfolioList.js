import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

// Components
import Layout from "../../components/layout/layout"
import PortfolioTemplateEntry from "../../components/portfolioTemplateEntry/portfolioTemplateEntry"

// Styles
import styles from "./portfolioList.module.scss"

const PortfolioList = props => {
  const allPortfolios = props.data.wordpressData.portfolios.nodes

  const {
    pageContext: { pageNumber, hasNextPage },
  } = props

  const [state, setState] = useState({
    filteredData: [],
    query: "",
  })

  const hasSearchResults = state.filteredData && state.query !== ""

  const portfolios = hasSearchResults ? state.filteredData : allPortfolios

  const handleInput = event => {
    const query = event.target.value
    const filteredData = portfolios.filter(portfolio => {
      // Destructure data from post
      const { title, tags } = portfolio

      // Extract just the names of the tags, so that we have an array of strings and not objects
      let listOfTagNames = []
      if (tags.nodes.length > 0) {
        tags.nodes.forEach(tag => {
          listOfTagNames.push(tag.name)
        })
      }
      return (
        // Contains the query string
        title.toLowerCase().includes(query.toLowerCase()) ||
        (listOfTagNames.length > 0 &&
          listOfTagNames.join("").toLowerCase().includes(query.toLowerCase()))
      )
    })
    // update state according to the latest query and results
    setState({
      query, // with current query string from the `Input` event
      filteredData, // with filtered data from portfolios.filter(portfolio => (//filteredData)) above
    })
  }

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
      <Link to={previousLink} className="pagination-previous">
        Previous Portfolio
      </Link>
    )
  }

  const renderNextLink = () => {
    if (hasNextPage) {
      return (
        <Link
          to={`/portfolio/page/${pageNumber + 1}`}
          className="pagination-next"
        >
          Next Posts
        </Link>
      )
    } else {
      return null
    }
  }

  if (portfolios.length > 0) {
    return (
      <Layout>
        <section className="container">
          <div className={styles.portfolioSection}>
            <BackgroundImage
              className={styles.image}
              fluid={props.data.file.childImageSharp.fluid}
            >
              <div className={styles.header}>
                <h1 className="has-text-white is-size-3 is-size-3-tablet is-size-1-desktop">
                  Sharing my{" "}
                  <span className="has-text-weight-bold cc-underline">
                    work
                  </span>{" "}
                  with the world
                </h1>
              </div>
            </BackgroundImage>
            <div className="container">
              <div className="field">
                <div className="control">
                  <input
                    onChange={handleInput}
                    className="input is-primary"
                    type="text"
                    placeholder="Type to filter portfolios..."
                  />
                </div>
              </div>
              <hr className="is-invisible" />
              <div className="columns is-multiline">
                {props.data &&
                  props.data.wordpressData &&
                  portfolios.map(portfolio => (
                    <div className="column is-4" key={portfolio.id}>
                      <PortfolioTemplateEntry portfolio={portfolio} />
                    </div>
                  ))}
              </div>
              <div className="columns">
                <div className="column is-4">
                  <nav
                    className="pagination is-centered is-rounded"
                    role="navigation"
                    aria-label="pagination"
                  >
                    {renderPreviousLink()}
                    {renderNextLink()}
                    {pageNumber > 0 && (
                      <ul className="pagination-list">
                        <li>
                          <span
                            className="pagination-link is-current"
                            aria-label={"page " + pageNumber}
                            aria-current="page"
                          >
                            {pageNumber}
                          </span>
                        </li>
                      </ul>
                    )}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <section className="container">
          <div className={styles.portfolioSection}>
            <BackgroundImage
              className={styles.image}
              fluid={props.data.file.childImageSharp.fluid}
            >
              <div className={styles.header}>
                <h1 className="has-text-white is-size-3 is-size-3-tablet is-size-1-desktop has-text-weight-semibold">
                  Sharing my work with the world
                </h1>
              </div>
            </BackgroundImage>
            <div className="container">
              <div className="field">
                <div className="control">
                  <input
                    onChange={handleInput}
                    className="input is-primary"
                    type="text"
                    placeholder="Type to filter posts..."
                  />
                </div>
              </div>
              <h1 className="is-size-6-mobile is-size-4 cc-mt-40">
                Sorry no portfolios where found, try searching again?{" "}
              </h1>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
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
    file(relativePath: { eq: "blog-header.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
