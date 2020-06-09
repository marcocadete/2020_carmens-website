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
      <h2 className="cc-mt-15 cc-mb-15 is-size-5 is-size-4-desktop has-text-weight-semibold">
        <Link to={`/portfolio/${portfolio.slug}`}>{portfolio.title}</Link>
      </h2>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: portfolio.content }}
      />
      <Link
        to={`/portfolio/${portfolio.slug}`}
        className="button is-small is-rounded is-link"
      >
        Continue reading
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
