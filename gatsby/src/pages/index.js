import React from "react"
import {graphql} from "gatsby"

const Index = ({data}) => {
  return (
    <div>
      Hello!
      {data.site.siteMetadata.title}
    </div>
  )
}
export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
export default Index