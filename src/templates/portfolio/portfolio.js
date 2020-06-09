import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FaBars } from "react-icons/fa"

// Components
import Layout from "../../components/layout/layout"
import ProfileWidget from "../../components/profileWidget/profileWidget"
import TagWidget from "../../components/tagWidget/tagWidget"

// Styles
import styles from "./portfolio.module.scss"

const Portfolio = props => {
  const [showSideMenu, setShowSideMenu] = useState(false)

  const handleSideMenuVisablility = () => {
    setShowSideMenu(!showSideMenu)
  }
  const {
    data: {
      wordpressData: { portfolio },
    },
  } = props

  return (
    <Layout>
      <section className={styles.portfolio}>
        <div className="container">
          <div className="columns is-multiline">
            {/* Content column */}
            {/* Toggle button for widget column */}
            <div
              className={
                showSideMenu
                  ? "column is-12 is-8-desktop"
                  : "column is-8-desktop is-offset-2-desktop"
              }
            >
              <div className={styles.toggleContainer}>
                <button
                  className={styles.toggleBtn}
                  onClick={handleSideMenuVisablility}
                >
                  <span className="has-text-primary is-size-6">
                    <FaBars />
                  </span>
                </button>
              </div>
              {/* Content area */}
              <div className="content">
                <Img
                  style={{ borderRadius: "6px" }}
                  fluid={
                    portfolio.featuredImage.imageFile.childImageSharp.fluid
                  }
                />
                <h1 className="cc-mb-30 is-size-1-desktop">
                  {portfolio.title}
                </h1>
                <div dangerouslySetInnerHTML={{ __html: portfolio.content }} />
              </div>
            </div>
            {/* Widget column Desktop*/}
            <div
              className={
                showSideMenu
                  ? "column widget-col is-12 is-3-desktop is-offset-1-desktop" +
                    styles.showSideMenu
                  : styles.hideSideMenu
              }
            >
              <ProfileWidget />
              <br />
              <TagWidget tags={portfolio.tags} page="portfolio" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Portfolio

export const pageQuery = graphql`
  query GET_PORTFOLIO($id: ID!) {
    wordpressData {
      portfolio(id: $id) {
        title
        content
        slug
        featuredImage {
          sourceUrl
          imageFile {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        tags {
          nodes {
            name
            slug
            id
          }
        }
      }
    }
  }
`
