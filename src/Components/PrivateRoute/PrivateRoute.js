import jwt from "jsonwebtoken";
import React, { useContext } from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';




const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();


    const token = sessionStorage.getItem("token");
    if(!token){
        
        history.push("/login");
    } else {

        jwt.verify( token, "sjdf389herin3g98h9un3458hg4u", (error, decoded) => {

            if(error){
                
                console.log(error.message);
                history.push("/login");
            } else {
    
                const currentTime = Math.round(new Date().getTime() / 1000);
                if(decoded.exp < currentTime){
        
                    sessionStorage.removeItem('token');
                    console.log("Token time expired");
                }
            }
    
        })
    }
 


    
    return (
        <>
            <Route
            {...rest}
            render={({ location }) =>
            token ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
            /> 
        </>
    );
};

export default PrivateRoute;