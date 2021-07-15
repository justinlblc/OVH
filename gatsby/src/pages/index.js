import React from "react"
import {useStaticQuery, graphql} from "gatsby"

const Index = () => {

  const data = useStaticQuery(query)

  return (
    <div>
      Hello!
      {data.allStrapiArticle}
    </div>
  )
}
const query = graphql`
  query {
    allStrapiArticle {
    }
  }
`
export default Index