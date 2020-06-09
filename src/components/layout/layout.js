import React from "react"
import PropTypes from "prop-types"

// Components
import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"

// Styles
import styles from "./layout.module.scss"
import "../../styles/global.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
