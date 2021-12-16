import React from 'react'
import HomeTopList from "../components/HomeTopList"

export default function HomeContent(props) {
    const {recipes} = props
    
    return (
        <div>     
            <HomeTopList recipes={recipes}/>
        </div>
    )
}
