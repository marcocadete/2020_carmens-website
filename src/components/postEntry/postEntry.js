import React from "react"
import { Link, graphql } from "gatsby"

const PostEntry = ({ post }) => {
  return (
    <article>
      <h2>
        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>
      <p>{post.content}</p>
    </article>
  )
}

export default PostEntry

export const query = graphql`
  fragment PostEntryFragment on WPGraphQL_Post {
    id
    title
    slug
    date
    content: excerpt
    author {
      name
      slug
      avatar(size: 100) {
        url
      }
    }
  }
`
