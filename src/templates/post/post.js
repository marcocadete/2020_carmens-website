import React, { useState } from "react"
import { graphql } from "gatsby"
import { FaBars } from "react-icons/fa"

// Components
import Layout from "../../components/layout/layout"
import ProfileWidget from "../../components/profileWidget/profileWidget"
import TagWidget from "../../components/tagWidget/tagWidget"

// Styles
import styles from "./post.module.scss"

const Post = props => {
  const [showSideMenu, setShowSideMenu] = useState(false)

  const handleSideMenuVisablility = () => {
    console.log("clicked")
    setShowSideMenu(!showSideMenu)
  }
  const {
    data: {
      wordpressData: { post },
    },
  } = props

  return (
    <Layout>
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
                <h1>{post.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>
            {/* Widget column */}
            <div
              className={
                showSideMenu
                  ? "column widget-col is-12 is-3-desktop is-offset-1-desktop"
                  : "is-hidden"
              }
            >
              <ProfileWidget />
              <br />
              <TagWidget />
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
        tags {
          nodes {
            name
            link
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
