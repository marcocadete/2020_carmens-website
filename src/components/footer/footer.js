import React from "react"

// Styles
import styles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <h2>Col One</h2>
          </div>
          <div className="column is-4">
            <h2>Col Two</h2>© {new Date().getFullYear()}
          </div>
          <div className="column is-4">
            <h2>Col Three</h2>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
