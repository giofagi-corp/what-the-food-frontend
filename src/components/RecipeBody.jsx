import React from 'react'

export default function RecipeBody(props) {
    const { recipe } = props

    return (
        <div className='RecipeBody'>
            <div className='RecipeBodyHeader'>
                <div>
                    <h3>Duration</h3>
                    <p>{recipe.time}</p>
                </div>
                <div>
                    <h3>Cuisine</h3>
                    <p>{recipe.cuisine}</p>
                </div>
            </div>
            <h3>Ingredients</h3>
            <ul>              
                {recipe.ingredients && recipe.ingredients.map((el) => (
                    <li>{el.name}</li>
                ))}
            </ul>

            <h3>Steps</h3>
            <ol>
                {recipe.description && recipe.description.map((el) => (
                    <li>{el}</li>
                ))}
            </ol>
        </div>
    )
}


