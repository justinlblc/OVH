import React from "react"
import {StaticQuery, graphql} from "gatsby"

const query=graphql`
  query {
    allStrapiArticle {
      edges {
        node {
          strapiId
          title
          content
        }
      }
  }
}
`

const Index = () => (
  <StaticQuery
    query={query}
    render={data => (
      <ul>
        {data.allStrapiArticle.edges.map(article => (
          <li key={article.node.strapiId}>{article.node.title}</li>
        ))}
      </ul>
    )}
  />
);

export default Index