import React from 'react'
import { Link } from "react-router-dom";

export default function Switch() {
    return (
        <>
            <div>
                <p>Texto dinámico</p>
            </div>
            <div>
            <Link to="/login">
                <button>Switch</button>
            </Link>
            </div>
        </>
        
    )
}
