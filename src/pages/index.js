import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Image from "../components/image/image"
import SEO from "../components/seo"
import Header from "../components/header/header"
import SocialSharing from "../components/socialSharing/socialSharing"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <SocialSharing />
    <hr style={{ paddingTop: "800px", margin: 0 }} />
  </Layout>
)

export default IndexPage
