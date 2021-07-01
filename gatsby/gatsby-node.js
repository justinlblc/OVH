exports.createPages = async ({ graphql, page, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        articles: allStrapiArticle {
          edges {
            node {
              strapiId
            }
          }
        }
        categories: allStrapiCategory {
          edges {
            node {
              strapiId
            }
          }
        }
      }
    `
  )
  if (result.errors) {
    throw result.errors
  }
  if (page.path.match(/^\/account/)) {
    page.matchPath = "/account/*"
    // Update the page.
    createPage(page)
  }
  
  
  // Create blog articles pages.
  const articles = result.data.articles.edges
  const categories = result.data.categories.edges
 
  articles.forEach((article, index) => {
    createPage({
      path: `/account/article/${article.node.strapiId}`,
      component: require.resolve("./src/templates/article.js"),
      context: {
        id: article.node.strapiId,
      },
    })
  }
  )

  categories.forEach((category, index) => {
    createPage({
      path: `/account/category/${category.node.strapiId}`,
      component: require.resolve("./src/templates/category.js"),
      context: {
        id: category.node.strapiId,
      },
    })
  })
}
