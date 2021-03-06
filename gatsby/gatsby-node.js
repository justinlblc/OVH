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
        query {
          allStrapiArticle {
            edges {
              node {
                title
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
    result.data.allStrapiArticle.edges.forEach(edge =>{
      createPage({
        path: `/article/${edge.node.strapiId}`,
        component: require.resolve("./src/templates/article.js"),
        context: {
          id: edge.node.strapiId,
      },
    })
  })
  }