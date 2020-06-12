import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

// Styles
import styles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "header.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <header className={styles.header}>
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className={styles.infoWrapper}>
              <div className={styles.info}>
                <h2 className="has-text-primary">Hello, I'm</h2>
                <h1>Carmen Cadete</h1>
                <p>A freelance graphic designer based in Germany.</p>
                <p>
                  I combine
                  <span className="is-italic has-text-weight-semibold	has-text-primary cc-mr-5 cc-ml-5">
                    creativity{" "}
                  </span>
                  with
                  <span className="is-italic has-text-primary has-text-weight-semibold cc-ml-5">
                    strategic thinking.
                  </span>
                </p>
                <Link
                  to="/portfolio"
                  className="button is-primary is-rounded cc-mt-30"
                >
                  See my work
                </Link>
              </div>
            </div>
          </div>
          <div className="column">
            <Img
              className={styles.image}
              fluid={data.placeholderImage.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
