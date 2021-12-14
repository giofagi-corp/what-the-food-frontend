import React from "react"
import axios from "axios";
import Header from "../components/Header"
import HomeFeed from "../components/HomeFeed";

import { useState, useEffect } from "react";


export default function HomePage() {
  return (
    <div>
      <Header/>
      <HomeFeed/>
    </div>
  );
}
