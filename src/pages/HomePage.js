import React from "react"
import axios from "axios";
import Header from "../components/Header"
import ProfileFeed from "../components/ProfileFeed";

import { useState, useEffect } from "react";


export default function HomePage() {
  return (
    <div>
      <Header/>
      <ProfileFeed/>
    </div>
  );
}
