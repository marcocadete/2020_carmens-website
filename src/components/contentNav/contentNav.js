import React, { useState } from "react"
import PropTypes from "prop-types"

// Styles
import styles from "./contentNav.module.scss"

const ContentNav = props => {
  const [activeChild, setActiveChild] = useState(0)

  const handleClick = index => {
    setActiveChild(index)
  }

  return (
    <div className={styles.contentNav}>
      <div className="tabs">
        <ul>
          {props.menu.map((item, index) => (
            <li
              key={item + index}
              onClick={() => handleClick(index)}
              className={activeChild === index ? "is-active" : null}
            >
              <a>{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.content}> {props.children[activeChild]}</div>
    </div>
  )
}

export default ContentNav

ContentNav.proptTypes = {
  menu: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
