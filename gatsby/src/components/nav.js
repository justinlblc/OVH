import React from "react"
import {Link, StaticQuery, graphql} from "gatsby"
import {logout} from "../utils/auth"

const Nav = () => (
    <div>
        <Link to="/account/">Account</Link>{" "}
        <Link to="/settings/">Settings</Link>{" "}
        <Link to ="/">Home</Link>
        <a
          href="#logout"
          onClick={e => {
            logout()
            e.preventDefault()
          }}
        >
          Log Out
        </a>
  </div>
    )  

export default Nav