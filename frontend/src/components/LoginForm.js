// src/components/LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL, API_ENDPOINTS } from '../config'; // Adjusted the import path

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_BASE_URL}${API_ENDPOINTS.LOGIN}`, { email, password }); // Construct the API URL
            setMessage('Login successful.');
        } catch (error) {
            setMessage(error.response.data.error || 'An error occurred');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
            {message && <div>{message}</div>}
        </form>
    );
}

export default LoginForm;
