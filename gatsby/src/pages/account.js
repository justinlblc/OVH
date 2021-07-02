import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import Profile from "../components/profile"
import Login from "../components/login"

const Account = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/account/profile" component={Profile} />
      <Login path="/account/login" />
    </Router>
  </Layout>
)

export default Account