import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import ArticlesComponent from "../components/articles"

import "../assets/css/main.css"
import {Link} from "gatsby"

export default () => (
    <div>
      <p>Hello Gatsby!</p>
      <Link to="/account">Go to your account</Link>
    </div>
)