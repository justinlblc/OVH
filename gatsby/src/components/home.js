import React from "react"
import {StaticQuery, graphql, Link} from "gatsby"

const Home = () => {

  const query = graphql`
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
  
  `

  return (
    <StaticQuery
    query={query}
    render={data => (
      <ul>
        {data.allStrapiCategory.edges.map(( category, i) => (
          <div>
          <header>
            <h1>Here you will see a list of all the different categories of articles you have access to.</h1>
          </header>
          <div key={category.node.strapiId}>
            <p>{category.node.name}</p>
          </div>
        </div>
        ))}
      </ul>
    )}
  />
  )
}

export default Home