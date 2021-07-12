import React from "react"
import { Link, graphql } from "gatsby"

const Index = ({data}) => {
  return (  
  <div>
    {data.site.siteMetadata.description}
    <Link to="/account">Go to your account throught this link</Link>
  </div>
  )
}
export const query = graphql`
query IndexQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`

export default Index

