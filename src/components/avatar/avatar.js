import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Styles
import styles from "./avatar.module.scss"

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "avatar-f.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className={styles.avatar}>
      <Img
        className={styles.image}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    </div>
  )
}

export default Avatar
