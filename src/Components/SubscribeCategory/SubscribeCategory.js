import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    root: {


   
    },
    activeBox: {
        backgroundColor: "#EAEAEA",
        cursor: "pointer",
        borderRadius: "10px"
    },
    box: {
        padding: "20px",

        "&:hover": {
            backgroundColor: "#EAEAEA",
            cursor: "pointer",
            borderRadius: "10px"
        }
    }
    






  });

const SubscribeCategory = () => {

    const classes = useStyles();
    return (
        <>
            <Grid item xs={4} sm={3} md={2} >
                <Box className={classes.box}>
                    <Box style={{textAlign: "center"}}>
                        <img style={{borderRadius: "6px", maxHeight: "120px"}} src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80" alt=""/>
                    </Box>
                    <Box>
                        <h5 style={{textAlign: "center", margin: "12px 0 0 0"}}>Name</h5>
                    </Box>
                </Box>
            </Grid>
        </>
    );
};

export default SubscribeCategory;