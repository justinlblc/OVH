import React from "react"
import { Router } from "@reach/router"
import { login, isAuthenticated } from "../utils/auth"
import Nav from "../components/nav"
import Home from "../components/home"
import Settings from "../components/settings"

const Account = () => {
    if (!isAuthenticated()) {
      login()
      return <p>Redirecting to login...</p>
    }
  
    return (
      <>
        <Layout>Welcome</Layout>
        <Router>
          <Home path="/account/" />
          <Settings path="/account/settings" />
        </Router>
      </>
    )
  }
  export default Account