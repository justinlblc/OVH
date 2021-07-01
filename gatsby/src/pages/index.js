import React from "react"
import { Link } from "gatsby"
import Seo from "./seo"

import "../assets/css/main.css"

const IndexPage = () => (
  <>
  <Seo />
  <div>
    <p> Page de Garde</p>
    <Link to="/account">Account</Link>
  </div>  
  </>
    
)

export default IndexPage