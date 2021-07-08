import React from "react"
import { login, isAuthenticated } from "../utils/auth"
import Layout from "../components/layout"

const Account = () => {
    if (!isAuthenticated()) {
      login()
      return <p>Redirecting to login...</p>
    }
  
    return (
      <>
        <Layout>
            <div>
                Welcome to your account page
            </div>
        </Layout>
      </>
    )
  }
  export default Account