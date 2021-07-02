import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"

import Layout from "../components/layout"
const query = graphql`
  query {
    allStrapiCategory {
      edges {
        node {
          strapiId
          name
        }
      }
    }
  }
`;
export default function Home() {
  return (
    <Layout>
      query{}
      <h1>Hello {isLoggedIn() ? getUser().name : "world"}!</h1>
      <p>
        {isLoggedIn() ? (
          <>
            You are logged in, so check your{" "}
            <Link to="/account/profile">profile</Link>
          </>
        ) : (
          <>
            You should <Link to="/account/login">log in</Link> to see restricted
            content
            <StaticQuery
    query={query}
    render={data => (
      <ul>
        {data.allStrapiRestaurant.edges.map(restaurant => (
          <li key={restaurant.node.strapiId}>{restaurant.node.name}</li>
        ))}
      </ul>
    )}
  />
          </>
        )}
      </p>
    </Layout>
  )
}