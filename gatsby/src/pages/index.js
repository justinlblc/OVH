import React from "react"
import { Link, graphql } from "gatsby"

const Index = ({data}) => {}
  <div>
    Hello Gatsby!
    {data.site.siteMetadata.title}
    <Link to="/account">Go to your account throught this link</Link>
  </div>
}
export const query = graphql`
+  query HomePageQuery {
+    site {
+      siteMetadata {
+         title
+      }
+    }
+  }
`
export default Index

