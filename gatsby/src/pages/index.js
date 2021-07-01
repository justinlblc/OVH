import React from "react"
import {Link} from "gatsby" 
import "../assets/css/main.css"

const IndexPage = () => (
  <div>
    <p>Home</p>
    <Link to="/account">Your account</Link>
  </div>
)

export default IndexPage