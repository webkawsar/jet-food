import { Box, Container, Grid} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { handleRegisterSystem, initializeFirebaseFramework } from '../../Firebase/FirebaseManager';
import "./Register.css";



const Register = (props) => {
    initializeFirebaseFramework();

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {


        handleRegisterSystem(data)
        .then(response => {

            if(response.success && response.email){

                const registerUser = {...loggedInUser, ...response};
                setLoggedInUser(registerUser);
                handleData(response);
                history.replace(from);
            }
            else {
                
                const registerUserError = {...loggedInUser, ...response};
                setLoggedInUser(registerUserError);
            }
        })

    }


    const handleData = (userData) => {

        fetch('http://localhost:8080/adduser', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => response.json())
        .then(result => {

            console.log(result);
        });

    }



    // useEffect(() => {

    //     fetch('http://localhost:8080/adduser', {
    //             method: 'POST',
    //             body: JSON.stringify(registerData),
    //             headers: {
    //                 'Content-type': 'application/json; charset=UTF-8',
    //             },
    //         })
    //         .then(response => response.json())
    //         .then(result => {
    
    //             console.log(result);
    //         });


    // }, [])

    
    return (
        <Container>
            <Box className="register-section">
                <Box className="register">
                    <Grid container>
                        <Grid item xs={12} sm={12} md={3}>
                            {""}
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            
                            {
                                loggedInUser.error && <Alert severity="error">{loggedInUser.error}</Alert>
                                  
                            }

                            <Box className="register-form">
                                <h3>Create an account</h3>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Box className="input-box">
                                        <input type="text" id="fullname" name="fullname" ref={register({ required: "Full name is required"})} placeholder="Full name"/>
                                        {
                                            errors.fullname && <span className="error">{errors.fullname.message}</span>
                                        }
                                    </Box>
                                    <Box className="input-box">
                                        <input type="text" id="mobile" name="mobile" ref={register({ required: "Mobile number is required"})} placeholder="Mobile number"/>
                                        {
                                            errors.mobile && <span className="error">{errors.mobile.message}</span>
                                        }
                                    </Box>
                                    <Box className="input-box">
                                        <input type="text" id="altMobile" name="altMobile" ref={register({ required: "Alternate mobile number is required"})} placeholder="Alternate mobile number"/>
                                        {
                                            errors.altMobile && <span className="error">{errors.altMobile.message}</span>
                                        }
                                    </Box>
                                    <Box className="input-box">
                                        <input type="email" name="email" ref={register({ 
                                            required: "Email is required",
                                            pattern: {
                                                value: /\S+@\S+\.\S+/,
                                                message: "Please provide a valid email address"
                                            }
                                            })} placeholder="Email address"/>
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
                                            })} placeholder="Password"/>
                                        {
                                            errors.password && <span className="error">{errors.password.message}</span>
                                        }

                                    </Box>
                                    <Box className="input-box">
                                        <input type="password" name="rePassword" ref={register({
                                            required: "Confirm password is required",
                                            validate: (value) => value === watch("password") || "Passwords do not match"
                                        })} placeholder="Confirm password"/>
                                        {
                                            errors.rePassword && <span className="error">{errors.rePassword.message}</span>
                                        }
                                    </Box>
                                    <Box className="input-box">
                                        <input type="text" id="bloodgroup" name="bloodgroup" ref={register({ required: "Blood Group is required"})} placeholder="Blood Group"/>
                                        {
                                            errors.bloodgroup && <span className="error">{errors.bloodgroup.message}</span>
                                        }
                                    </Box>
                                    <Box className="input-box">
                                        <input type="text" id="religion" name="religion" ref={register({ required: "Religion is required"})} placeholder="Religion"/>
                                        {
                                            errors.religion && <span className="error">{errors.religion.message}</span>
                                        }
                                    </Box>
                                    <Box className="input-box">
                                        <input type="text" id="fulladdress" name="fulladdress" ref={register({ required: "Full address is required"})} placeholder="Full address"/>
                                        {
                                            errors.fulladdress && <span className="error">{errors.fulladdress.message}</span>
                                        }
                                    </Box>
                                    <Box className="input-box">
                                        <input type="text" id="weight" name="weight" ref={register({ required: "Weight is required"})} placeholder="Your weight"/>
                                        {
                                            errors.weight && <span className="error">{errors.weight.message}</span>
                                        }
                                    </Box>
                                    <Box className="input-box">
                                        <input type="date" id="date" name="date" ref={register({ required: "Date of Birth is required"})} placeholder="Date of Birth"/>
                                        {
                                            errors.date && <span className="error">{errors.date.message}</span>
                                        }
                                    </Box>







                                    
                                    <input type="submit" value="Create an account" />
                                </form>

                                <p className="already-account">Already have an account? <span onClick={props.handleRegister} className="toogle">Login</span></p> 
                            </Box> 
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default Register;