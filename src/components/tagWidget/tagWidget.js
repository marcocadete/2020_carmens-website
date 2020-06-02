import React from "react"
import { FaTag } from "react-icons/fa"
import { Link } from "gatsby"

// Styles
import styles from "./tagWidget.module.scss"

const TagWidget = () => {
  return (
    <>
      <h2 className="cc-mb-10 is-uppercase has-text-weight-semibold">
        <span className="cc-mr-5 has-text-primary">
          <FaTag />
        </span>
        Tags
      </h2>
      <ul className={styles.tagWidget}>
        <li>
          <Link to="/">this is a tag</Link>
        </li>
        <li>
          <Link to="/">this is a tag</Link>
        </li>
        <li>
          <Link to="/">this is a tag</Link>
        </li>
        <li>
          <Link to="/">this is a tag</Link>
        </li>
        <li>
          <Link to="/">this is a tag</Link>
        </li>
      </ul>
    </>
  )
}

export default TagWidget
