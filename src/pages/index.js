import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Header from "../components/header/header"
import SocialSharing from "../components/socialSharing/socialSharing"
import About from "../components/about/about"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <About />

    <hr style={{ paddingTop: "800px", margin: 0 }} />
    <SocialSharing />
  </Layout>
)

export default IndexPage
