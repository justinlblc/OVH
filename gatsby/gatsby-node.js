exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
      /*
       * During the build step, `auth0-js` will break because it relies on
       * browser-specific APIs. Fortunately, we don’t need it during the build.
       * Using Webpack’s null loader, we’re able to effectively ignore `auth0-js`
       * during the build. (See `src/utils/auth.js` to see how we prevent this
       * from breaking the app.)
       */
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /auth0-js/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }

  exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(
      `
        {
          articles: allStrapiArticle {
            edges {
              node {
                title
              }
            }
          }
      `
    )
  
    if (result.errors) {
      throw result.errors
    }
  
    // Create blog articles pages.
    const articles = result.data.articles.edges
    const categories = result.data.categories.edges
  
    articles.forEach((article, index) => {
      createPage({
        path: `/account/article/${article.node.title}`,
        component: require.resolve("./src/templates/article.js"),
        context: {
          id: article.node.strapiId,
        },
      })
    })
  }
  