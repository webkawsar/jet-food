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

const CartItem = (props) => {
    const {category, days, meals, mealsTime, period, price} = props.item
   
 



    const classes = useStyles();
    return (
        <>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={6}>
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
                            <Link className={classes.link} to="/product/id">{category}</Link>
                            <h5 className={classes.text}>Period: <strong>{period}</strong></h5>
                            <h5 className={classes.text}>Meals per day: <strong>{days}</strong></h5>
                            <h5 className={classes.text}>Meals: <strong>{mealsTime}</strong></h5>
                            <h5 className={classes.text}>Days per week: <strong>{meals}</strong></h5>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={2} md={2}>
                    <Box display="flex" alignItems="center">
                        <span>$ {price} / {period}</span>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={2} md={2}>
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
                <Grid item xs={4} sm={2} md={2}>
                    <span>$ {price} / {period}</span>
                </Grid>
            </Grid>
        </>
    );
};

export default CartItem;