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
              query={graphql`
                query {
                  allStrapiCategory {
                    edges {
                      node {
                        strapiId
                        name
                      }
                    }
                  }
                }
              `}
              render={data =>
                data.allStrapiCategory.edges.map((category, i) => {
                  return (
                    <li key={category.node.strapiId}>
                      <Link to={`/category/${category.node.strapiId}`}>
                        {category.node.name}
                      </Link>
                    </li>
                  )
                })
              }
            />
    <Link to="/account">Go to your account there</Link>
  </div>
  )
}

export default Index

