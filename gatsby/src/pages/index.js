import React from "react"
import {graphql, Link} from "gatsby"

const Index = ({data}) => (
  <div>
    hello {data.allStrapiArticle.nodes.id}
    <Link to="/account">Go to your account</Link>
  </div>
)

export const query=graphql`
query MyQuery {
  allStrapiArticle {
    nodes {
      id
    }
  }
}
`
export default Index