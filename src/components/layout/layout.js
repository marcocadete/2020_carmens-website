import React from "react"
import PropTypes from "prop-types"

// Components
import Navbar from "../navbar/navbar"
import styles from "./layout.module.scss"
import "../../styles/global.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <main className={styles.main}>{children}</main>
      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
