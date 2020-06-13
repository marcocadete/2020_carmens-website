import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import _has from "lodash.has"

// Styles
import styles from "./portfolioTemplateEntry.module.scss"

const PortfolioTemplateEntry = ({ portfolio }) => {
  return (
    <article className={styles.portfolioEntry}>
      <div className={styles.imageContainer}>
        {_has(portfolio.featuredImage, "imageFile") && (
          <Img
            fluid={portfolio.featuredImage.imageFile.childImageSharp.fluid}
            alt={portfolio.title}
          />
        )}
      </div>

      <Link className="button is-dark" to={`/portfolio/${portfolio.slug}`}>
        View Portfolio
      </Link>
    </article>
  )
}

export default PortfolioTemplateEntry

export const query = graphql`
  fragment PortfolioEntryFragment on WPGraphQL_Portfolio {
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
          fluid(
            maxWidth: 640
            maxHeight: 426
            quality: 100
            cropFocus: CENTER
          ) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  }
`
