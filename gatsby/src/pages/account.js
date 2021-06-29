import React from "react"
import {Link} from "gatsby"

const Account = () => (
  <>
  <nav>
    <Link to="/">Come back to Home Page</Link>{" "}
    <Link to="/account/category/1">The Overview Category</Link>{" "}
  </nav>
  <div>
    <p>This is going to be a protected route.</p>
  </div>
  </>
)

export default Account