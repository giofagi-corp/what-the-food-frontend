import React from 'react'

export default function PodiumNumber(props) {

    console.log("-------_>",props)
    const {number} = props
    
 
    return (
        <div>
            <p>{number}</p>
        </div>
    )
}
