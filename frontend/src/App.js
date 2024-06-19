import React from 'react';
import RegisterForm from './components/RegisterForm';
import OtpForm from './components/OtpForm';
import LoginForm from './components/LoginForm';

function App() {
    return (
        <div>
            <h1>User Registration and Login</h1>
            <RegisterForm />
            <OtpForm />
            <LoginForm />
        </div>
    );
}

export default App;
