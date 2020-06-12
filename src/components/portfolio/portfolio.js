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
        portfolios(first: 8) {
          nodes {
            excerpt
            id
            slug
            title
            featuredImage {
              sourceUrl
              imageFile {
                childImageSharp {
                  fixed(
                    width: 300
                    height: 200
                    quality: 100
                    cropFocus: CENTER
                  ) {
                    ...GatsbyImageSharpFixed
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
              <Link to="/portfolio" className="button is-primary">
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
        <div className={styles.container}>
          {listOfPortfolios.map(portfolio => (
            <PortfolioEntry
              key={portfolio.id}
              title={portfolio.title}
              excerpt={portfolio.excerpt}
              slug={portfolio.slug}
              image={portfolio.featuredImage.imageFile.childImageSharp.fixed}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
