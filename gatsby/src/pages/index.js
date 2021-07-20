import React from "react"
import {StaticQuery, graphql, Link} from "gatsby"
import Img from "gatsby-image"
import {isAuthenticated } from "../utils/auth"
import Layout from "../components/layout"
import Home from "../components/home"
import Settings from "../components/settings"
import Account from "../components/account"

const query=graphql`
  query {
  allStrapiHome {
    edges {
      node {
        strapiId
        title
        content
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

const Index = () => {
  if (!isAuthenticated()) {
    return (
  <Home>

  </Home>
    )}
return (
  <>
      <Layout>
      </Layout>
      <Router>
        <Home path="/home/" />
        <Settings path="/settings" />
        <Account path="/account" />
      </Router>
    </>
)
}

export default Index