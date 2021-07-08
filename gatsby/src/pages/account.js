import React from "react"
import { login, isAuthenticated, getProfile } from "../utils/auth"
import Layout from "../components/layout"

const Account = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return (
    <>  
      <Layout>
        <p>Welcome to your account page</p>
      </Layout>
    </>
  )
}

export default Account