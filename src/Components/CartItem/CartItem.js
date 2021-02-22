import { Box, Grid, IconButton, makeStyles, TextField } from '@material-ui/core';
import { Cancel } from '@material-ui/icons';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';


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
    const {id, title, days, meals, mealsTime, period, price, qty} = props.item;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    

    const handleChangeQty = (e) => {

        if(e.target.value > 0) {

            const orderIndex = loggedInUser.orders.findIndex(order => order.id === id )
            if(orderIndex !== -1){
                
                let newOrders = [...loggedInUser.orders]
                newOrders[orderIndex] = {...newOrders[orderIndex], qty: parseInt(e.target.value)}

                setLoggedInUser({...loggedInUser, orders: newOrders})
            }
        }
    }

    

    const classes = useStyles();
    return (
        <>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={6}>
                    <Box display="flex" alignItems="center">
                        <Box mr={2}>
                            <IconButton onClick={() => props.handleRemoveCartItem(props.index)}>
                                <Cancel></Cancel>
                            </IconButton>
                        </Box>
                        <Box mr={2}>
                            <Link to="/product/id">
                                <img style={{width: "80px"}} src="https://i1.wp.com/jetfuelmeals.com/wp-content/uploads/2019/08/fresh.png?fit=180%2C263&ssl=1" alt=""/>
                            </Link>
                        </Box>
                        <Box>
                            <Link className={classes.link} to="/product/id">{title}</Link>
                            <h5 className={classes.text}>Period: <strong>{period}</strong></h5>
                            <h5 className={classes.text}>Meals per day: <strong>{meals}</strong></h5>
                            <h5 className={classes.text}>Meals: <strong>{mealsTime}</strong></h5>
                            <h5 className={classes.text}>Days per week: <strong>{days}</strong></h5>
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
                        defaultValue={qty}
                        id="qty"
                        name="qty"
                        required
                        size="small"
                        helperText=""
                        onChange={handleChangeQty}
                    />
                </Grid>
                <Grid item xs={4} sm={2} md={2}>
                    <span>$ {(qty * price)} / {period}</span>
                </Grid>
            </Grid>
        </>
    );
};

export default CartItem;