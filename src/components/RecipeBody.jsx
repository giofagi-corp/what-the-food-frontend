import React from 'react'

export default function RecipeBody(props) {
    const { recipe } = props

    return (
        <div className='RecipeBody'>
            <div style={{width: '100%', display: 'flex'}}>
                <div style={{width: '50%'}}>
                    <h3 style={{marginBottom: '0px'}}>Duration</h3>
                    <p style={{margin: '0px'}}>{recipe.time}</p>
                </div>
                <div style={{width: '50%'}}>
                    <h3 style={{marginBottom: '0px'}}>Cuisine</h3>
                    <p style={{margin: '0px'}}>{recipe.cuisine}</p>
                </div>
            </div>
            <div style={{marginTop: '30px'}}>
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
        </div>
    )
}


