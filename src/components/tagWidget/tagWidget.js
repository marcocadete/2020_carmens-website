import React from "react"
import ProptTypes from "prop-types"
import { FaTag } from "react-icons/fa"
import { Link } from "gatsby"

// Styles
import styles from "./tagWidget.module.scss"

const TagWidget = props => {
  const tags = props.tags.nodes

  return (
    <div className={styles.tagWidget}>
      <h2 className="cc-mb-10 is-uppercase has-text-weight-semibold">
        <span className="cc-mr-5 has-text-primary">
          <FaTag />
        </span>
        Tags
      </h2>
      {tags.length > 0 && (
        <ul className={styles.list}>
          {props.tags.nodes.map(tag => (
            <li key={tag.id}>
              <Link to={`/${props.page}/tag/${tag.slug}`}>{tag.name}</Link>
            </li>
          ))}
        </ul>
      )}
      {tags.length === 0 && <small>Not tagged yet</small>}
    </div>
  )
}

export default TagWidget

TagWidget.propTypes = {
  tags: ProptTypes.object,
  page: ProptTypes.string,
}
