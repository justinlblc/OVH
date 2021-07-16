import React from "react"
import {graphql, Link} from "gatsby"

const Index = ({data}) => (
  <div>
    hello {data.allStrapiArticle.edges.node.title}
    <Link to="/account">Go to your account</Link>
  </div>
)

export const query=graphql`
query MyQuery {
  allStrapiArticle {
    edges {
      node {
        title
      }
    }
  }
}
`
export default Index