import React from "react";

export default function LoginPageTitle(props) {
    const {text} = props
    return (
        <div className="LoginPageTitle">
            <h2>{text}</h2>
        </div>
    )
}