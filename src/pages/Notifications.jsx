import React from 'react'

import BackButton from "../components/BackButton"
import GenericPageTitle from "../components/GenericPageTitle"
import Notification from "../components/Notification"

export default function Notifications() {
    return (
        <div>
            <BackButton/>
            <GenericPageTitle/>
            <Notification/>
        </div>
    )
}
