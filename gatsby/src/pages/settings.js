import React from "react"
import Layout from "../components/layout"

const Settings = ({user}) => {
    return(
    <Layout>
        <p>Hi, {user.name}! Welcome to your account page, where you will be able
        to see all the information relative to your account.</p>
    </Layout>
    )
}

export default Settings