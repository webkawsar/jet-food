import { Box, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const useStyles = makeStyles({
    root: {
        padding: "50px 0"
    },
    email: {
        width: "400px",
    }


})


const InfoSubscription = () => {
    const [email, setEmail] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleChange = (event) => {

        setEmail(event.target.value)
    }



    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Box>
                <Box textAlign="center">
                    <h1 style={{margin: "0"}}>What Are You Waiting For?</h1>
                    <p>Get $15 off, and receive the latest recipes by <Link to="/subscribe" className="highlighter">subscribing now!</Link></p>
                </Box>
                <Box textAlign="center">
                    <form onSubmit={handleSubmit}>

                        <TextField 
                            type="email"
                            margin="normal"
                            id="email"
                            // defaultValue={email}
                            // onChange={handleChange}
                            name="email"
                            label="Email"
                            variant="outlined"
                            className={classes.email}
                        />
                        
                        <br/>
                        <button type="submit" className="mainButton">Sign Up</button>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};

export default InfoSubscription;