import React from "react"
import { Router } from "@reach/router"
import {getProfile } from "../utils/auth"

import Nav from "./nav"
import Home from "./home"
import Settings from "./settings"

const user = getProfile()

const Layout = ({children}) => {
    return (
    <>
    <Nav />
    <Router>
          <Home path="/account/" user={user} />
          <Settings path="/account/settings" />
    </Router>
    <main>{children}</main>
    </>
)
}

export default Layout