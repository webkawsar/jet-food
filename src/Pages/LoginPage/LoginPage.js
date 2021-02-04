import React from 'react';
import { Link } from 'react-router-dom';




const LoginPage = () => {

    return (
        <div style={{textAlign: "center"}}>
            <h2>Welcome to Login</h2>

            <br/>
            <Link to="/admin/dashboard">Go to Dashboard</Link>
        </div>
    );
};

export default LoginPage;