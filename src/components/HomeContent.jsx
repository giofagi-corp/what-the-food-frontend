import React from 'react'
import HomeTopList from "../components/HomeTopList"

export default function HomeContent(props) {
    const {recipes, isHome} = props
    return (
        <div>     
            <HomeTopList isHome={isHome} recipes={recipes}/>
        </div>
    )
}
