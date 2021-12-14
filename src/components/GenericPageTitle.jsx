import React from "react";

export default function GenericPageTitle(props) {
    const {text} = props
    return (
        <div className="GenericPageTitle">
            <h2>{text}</h2>
        </div>
    )
}