import React from "react"

const Home = ({ user }) => {
    return <p>Hi, {user.name ? user.name : "friend"}!</p>
  }

export default Home