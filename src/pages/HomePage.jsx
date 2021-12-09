import React from 'react'

import Header from "../components/Header"
import HomeFeed from "../components/HomeFeed"

function HomePage() {
  return (
    <div>
      {/* <h1>Home Page</h1> */}
      <Header/>
      <HomeFeed/>
    </div>
  );
}

export default HomePage;