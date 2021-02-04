import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';





const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)


    console.log(loggedInUser);
    return (
        <div>
            <h2>Welcome to Dashboard</h2>
        </div>
    );
};

export default Dashboard;