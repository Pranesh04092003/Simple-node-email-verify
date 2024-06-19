// src/components/OtpForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL, API_ENDPOINTS } from '../config'; // Adjusted the import path

function OtpForm() {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_BASE_URL}${API_ENDPOINTS.VERIFY_OTP}`, { email, otp }); // Construct the API URL
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response.data.error || 'An error occurred');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Verify OTP</h2>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label>OTP:</label>
            <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} required />
            <button type="submit">Verify OTP</button>
            {message && <div>{message}</div>}
        </form>
    );
}

export default OtpForm;
