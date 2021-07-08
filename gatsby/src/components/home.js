import React from "react"
import Layout from "./layout"

const Home = ({user}) => {
    return (
        <p>Hi, {user.name}!</p>
    )
}

export default Home