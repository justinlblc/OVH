import React from "react"
import {getProfile } from "../utils/auth"

import Nav from "./nav"

const Layout = ({children}) => {
    return (
    <>
    <Nav />
    <main>{children}</main>
    </>
)
}

export default Layout