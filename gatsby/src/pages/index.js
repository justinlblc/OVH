import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const Index = ({data}) => {
  const {title} = data.site.siteMetadata
  return (  
  <div>
    <Link to="/account">Go to your account there ({title)}</Link>
  </div>
  )
}

export const query = graphql`
    query IndexTest {
      site {
        siteMetadata {
          title
        }
      }
    }
`



export default Index

