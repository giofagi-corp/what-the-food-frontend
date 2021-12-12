import React from 'react'

export default function RecipeDuration() {
    return (
        <div>
            <input type="radio" id="15" name="duration" value="15"/>
            <label for="15">15min</label><br/>
            <input type="radio" id="30" name="duration" value="30"/>
            <label for="30">30min</label><br/>
            <input type="radio" id="45" name="duration" value="45"/>
            <label for="30">45min</label><br/>
            <input type="radio" id="+1" name="duration" value="+1"/>
            <label for="30">+60</label><br/>
            <input type="radio" id="+1" name="duration" value="+1"/>
            <label for="30">All</label><br/>
        </div>
    )
}
