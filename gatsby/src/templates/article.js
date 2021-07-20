import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Article = () => {
    const query=graphql`
    query {
        strapiArticle {
            strapiId
            content
            publishedAt
            title
            picture {
                 localFile {
                    childImageSharp {
                        fixed(height: 125, width: 200){
                            ...GatsbyImageSharpFixed
                             }
                        }
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
            <header>
                <h1>{data.strapiArticle.title}</h1>
            </header>
            <div>
                <div>
                    <Img fixed={data.strapiArticle.picture.localFile.childImageSharp.fixed}/>
                </div>
                <div>
                <p>{data.strapiArticle.content} </p>
                <p>{data.strapiArticle.publishedAt}</p>
                </div>
            </div>
        </ul>
    )}
    />
)
}
export default Article