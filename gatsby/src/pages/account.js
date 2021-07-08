import React from "react"
import { Router } from "@reach/router"
import { login, isAuthenticated, getProfile } from "../utils/auth"
import Layout from "../components/layout"
import Settings from "./settings"
import Home from "./home"

const Home = ({ user }) => {
  return <p>Hi, {user.name ? user.name : "friend"}!</p>
}

const Account = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return (
    <>
      <Layout>
      <Router>
        <Home path="/account/home" user={user} />
        <Settings path="/account/settings" />
      </Router>
      </Layout>
    </>
  )
}

export default Account