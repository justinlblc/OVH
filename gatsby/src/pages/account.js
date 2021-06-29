import React from "react"
import {Link} from "gatsby"

const Account = () => (
  <>
  <nav>
      <Link to="/">Home</Link>{" "}
      <Link to="/account/category/1">Overview</Link>{" "}
    </nav>
  <div>
    <p>This is going to be a protected route.</p>
    <p> You will soon be able to login to you account from there and have 
        access to the whole content of this website!!
    </p>
  </div>
  </>
)

export default Account