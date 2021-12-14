import React from "react";

export default function GenericPageTitle(props) {
    const {text} = props
    return (
        <div>
            <h1>{text}</h1>
        </div>
    )
}