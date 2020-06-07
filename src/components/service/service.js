import React from "react"
import PropTypes from "prop-types"
import { IconContext } from "react-icons"
import * as FontAwesome from "react-icons/fa"

// Styles
import styles from "./service.module.scss"

const Service = props => {
  const icon = React.createElement(FontAwesome[props.iconClass])
  return (
    <IconContext.Provider
      value={{ color: "#00d1b2", size: "3em", className: styles.icon }}
    >
      <div className="column is-4 has-text-left-mobile has-text-centered">
        <div className={"content " + styles.content}>
          {icon}
          <h3 className="has-text-white">{props.title}</h3>
          <p className="has-text-grey-light">{props.children}</p>
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default Service

Service.propTypes = {
  title: PropTypes.string,
  iconClass: PropTypes.string,
  children: PropTypes.string,
}
