const path = require(`path`)
module.exports = async ({ actions, graphql }) => {
  const GET_PORTFOLIOS = `
  query GET_PORTFOLIOS($first:Int, $after:String){
    wordpressData {
      portfolios(
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
          portfolioId
          title
        }
      }
    }
  }
  `
  const { createPage } = actions
  const allPortfolios = []
  const portfolioPages = []
  let pageNumber = 0

  const fetchPortfolios = async variables =>
    await graphql(GET_PORTFOLIOS, variables).then(({ data }) => {
      const {
        wordpressData: {
          portfolios: {
            nodes,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data

      const nodeIds = nodes.map(node => node.portfolioId)
      const portfolioListTemplate = path.resolve(
        `./src/templates/portfolioList/portfolioList.js`
      )
      const portfolioListPagePath = !variables.after
        ? `/portfolio`
        : `/portfolio/page/${pageNumber}`

      portfolioPages[pageNumber] = {
        path: portfolioListPagePath,
        component: portfolioListTemplate,
        context: {
          ids: nodeIds,
          pageNumber: pageNumber,
          hasNextPage: hasNextPage,
        },
        ids: nodeIds,
      }

      nodes.map(portfolio => {
        allPortfolios.push(portfolio)
      })

      if (hasNextPage) {
        pageNumber++
        return fetchPortfolios({ first: 12, after: endCursor })
      }
      return allPortfolios
    })

  await fetchPortfolios({ first: 9, after: null }).then(allPortfolios => {
    const portfolioTemplate = path.resolve(
      `./src/templates/portfolio/portfolio.js`
    )

    portfolioPages.map(portfolioListPage => {
      console.log(
        `createPortfolioListPage ${portfolioListPage.context.pageNumber}`
      )
      createPage(portfolioListPage)
    })

    allPortfolios.map(portfolio => {
      createPage({
        path: `/portfolio/${portfolio.slug}`,
        component: portfolioTemplate,
        context: portfolio,
      })
    })
  })
}
