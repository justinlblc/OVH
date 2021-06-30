import React from "react"
import {Link} from "gatsby"
import { Router } from "@reach/router"
import { login, isAuthenticated } from "../utils/auth"

const Account = () => {
return (
  <Layout>
  <div>
    <p>This is going to be a protected route.</p>
  </div>
  </Layout>
)
}
export default Account