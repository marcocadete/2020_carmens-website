import React, { useState } from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

// Components
import Layout from "../../components/layout/layout"
import PortfolioTemplateEntry from "../../components/portfolioTemplateEntry/portfolioTemplateEntry"
// import Seo from "../components/Seo"

// Styles
import styles from "./tag.module.scss"

const PortfolioTagTemplate = props => {
  const {
    data: {
      wordpressData: { tag },
    },
  } = props

  const allPortfolios = tag.portfolios.nodes

  const [state, setState] = useState({
    filteredData: [],
    query: "",
  })

  const hasSearchResults = state.filteredData && state.query !== ""

  const portfolios = hasSearchResults ? state.filteredData : allPortfolios

  const handleInput = event => {
    const query = event.target.value
    const filteredData = portfolios.filter(post => {
      // Destructure data from post
      const { title, tags } = post

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
      filteredData, // with filtered data from posts.filter(post => (//filteredData)) above
    })
  }

  if (portfolios.length > 0) {
    return (
      <Layout>
        <section className="container">
          <div className={styles.tagSection}>
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
              <h1 className="is-size-6 is-size-4-desktop cc-mb-5">
                <span className="is-italic cc-mr-15">
                  Portfolios related to:
                </span>
                <span className="has-text-primary is-size-4 is-size-3-desktop">
                  {tag.name}
                </span>
              </h1>
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
                {portfolios.length > 0 &&
                  portfolios.map(portfolio => (
                    <div className="column is-4" key={portfolio.id}>
                      <PortfolioTemplateEntry portfolio={portfolio} />
                    </div>
                  ))}
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
          <div className={styles.tagSection}>
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
              <h1 className="is-size-6 is-size-4-desktop cc-mb-5">
                <span className="is-italic cc-mr-15">
                  Portfolios related to:
                </span>
                <span className="has-text-primary is-size-4 is-size-3-desktop">
                  {tag.name}
                </span>
              </h1>
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

export default PortfolioTagTemplate

export const pageQuery = graphql`
  query GET_PORTFOLIO_TAG($id: ID!) {
    wordpressData {
      tag(id: $id) {
        id
        name
        slug
        portfolios(first: 100) {
          nodes {
            id
            title
            slug
            date
            content: excerpt
            tags {
              nodes {
                name
              }
            }
            featuredImage {
              sourceUrl
              imageFile {
                childImageSharp {
                  fluid(maxWidth: 640, maxHeight: 426, quality: 100) {
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluidLimitPresentationSize
                  }
                }
              }
            }
          }
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
