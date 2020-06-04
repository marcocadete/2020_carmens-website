const createPosts = require(`./gatsby/createPosts`)
// const createPortfolios = require(`./gatsby/createPortfolios`)
const createTagPages = require(`./gatsby/createTags`)

/* --------- Prepare images from wordpress for gatsby source images --------- */

const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createResolvers = async ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions

  await createResolvers({
    WPGraphQL_MediaItem: {
      imageFile: {
        type: "File",
        async resolve(source) {
          let sourceUrl = source.sourceUrl

          if (source.mediaItemUrl !== undefined) {
            sourceUrl = source.mediaItemUrl
          }

          return await createRemoteFileNode({
            url: encodeURI(sourceUrl),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}

/* --------- Create pages --------- */

exports.createPages = async ({ actions, graphql }) => {
  await createPosts({ actions, graphql })
  // await createPortfolios({ actions, graphql })
  await createTagPages({ actions, graphql })
}
