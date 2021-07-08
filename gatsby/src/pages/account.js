import React from "react"
import { Router } from "@reach/router"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import { Link } from "gatsby"
import Nav from ".../components/nav"
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
      <Nav />
      <Router>
        <Home path="/account/" user={user} />
        <Settings path="/account/settings" />
      </Router>
    </>
  )
}

export default Account