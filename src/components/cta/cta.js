import React from "react"

// Styles
import styles from "./cta.module.scss"

const CallToAction = () => {
  return (
    <section className={styles.cta}>
      <h2>I am available for freelance work.</h2>
      <div className={styles.button}>
        <button className="button is-primary is-rounded">Hire me!</button>
      </div>
    </section>
  )
}

export default CallToAction
