import React from "react"
import { Router } from "@reach/router"
import { login, isAuthenticated } from "../utils/auth"
import Nav from "../components/nav"
import Home from "../components/home"
import Settings from "../components/settings"

const user = getProfile()

const Account = () => {
    if (!isAuthenticated()) {
      login()
      return <p>Redirecting to login...</p>
    }
  
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