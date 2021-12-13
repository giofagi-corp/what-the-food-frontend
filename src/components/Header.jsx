import React from 'react'
import TabMenu from '../components/TabMenu'
import SearchBar from '../components/SearchBar'
import RecipeDuration from '../components/RecipeDuration'
import TopButtons from '../components/TopButtons'


export default function Header() {
    return (
        <div>
            <TabMenu/>
            <SearchBar/>
            <RecipeDuration/>
            <TopButtons/>
        </div>
    )
}
