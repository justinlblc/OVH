import React from "react"
import { StaticQuery, graphql } from "gatsby"

import "../assets/css/main.css"
import {Link} from "gatsby"


import "../assets/css/main.css"

export default () => (  
     <div>
      <p>Hello Gatsby!</p>
      <Link to="/account">Go to your account</Link>
    </div>
)