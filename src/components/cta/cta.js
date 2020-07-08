import React from "react"
import PropTypes from "prop-types"

// Styles
import styles from "./cta.module.scss"

const CallToAction = props => {
  return (
    <section className={styles.cta}>
      <h2>I am available for freelance work.</h2>
      <div className={styles.button}>
        <a className="button is-primary is-rounded" href={props.href}>
          Hire me!
        </a>
      </div>
    </section>
  )
}

export default CallToAction

CallToAction.propTypes = {
  href: PropTypes.string,
}
