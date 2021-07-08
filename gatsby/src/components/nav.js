import React from "react"
import { Link} from "gatsby"

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
    </div>
)

export default Nav