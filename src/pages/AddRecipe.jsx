import React from 'react'

import BackButton from "../components/BackButton"
import GenericPageTitle from "../components/GenericPageTitle"
import GenericPageSubitle from "../components/GenericPageSubitle"
import AddProfileImage from "../components/AddProfileImage"

export default function AddRecipe() {
    return (
        <div>
            <BackButton/>
            <GenericPageTitle/>
            <GenericPageSubitle/>
            <AddProfileImage/>
        </div>
    )
}
