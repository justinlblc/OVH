import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const query = graphql`
  query {
    allStrapiArticle {
      edges {
        node {
          strapiId
          title
        }
      }
    }
  }
`

const Index = () => {
  return (  
  <div>
    <StaticQuery
    query={query}
    render={data => (
      <ul>
        {data.allStrapiArticle.edges.map(article => (
          <li key={article.node.strapiID}>{article.node.title}</li>
        ))}
      </ul>
    )}
    />
    <Link to="/account">Go to your account there</Link>
  </div>
  )
}

export default Index

