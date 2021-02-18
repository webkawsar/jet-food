import { Box, Container, Grid } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import "./Register.css";



const Register = () => {

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {

        axios.post("/auth/register", data)
        .then(response  => {

            // localStorage.setItem("token", response.data.token);
            // axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;
        })
        .catch(error => console.log(error.response.data.error))

    }

    

    
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
                                        <input type="text" id="firstname" name="firstname" ref={register({ required: "First name is required"})} placeholder="First name"/>
                                        {
                                            errors.firstname && <span className="error">{errors.firstname.message}</span>
                                        }
                                    </Box>
                                    <Box className="input-box">
                                        <input type="text" id="lastname" name="lastname" ref={register({ required: "Last name is required"})} placeholder="Last name"/>
                                        {
                                            errors.lastname && <span className="error">{errors.lastname.message}</span>
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
                                        <input type="password" name="confirmpassword" ref={register({
                                            required: "Confirm password is required",
                                            validate: (value) => value === watch("password") || "Passwords do not match"
                                        })} placeholder="Confirm password"/>
                                        {
                                            errors.confirmpassword && <span className="error">{errors.confirmpassword.message}</span>
                                        }
                                    </Box>

                                    <Box className="input-box">
                                        <input type="text" id="phone" name="phone" ref={register({ required: "Phone number is required"})} placeholder="Phone number"/>
                                        {
                                            errors.phone && <span className="error">{errors.phone.message}</span>
                                        }
                                    </Box>
                                    
                                    
                                    {/* <Box className="input-box">
                                        <input type="text" id="fulladdress" name="fulladdress" ref={register({ required: "Full address is required"})} placeholder="Full address"/>
                                        {
                                            errors.fulladdress && <span className="error">{errors.fulladdress.message}</span>
                                        }
                                    </Box>
                                    
                                    <Box className="input-box">
                                        <input type="date" id="date" name="date" ref={register({ required: "Date of Birth is required"})} placeholder="Date of Birth"/>
                                        {
                                            errors.date && <span className="error">{errors.date.message}</span>
                                        }
                                    </Box> */}

                                    <input type="submit" value="Create an account" />
                                </form>

                                <p className="already-account">Already have an account? <Link to="/login" className="toogle">Login</Link></p> 
                            </Box> 
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default Register;