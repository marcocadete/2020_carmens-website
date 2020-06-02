import React from "react"
import { graphql } from "gatsby"

// Components
import Layout from "../components/layout/layout"
import ProfileWidget from "../components/profileWidget/profileWidget"

const Post = props => {
  const {
    data: {
      wordpressData: { post },
    },
  } = props

  return (
    <Layout>
      <section>
        <div className="container">
          <div className="columns is-variable is-8">
            {/* Content column */}
            <div className="column is-9">
              <div className="content">
                <h1>{post.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>
            {/* Widget column */}
            <div className="column widget-col is-3">
              <ProfileWidget />
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
