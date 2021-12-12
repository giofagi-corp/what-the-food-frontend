import React from 'react'
import { Link, useState } from "react-router-dom";

export default function Switch() {
    const [theme, setTheme] = useState('light');
    const [unit, setUnit] = useState('C');
 
    const toggleTheme = event => {
    setTheme(event.target.value);
    };

    return (
        <>
        <p>Don't have an account yet?</p>
            <Link to={"/signup"}> Sign Up</Link>
            <select onChange={toggleTheme}>
                <option value="light"> Light </option>
                <option value="dark"> Dark </option>
            </select>
        
            <button onClick={() => setUnit('C')}> °C </button>
            <button onClick={() => setUnit('F')}> °F </button>

            
        </>
        
    )
}


