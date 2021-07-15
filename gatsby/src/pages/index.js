import React from "react"
import {graphql} from "gatsby"

const Index = ({data}) => {
  return (
    <div>
      Hello!
      {data.allStrapiArticle.edges.node.title}
    </div>
  )
}
export const query = graphql`
  query HomePageQuery {
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