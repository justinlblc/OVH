import React from "react"
import {StaticQuery, graphql} from "gatsby"

const Index = () => {
  return (
    <div>
    <StaticQuery
    query={graphql`
      query {
        allStrapiArticle {
          edges {
            node {
              strapiId
              title
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <div>
          <h1>{data.allStrapiArticle.edges}</h1>
        </div>
      </div>
    )}
  />
  </div>
  )
}
export default Index