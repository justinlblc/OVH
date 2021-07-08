import React from "react"
import Nav from "./nav"
import PropTypes from "prop-types"

const Layout = ({children}) => {
    return (
        <>
        <Nav />
        <main>{children}</main>
        </>
    )
}
Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
export default Layout