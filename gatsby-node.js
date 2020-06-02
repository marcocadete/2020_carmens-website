const createPosts = require(`./gatsby/createPosts`)
const createPortfolios = require(`./gatsby/createPortfolios`)

exports.createPages = async ({ actions, graphql }) => {
  await createPosts({ actions, graphql })
  await createPortfolios({ actions, graphql })
}
