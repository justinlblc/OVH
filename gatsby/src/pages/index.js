import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"

import Layout from "../components/layout"
import ArticlesComponent from "../components/articles"

import "../assets/css/main.css"

const IndexPage = () => (
  <p> {isLoggedIn()? ( 
  <Layout>
    <StaticQuery
      query={graphql`
        query {
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
      `}
      render={data => (
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <h1>Strapi blog</h1>
            <p>
            You are logged in, so check your{" "}
            <Link to="/profile">profile</Link>
            </p>
            <ArticlesComponent articles={data.allStrapiArticle.edges} />
          </div>
        </div>
      )}
    />
  </Layout>
  ) : (
    <Layout>
      You should <Link to="/app/login">log in</Link> to see restricted content
    </Layout>
  )}
  </p>
)

export default IndexPage
