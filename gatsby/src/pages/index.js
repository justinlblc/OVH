import React from "react"
import { Link } from "gatsby"

const Index = ({data}) => {
  return (  
  <div>
    Hello Gatsby!
    {data.site.siteMetadata.title}
    <Link to="/account">Go to your account throught this link</Link>
  </div>
  )
}

export default Index

