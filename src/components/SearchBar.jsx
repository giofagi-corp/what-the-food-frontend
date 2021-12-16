import React from 'react'

export default function SearchBar(props) {
    const { value, onChange, handleSubmit  } = props
    return (
        <div>
            <form>
                <input type="text" name="search" value={value} onChange={onChange} />
                <button onClick={(e) => handleSubmit(e.target.value)}>+</button>
            </form>
        </div>
    )
}
