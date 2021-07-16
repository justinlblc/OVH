import React from "react"
import {StaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

const query=graphql`
  query {
  allStrapiHome {
    edges {
      node {
        strapiId
        title
        picture {
          localFile {
            childImageSharp {
              fixed (height: 410, width: 1200){
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
}
`

const Index = () => (
  <StaticQuery
    query={query}
    render={data => (
      <ul>
        {data.allStrapiHome.edges.map(home => (
          <div>
            <div>
          <h1>{home.node.title}</h1>
            </div>
          <Img fixed={home.node.picture.localFile.childImageSharp.fixed}/>
          </div>
        ))}
      </ul>
    )}
  />
);

export default Index