import React from "react"
import Layout from "./layout"

const Home = ({user}) => {
    return (
    <Layout>
        <p>Hi, {user.name}!</p>
    </Layout>
    )
}

export default Home