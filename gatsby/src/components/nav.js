import React from "react"
import {Link, StaticQuery, graphql} from "gatsby"
import {logout} from "../utils/auth"

const Nav = () => {
  const query = graphql`
    query {
      allStrapiArticle {
        edges {
          node {
            strapiId
            title
          }
        }
      }
    }
  `

    return (
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
        <div>
          <ul>
        <StaticQuery
        query={query}
        render={data => (
          <ul>
          {data.allStrapiArticle.edges.map((article, i) => (
            <li key={article.node.strapiId}>
              <Link to={`/account/article/${article.node.title}`}>
                {article.node.title}
              </Link>
            </li>
          ))}
          </ul>
        )}
        />
        </ul>
        </div>
  </div>
    )  
}

export default Nav