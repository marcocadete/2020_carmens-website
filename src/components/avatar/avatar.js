import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Styles
import styles from "./avatar.module.scss"

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "carmen-profile.png" }) {
        childImageSharp {
          fixed(width: 71, height: 71) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div className={styles.avatar}>
      <Img
        className={styles.image}
        fixed={data.placeholderImage.childImageSharp.fixed}
      />
    </div>
  )
}

export default Avatar
