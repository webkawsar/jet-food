import { Box, Grid, IconButton, makeStyles, TextField } from '@material-ui/core';
import { Cancel } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    root: {

    },
    link: {
        fontSize: "23px",
        color: "Black"

    },
    text: {
        margin: "0",
        fontWeight: "normal"
    }



})

const CartItem = () => {

    const classes = useStyles();
    return (
        <>

            <Grid container spacing={3}>
                <Grid item md={6}>

                    <Box display="flex" alignItems="center">
                        <Box mr={2}>
                            <IconButton>
                                <Cancel></Cancel>
                            </IconButton>
                        </Box>
                        <Box mr={2}>
                            <Link to="/product/id">
                                <img style={{width: "80px"}} src="https://i1.wp.com/jetfuelmeals.com/wp-content/uploads/2019/08/fresh.png?fit=180%2C263&ssl=1" alt=""/>
                            </Link>
                        </Box>
                        
                        <Box>
                            <Link className={classes.link} to="/product/id">Maintain</Link>
                            <h5 className={classes.text}>Period: <strong>Weekly</strong></h5>
                            <h5 className={classes.text}>Meals per day: <strong>5</strong></h5>
                            <h5 className={classes.text}>Meals: <strong>Breakfast, Lunch, Lunch, Dinner, Dinner</strong></h5>
                        </Box>
                    </Box>

                </Grid>
                <Grid item md={2}>
                    <Box display="flex" alignItems="center">
                        <span>$170.00 / week</span>
                    </Box>
                </Grid>
                <Grid item md={2}>
                    <TextField
                        type="number"
                        variant="outlined"
                        defaultValue="1"
                        id="qty"
                        name="qty"
                        required
                        size="small"
                        helperText=""
                    />
                </Grid>
                <Grid item md={2}>
                    <span>$170.00 / week</span>
                </Grid>
            </Grid>
        </>
    );
};

export default CartItem;