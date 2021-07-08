import React from "react"
import { login, isAuthenticated, getProfile } from "../utils/auth"
import Layout from "../components/layout"
import { Router } from "@reach/router"

const Home = ({ user }) => {
    return <p>Hi, {user.name ? user.name : "friend"}!</p>
  }
const Settings = () => <p>Settings</p>

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