import React from "react"
import {isAuthenticated } from "../utils/auth"
import Layout from "../components/layout"
import Home from "../components/home"
import Settings from "../components/settings"
import Account from "../components/account"

const Index = () => {
  if (!isAuthenticated()) {
    return (
      <>
  <Layout>
    <Home />
  </Layout>
  </>
    )}
return (
  <>
      <Layout>
      </Layout>
      <Router>
        <Home path="/home/" />
        <Settings path="/settings" />
        <Account path="/account" />
      </Router>
    </>
)
}

export default Index