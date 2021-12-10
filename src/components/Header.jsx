import React from 'react'
import TabMenu from "./TabMenu"
import SearchBar from "./SearchBar"
import Duration from "./Duration"

export default function Header() {
    return (
        <div>
            <TabMenu/>
            <SearchBar/>
            <Duration/>
        </div>
    )
}
