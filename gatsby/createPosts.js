const path = require(`path`)
module.exports = async ({ actions, graphql }) => {
  const GET_POSTS = `
  query GET_POSTS($first:Int, $after:String){
    wordpressData {
      posts(
        first: $first 
        after: $after
      ) {
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          id
          slug
          postId
          title
        }
      }
    }
  }
  `
  const { createPage } = actions
  const allPosts = []
  const blogPages = []
  let pageNumber = 0

  const fetchPosts = async variables =>
    await graphql(GET_POSTS, variables).then(({ data }) => {
      const {
        wordpressData: {
          posts: {
            nodes,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data

      const nodeIds = nodes.map(node => node.postId)
      const blogTemplate = path.resolve(`./src/templates/blog.js`)
      const blogPagePath = !variables.after
        ? `/blog`
        : `/blog/page/${pageNumber}`

      blogPages[pageNumber] = {
        path: blogPagePath,
        component: blogTemplate,
        context: {
          ids: nodeIds,
          pageNumber: pageNumber,
          hasNextPage: hasNextPage,
        },
        ids: nodeIds,
      }
      nodes.map(post => {
        allPosts.push(post)
      })
      if (hasNextPage) {
        pageNumber++
        return fetchPosts({ first: 12, after: endCursor })
      }
      return allPosts
    })

  await fetchPosts({ first: 12, after: null }).then(allPosts => {
    const postTemplate = path.resolve(`./src/templates/post.js`)

    blogPages.map(blogPage => {
      console.log(`createBlogPage ${blogPage.context.pageNumber}`)
      createPage(blogPage)
    })

    allPosts.map(post => {
      createPage({
        path: `/blog/${post.slug}`,
        component: postTemplate,
        context: post,
      })
    })
  })
}
