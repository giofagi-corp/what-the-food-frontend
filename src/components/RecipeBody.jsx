import React from 'react'

export default function RecipeBody(props) {
    console.log(props);

    const {description, ingredients} = props
    console.log(description);
    console.log(ingredients);

    return (
        <div className='RecipeBody'>
            <h3>Ingredients</h3>
            {/* <ul>              //  <--------------- Si se activan nose renderiza el contenido
                {ingredients.map((el) => (
                    <li>{el}</li>
                ))}
            </ul> */}

            <h3>Steps</h3>
            {/* <ol>
                {description.map((el) => (
                    <li>{el}</li>
                ))}
            </ol> */}
        </div>
    )
}


