import React from "react"
import logo from "../../images/footer-logo.png"

// Styles
import styles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <img src={logo} width="112" height="28" alt="logo" />
          </div>
          <div className="column is-4">
            <div className="content">
              <h2 className="is-size-1 has-text-white has-text-weight-semibold">
                Let's Chat?
              </h2>
              <div>
                Copyright © {new Date().getFullYear()} carmencadete.com. All
                rights reserved
              </div>
            </div>
          </div>
          <div className="column is-4">
            <a
              href="mailto:carmen@cadete.me"
              className="button is-rounded is-outlined is-primary is-large"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
