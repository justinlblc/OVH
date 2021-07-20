import React from "react"
import {isAuthenticated } from "../utils/auth"
import Layout from "../components/layout"
import Home from "../components/home"
import Settings from "../components/settings"
import Account from "../components/account"

const Index = () => {
  if (!isAuthenticated()) {
    return (
     <p>hello</p>
    )}
return (
  <>
      <p>not hello</p>
    </>
)
}

export default Index