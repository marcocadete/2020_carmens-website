import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

// Styles
import styles from "../styles/notFound.module.scss"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className={styles.notFound}>
      <h1 style={{ color: "#122744" }}>404</h1>
      <h2 style={{ color: "#122744" }}>Page Not Found</h2>
      <p className="cc-mb-30">
        The page you're looking for doesn't exist, sorry.
      </p>
      <Link className="button is-primary" to="/">
        Back to the home page
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
