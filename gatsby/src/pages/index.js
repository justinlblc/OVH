import React from "react"
import {useStaticQuery, graphql} from "gatsby"

const Index = () => {

  const data = useStaticQuery(query)

  return (
    <div>
      Hello!
      {data.allStrapiArticle.edges.node.title}
    </div>
  )
}
const query = graphql`
  query {
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