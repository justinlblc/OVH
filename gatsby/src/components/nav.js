import React from "react"
import Home from "./components"
import Settings from "./components"
import { Router } from "@reach/router"
import {Link} from "gatsby"
import {logout} from "../utils/auth"

const Nav = () => (
    <div>
        <Link to="/account/">Home</Link>{" "}
        <Link to="/account/settings/">Settings</Link>{" "}
        <a
          href="#logout"
          onClick={e => {
            logout()
            e.preventDefault()
          }}
        >
          Log Out
        </a>
        <Router>
        <Home path="/account/" user={user} />
        <Settings path="/account/settings" />
      </Router>
    </div>
)

export default Nav