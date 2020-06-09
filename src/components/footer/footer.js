import React from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"

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
              <div>© {new Date().getFullYear()}</div>
            </div>
          </div>
          <div className="column is-4">
            <Link
              to="/contact"
              className="button is-rounded is-outlined is-primary is-large"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
