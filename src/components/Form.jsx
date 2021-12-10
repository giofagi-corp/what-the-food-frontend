import React from 'react';
import Link from '@mui/material/Link';

export default function Form() {
    return (
        <div className="LoginPage">
            <h1>Login</h1>

            <form onSubmit={}>
                <label>Email:</label>
                <input type="text" name="email" value={email} onChange={handleEmail} />

                <label>Password:</label>
                <input
                type="password"
                name="password"
                value={password}
                onChange={handlePassword}
                />

                <button type="submit">Login</button>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <p>Don't have an account yet?</p>
            <Link to={"/signup"}> Sign Up</Link>
        </div>
    )
}
