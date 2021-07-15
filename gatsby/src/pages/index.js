import React from "react"
import {graphql} from "gatsby"

const Index = ({data}) => (
  <div>
    hello {data.allStrapiArticle.nodes.id}
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