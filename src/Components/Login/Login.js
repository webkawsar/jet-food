import React, { useContext, useEffect, useState } from 'react';
import "./Login.css";
import { useForm } from 'react-hook-form';
import { Box, Container, Grid, Link } from '@material-ui/core';
import { handleLoginSystem, initializeFirebaseFramework } from '../../Firebase/FirebaseManager';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { Alert } from '@material-ui/lab';



const Login = (props) => {

    initializeFirebaseFramework();
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        
        
        handleLoginSystem(data)
        .then(response => {

            if(response.success && response.email){
                
                const loginUser = {...loggedInUser, ...response}
                setLoggedInUser(loginUser);
                handleProfileData(response.email);
                history.replace(from);

            }
            else{

                const loginUserError = {...loggedInUser}
                loginUserError.success = false;
                loginUserError.error = response.error;
                setLoggedInUser(loginUserError);

            }

        })

    }
    



    const handleProfileData = (email) => {

        if(email){

            fetch(`http://localhost:8080/userByEmail/${email}`)
            .then(response => response.json())
            .then(data => setLoggedInUser({...loggedInUser, profile: data}))
        }
    }
        






    console.log(loggedInUser);

    return (

        <Container>
            <Box className="login-section">
                <Box className="login">
                    <Grid container>
                        <Grid item xs={12} sm={12} md={3}>
                            {""}
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>

                            {
                                loggedInUser.error && <Alert severity="error">{loggedInUser.error}</Alert>
                                  
                            }

                            <Box className="login-form">
                                <h3>Login</h3>
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <Box className="input-box">
                                        <input type="email" name="email" ref={register({ 
                                            required: "Email is required",
                                            pattern: {
                                                value: /\S+@\S+\.\S+/,
                                                message: "Please provide valid email address"
                                            }
                                        })} placeholder="Your email"/>
                                        {
                                            errors.email && <span className="error">{errors.email.message}</span>
                                        }
                                    </Box>

                                    <Box className="input-box">
                                        <input type="password" name="password" ref={register({
                                            required: "Password is required",
                                            minLength: {
                                                value: 6,
                                                message: "Password containing at least 8 characters"
                                            },
                                            pattern: {
                                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                                                message: "Password containing characters, number, upper and lowercase"
                                            }
                                        })} placeholder="Your password"/>
                                        {
                                            errors.password && <span className="error">{errors.password.message}</span>
                                        }
                                    </Box>

                                    <Box className="special-input">
                                        <label htmlFor="checkbox"><input type="checkbox" name="checkbox" id="checkbox"/> Remember me</label>
                                        <Link className="forgot-pass" to="/login">Forgot password</Link>
                                    </Box>
                                    
                                    <input type="submit" value="Log in"/>
                                </form>

                                <p className="create-account">Don't have an account? <span className="toogle" onClick={props.handleLogin}>Create an account</span>
                                </p> 
                            </Box> 
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            {/* <AltSignIn></AltSignIn> */}
        </Container>
    );
};

export default Login;