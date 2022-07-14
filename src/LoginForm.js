import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function LoginForm({ authenticated, login, location }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = () => {
        try {
            login({ username, password });
        } catch (e) {
            alert('Failed to login');
            setUsername('');
            setPassword('');
        }
    };

    const { from } = location.state || { from: { pathname: "/" } };
    if (authenticated) return <Redirect to={from} />;

    return (
        <>
            <h1>Login</h1>
            <input
                value={ username }
                onChange={({ target: { value } }) => setUsername(value)}
                type="text"
                placeholder="email"
            />
            <input
                value={password}
                onChange={({ target: { value } }) => setPassword(value)}
                type="password"
                placeholder="password"
            />
            <button onClick={handleClick}>Login</button>
        </>
    );
}

export default LoginForm;