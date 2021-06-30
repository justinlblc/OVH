import React from "react"
import Layout from "../components/layout.js"
import { Router } from "@reach/router"
import PrivateRoute from "../components/privateRoute"
import Profile from "../components/profile.js"
import Login from "../components/login.js"

const Account = () => {
return (
  <Layout>
  <div>
    <p>This is going to be a protected route.</p>
  </div>
  <Router>
    <PrivateRoute path="/account/profile" component={Profile} />
      <Login path="/account/login" />
  </Router>
  <div>
    Bonjour
  </div>
  </Layout>
)
}
export default Account