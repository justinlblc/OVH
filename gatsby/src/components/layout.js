import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

import Nav from "./nav"

const Layout = ({children}) => {
    const 
    return (
    <>
    <Nav />
    <main>{children}</main>
    </>
)
}

export default Layout