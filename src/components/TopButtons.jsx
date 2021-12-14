import React from 'react'
import { Link } from "react-router-dom";

export default function TopButtons() {
    return (
        <div>
           <Link to="/top-recipes"><button>TOP RECIPIES</button></Link>
           <Link to="/top-ingredients"><button>TOP INGREDIENTS</button></Link>
           <Link to="/top-cuisine"><button>TOP CUISINE</button></Link>
        </div>
    )
}

