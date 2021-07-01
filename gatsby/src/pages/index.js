import React from "react"

import { Link } from "gatsby"

const Layout = ({ children }) => (
  <>
    <div>
      <p>Welcoming to Deal Ex Machina Website.</p>
      <Link to="/account">Your Account</Link>
    </div>
  </>
)

export default Layout