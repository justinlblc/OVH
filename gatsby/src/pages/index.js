import React from "react"
import { getUser, isLoggedIn } from "../services/auth"
import {Link} from "gatsby"
import Layout from "../components/layout"

 export default function Home() {
  return (
    <Layout>
      <h1>Hello {isLoggedIn() ? getUser().name : "world"}!</h1>
      <p>
        {isLoggedIn() ? (
          <>
            You are logged in, so check your{" "}
            <Link to="/account/profile">profile</Link>
            or go to your <Link to="/account">account</Link> to see all the content available 
          </>
        ) : (
          <>
            You should <Link to="/account/login">log in</Link> to see restricted
            content
          </>
        )}
      </p>
    </Layout>
  )
}