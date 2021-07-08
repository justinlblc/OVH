import React from "react"
import { Router } from "@reach/router"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import Layout from ".../components/nav"
import Settings from "./settings"

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
        <Home path="/account/" user={user} />
        <Settings path="/account/settings" />
      </Router>
      </Layout>
    </>
  )
}

export default Account