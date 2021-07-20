import React from "react"
import { login, isAuthenticated } from "../utils/auth"
import Layout from "./layout"

const Account = () => {
    if (!isAuthenticated()) {
      login()
      return <p>Redirecting to login...</p>
    }
    return (
      <>
        <Layout>
        </Layout>
      </>
    )
  }
  export default Account