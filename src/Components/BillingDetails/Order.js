import { Box, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';


const useStyles = makeStyles({
    root: {
        
    },
    paper: {
        backgroundColor: "#f5f6fa",
        padding: "40px"
    }




})

const Order = () => {


    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Paper className={classes.paper}>
                <Box>
                    <Grid container>
                        <Grid item md={12}>
                            <Box display="flex" justifyContent="space-between">
                                <h4>Product</h4>
                                <h4>Subtotal</h4>
                            </Box>

                            <Box display="flex" justifyContent="space-between">
                                <h5 style={{fontWeight: "normal", margin: "0"}}> <strong>Maintain</strong> X <strong> 1 </strong> X <strong> Month </strong> X <strong> 5 </strong></h5>
                                <h5 style={{margin: "0"}}>$ 100</h5>
                            </Box>
                            <hr/>

                            <Box display="flex" justifyContent="space-between">
                                <h4 style={{margin: "0"}}>Subtotal</h4>
                                <h4 style={{margin: "0"}}>$ 1000</h4>
                            </Box>
                            <hr/>

                            <Box display="flex" justifyContent="space-between">
                                <h4 style={{margin: "0"}}>Delivery</h4>
                                <h4 style={{margin: "0"}}>Rajnagar</h4>
                            </Box>
                            <hr/>

                            <Box display="flex" justifyContent="space-between">
                                <h4 style={{margin: "0"}}>New Member Sign Up Fee</h4>
                                <h4 style={{margin: "0"}}>$6.99</h4>
                            </Box>
                            <hr/>

                            <Box display="flex" justifyContent="space-between">
                                <h4 style={{margin: "0"}}>Tax</h4>
                                <h4 style={{margin: "0"}}>$6.99</h4>
                            </Box>
                            <hr/>

                            <Box display="flex" justifyContent="space-between">
                                <h4 style={{margin: "0"}}>Total</h4>
                                <h4 style={{margin: "0"}}>$6.99</h4>
                            </Box>
                            <hr/>

                            <Box display="flex" justifyContent="space-between">
                                <h4 style={{margin: "0"}}>Recurring total</h4>
                                <h4 style={{margin: "0"}}>$467.59 / month</h4>
                            </Box>
                            <hr/>

                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Box>
    );
};

export default Order;