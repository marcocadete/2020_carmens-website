import React from "react"
import PropTypes from "prop-types"

// Styles
import styles from "./list.module.scss"

const List = props => (
  <div className="content">
    <ul className={styles.list}>
      {props.listItems.map((item, index) => (
        <li key={item + index}>{item}</li>
      ))}
    </ul>
  </div>
)

export default List

List.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.string),
}
