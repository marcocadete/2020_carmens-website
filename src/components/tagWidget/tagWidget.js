import React from "react"
import { FaTag } from "react-icons/fa"
import { Link, graphql } from "gatsby"

// Styles
import styles from "./tagWidget.module.scss"

const TagWidget = props => {
  const tags = props.tags.nodes

  return (
    <>
      <h2 className="cc-mb-10 is-uppercase has-text-weight-semibold">
        <span className="cc-mr-5 has-text-primary">
          <FaTag />
        </span>
        Tags
      </h2>
      {tags.length > 0 && (
        <ul className={styles.tagWidget}>
          {props.tags.nodes.map(tag => (
            <li>
              <Link to={`/blog/tag/${tag.slug}`}>{tag.name}</Link>
            </li>
          ))}
        </ul>
      )}
      {tags.length === 0 && <small>Not tagged yet</small>}
    </>
  )
}

export default TagWidget
