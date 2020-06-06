import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import _has from "lodash.has"

// Styles
import styles from "./postEntry.module.scss"

const PostEntry = ({ post }) => {
  return (
    <article className={styles.postEntry}>
      <div className={styles.imageContainer}>
        {_has(post.featuredImage, "imageFile") && (
          <Img
            fluid={post.featuredImage.imageFile.childImageSharp.fluid}
            alt={post.title}
          />
        )}
      </div>
      <h2 className="cc-mt-15 cc-mb-15 is-size-5 is-size-4-desktop has-text-weight-semibold">
        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <Link
        to={`/blog/${post.slug}`}
        className="button is-small is-rounded is-link"
      >
        Continue reading
      </Link>
    </article>
  )
}

export default PostEntry

export const query = graphql`
  fragment PostEntryFragment on WPGraphQL_Post {
    id
    title
    slug
    date
    content: excerpt
    author {
      name
      slug
      avatar(size: 100) {
        url
      }
    }
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
`
