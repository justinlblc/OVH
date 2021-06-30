import React from "react"
import Layout from "../components/layout.js"
import { Router } from "@reach/router"
import Profile from "../components/profile"
import Login from "../components/login"

const Account = () => {
return (
  <Layout>
  <div>
    <p>This is going to be a protected route.</p>
  </div>
  <Router>
      <Profile path="/account/profile" />
      <Login path="/account/login" />
  </Router>
  </Layout>
)
}
export default Account