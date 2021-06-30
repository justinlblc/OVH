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
    <p> Welcome to your Accoun!</p>
  </div>
  </Layout>
)
}
export default Account