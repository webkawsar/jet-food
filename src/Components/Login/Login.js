import { Box, Container, Grid } from '@material-ui/core';
import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import "./Login.css";



const Login = () => {
    
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        

        axios.post("/auth/login", data)
        .then(response  =>{
            
            if(response.data.token){

                sessionStorage.setItem("token", response.data.token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.token}`;
                history.push("/profile");
            }
            
        })
        .catch(error => console.log(error.response.data.error))

    }



    return (

        <Container>
            <Box className="login-section">
                <Box className="login">
                    <Grid container>
                        <Grid item xs={12} sm={12} md={3}>
                            {""}
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
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
                                                value: 4,
                                                message: "Password containing at least 6 characters"
                                            },
                                            pattern: {
                                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/,
                                                message: "Password containing characters, number, upper and lowercase"
                                            }
                                        })} placeholder="Your password"/>
                                        {
                                            errors.password && <span className="error">{errors.password.message}</span>
                                        }
                                    </Box>
                                    
                                    <input type="submit" value="Log in"/>
                                </form>

                                <p className="create-account">Don't have an account? <Link to="/register" className="toogle">Create an account</Link>
                                </p> 
                            </Box> 
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;