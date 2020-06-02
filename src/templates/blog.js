import React from "react"
import { navigate, graphql } from "gatsby"
import PostEntry from "../components/postEntry/postEntry"

const Blog = props => {
  const {
    pageContext: { pageNumber, hasNextPage },
  } = props

  const renderPreviousLink = () => {
    let previousLink = null

    if (!pageNumber) {
      return null
    } else if (1 === pageNumber) {
      previousLink = `/blog`
    } else if (1 < pageNumber) {
      previousLink = `/blog/page/${pageNumber - 1}`
    }

    return (
      <button onClick={() => navigate(previousLink)}>Previous Posts</button>
    )
  }

  const renderNextLink = () => {
    if (hasNextPage) {
      return (
        <button onClick={() => navigate(`/blog/page/${pageNumber + 1}`)}>
          Next Posts
        </button>
      )
    } else {
      return null
    }
  }
  console.log(props)
  return (
    <section>
      <h1>Blog Page</h1>
      {props.data &&
        props.data.wordpressData &&
        props.data.wordpressData.posts.nodes.map(post => (
          <div key={post.id}>
            <PostEntry post={post} />
          </div>
        ))}
      {renderPreviousLink()}
      {renderNextLink()}
    </section>
  )
}

export default Blog

export const query = graphql`
  query GET_POSTS($ids: [ID]) {
    wordpressData {
      posts(where: { in: $ids }) {
        nodes {
          ...PostEntryFragment
        }
      }
    }
  }
`
