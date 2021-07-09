import React from "react"
import {Link, graphql, StaticQuery} from "gatsby"
import {logout} from "../utils/auth"

const Nav = () => (
    <div>
      <StaticQuery
              query={graphql`
                query {
                  allStrapiCategory {
                    edges {
                      node {
                        strapiId
                        name
                      }
                    }
                  }
                }
              `}
              render={data =>
                data.allStrapiCategory.edges.map((category, i) => {
                  return (
                    <li key={category.node.strapiId}>
                      <Link to={`/category/${category.node.strapiId}`}>
                        {category.node.name}
                      </Link>
                    </li>
                  )
                })
              }
            />
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