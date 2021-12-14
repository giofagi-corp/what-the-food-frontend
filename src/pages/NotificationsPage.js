import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import GenericPageTitle from "../components/GenericPageTitle";
import BackButton from "../components/BackButton";
import Notification from "../components/Notification";






export default function NotificationsPage() {
  return (
    <div>
        <Link to="/"><BackButton/></Link>
        <GenericPageTitle text="Notifications" />
        <Notification/>
    </div>
  );
}

