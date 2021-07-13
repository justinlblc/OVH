import React from "react"
import { Link, graphql } from "gatsby"

const Index = ({data}) => {
  return (  
  <div>
    <Link to="/account">Go to your account there {data.site.siteMetadata.title}</Link>
  </div>
  )
}

export const query = graphql`
    query IndexTest {
      allStrapiArticle {
            edges {
              node {
                strapiId
                title
                category {
                  name
                }
                image {
                  publicURL
                }
              }
            }
          }
        }
`
export default Index

