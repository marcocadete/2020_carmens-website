import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Header from "../components/header/header"
import SocialSharing from "../components/socialSharing/socialSharing"
import Services from "../components/services/services"
import About from "../components/about/about"
import Testimonials from "../components/testimonials/testimonials"
import Portfolio from "../components/portfolio/portfolio"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Services />
    <About />
    <Testimonials />
    <Portfolio />

    <hr style={{ paddingTop: "800px", margin: 0 }} />
    {/* <SocialSharing /> */}
  </Layout>
)

export default IndexPage
