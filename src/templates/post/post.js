import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FaBars } from "react-icons/fa"

// Components
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import ProfileWidget from "../../components/profileWidget/profileWidget"
import TagWidget from "../../components/tagWidget/tagWidget"

// Styles
import styles from "./post.module.scss"

const Post = props => {
  const [showSideMenu, setShowSideMenu] = useState(false)

  const handleSideMenuVisablility = () => {
    setShowSideMenu(!showSideMenu)
  }
  const {
    data: {
      wordpressData: { post },
    },
  } = props

  return (
    <Layout>
      <SEO title={post.title} />
      <section className={styles.post}>
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
                  fluid={post.featuredImage.imageFile.childImageSharp.fluid}
                />
                <h1>{post.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>
            {/* Widget column */}
            <div
              className={
                showSideMenu
                  ? "column widget-col is-12 is-3-desktop is-offset-1-desktop"
                  : "column widget-col is-12 is-offset-2-desktop"
              }
            >
              <ProfileWidget />
              <br />
              <TagWidget tags={post.tags} page="blog" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query GET_POST($id: ID!) {
    wordpressData {
      post(id: $id) {
        title
        content
        slug
        author {
          name
          slug
          avatar {
            url
          }
        }
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
        categories {
          nodes {
            name
            link
          }
        }
      }
    }
  }
`
