import React from "react"
import {StaticQuery, graphql} from "gatsby"

const Index = ({data}) => {
  return (
    <div>
      {data.allStrapiArticle.edges}
    </div>
  )
}
export default Index

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          title 
        }
      }
    }
  }
`