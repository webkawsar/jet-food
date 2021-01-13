import { Box, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Link } from 'react-router-dom';



const useStyles = makeStyles({
    root: {
        padding: "50px 0 100px"
    },
    email: {
        width: "400px",

    }
})


const InfoSubscription = () => {


    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Box>
                <Box textAlign="center">
                    <h1 style={{margin: "0"}}>What Are You Waiting For?</h1>
                    <p>Get $15 off, and receive the latest recipes by <Link to="/subscribe" className="highlighter">subscribing now!</Link></p>
                </Box>
                <Box textAlign="center">
                    <form>
                        <TextField 
                            type="email"
                            margin="normal"
                            id="email"
                            
                            name="email"
                            label="Email"
                            variant="outlined"
                            className={classes.email}
                        />
                        <br/>
                        <button className="mainButton">Sign Up</button>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};

export default InfoSubscription;