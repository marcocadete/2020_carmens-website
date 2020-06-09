import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Styles
import styles from "./languages.module.scss"

// import germanFlag from "../../images/german-flag.png"

// console.log(germanFlag)

const Languages = props => {
  console.log(props)
  const data = useStaticQuery(graphql`
    query {
      germanFlag: file(relativePath: { eq: "german-flag.png" }) {
        childImageSharp {
          fixed(width: 16, height: 16) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      englishFlag: file(relativePath: { eq: "uk-flag.png" }) {
        childImageSharp {
          fixed(width: 16, height: 16) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      namibianFlag: file(relativePath: { eq: "namibia-flag.png" }) {
        childImageSharp {
          fixed(width: 16, height: 16) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <>
      {props.showHeading ? (
        <h4 className="cc-mb-30 cc-mt-30">Languages</h4>
      ) : null}
      <ul className={styles.languages}>
        <li>
          {" "}
          <Img
            className="cc-mr-5"
            alt="German Flag"
            fixed={data.germanFlag.childImageSharp.fixed}
          />
          German
        </li>
        <li>
          <Img
            className="cc-mr-5"
            alt="UK Flag"
            fixed={data.englishFlag.childImageSharp.fixed}
          />
          English
        </li>
        <li>
          {" "}
          <Img
            className="cc-mr-5"
            alt="Namibian flag"
            fixed={data.namibianFlag.childImageSharp.fixed}
          />
          Afrikaans
        </li>
      </ul>
    </>
  )
}

export default Languages

Languages.propTypes = {
  showHeading: PropTypes.bool,
}
