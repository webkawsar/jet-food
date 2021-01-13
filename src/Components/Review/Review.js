import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';



const useStyles = makeStyles({
    root: {
        padding: "50px 0 100px",
        backgroundColor: "#FFF6F4"
    }
})

const Review = () => {



    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box textAlign="center">
                <h1 style={{margin: "0"}}>Jet Fuel Meals is the #1 Rated</h1>
                <p>Join thousands of people who found their perfect plan to stay healthy! See all our verified reviews.</p>
            </Box>
        </Box>
    );
};

export default Review;