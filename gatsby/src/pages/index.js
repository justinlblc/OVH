import React from "react"
import {graphql} from "gatsby"

const Index = ({data}) => {
  return (
  <div>Welcome to a site which is FINALLY working (at least I hope so) {data.allStrapiArticle.edges} </div>
  )
}

export const quey = graphql`
  query Index {
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