import React from "react"
import { graphql } from "gatsby"

// Components
import Layout from "../components/layout/layout"

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
          <div className="columns">
            <div className="column is-8">
              <div className="content">
                <h1>{post.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>
            <div className="column is-4" style={{ border: "2px solid purple" }}>
              ihoiwheih
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
