import React from "react"
import { IconContext } from "react-icons"
import { FaArrowRight } from "react-icons/fa"
import { Link, useStaticQuery, graphql } from "gatsby"

// Styles
import styles from "./portfolio.module.scss"

// Components
import PortfolioEntry from "../portfolioEntry/portfolioEntry"

const Portfolio = props => {
  const data = useStaticQuery(graphql`
    query {
      wordpressData {
        portfolios(first: 6) {
          nodes {
            excerpt
            id
            slug
            title
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
  `)

  const listOfPortfolios = data.wordpressData.portfolios.nodes
  return (
    <section className={styles.portfolio}>
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <div className="content">
              <h2>Portfolio</h2>
              <Link to="/portfolio" className="button">
                View all
              </Link>
              <IconContext.Provider value={{ color: "#00d1b2", size: "2em" }}>
                <div className={"is-hidden-tablet " + styles.icon}>
                  <FaArrowRight />
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
      <hr className="is-invisible" />
      <div className={"container " + styles.container}>
        <div className={"columns is-mobile is-multiline " + styles.columns}>
          {listOfPortfolios.map(portfolio => (
            <PortfolioEntry
              key={portfolio.id}
              title={portfolio.title}
              excerpt={portfolio.excerpt}
              slug={portfolio.slug}
              image={portfolio.featuredImage.imageFile.childImageSharp.fluid}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
