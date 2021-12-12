import React from "react";

export default function RecipeCard(props) {
    const { imageUrl, name } = props

    return (
        <div>
            <img src={imageUrl} alt="" />
            <h2>{name}</h2>
        </div>
    );
}
