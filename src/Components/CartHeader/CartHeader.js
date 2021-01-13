import { Box, makeStyles } from '@material-ui/core';
import { AddShoppingCart, ChevronRight, ListAlt, Payment } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


const useStyles = makeStyles({
    link: {
        display: "block",
        textAlign: "center",
        color: "black",
        
    }
})

const CartHeader = () => {

    const [activeSub, setActiveSub] = useState(false);
    const [activeCart, setActiveCart] = useState(false);
    const [activeCheckout, setActiveCheckout] = useState(false);

    const { location } = useHistory();

    useEffect(() => {

        if(location.pathname === "/subscribe"){
            setActiveSub(true)
        }
        if(location.pathname === "/cart"){
            setActiveCart(true)
        }
        if(location.pathname === "/checkout"){
            setActiveCheckout(true)
        }


    }, [location])

   

    const classes = useStyles()
    return (
        <div>
            <Box py={5} display="flex" justifyContent="center" alignItems="center">

                {
                    activeSub ?

                    <Box mr={1}>
                        <Link style={{pointerEvents: "none"}} className={classes.link} to="/subscribe">
                            <ListAlt style={{fontSize: "50px"}}></ListAlt>
                            <h6 style={{margin: "0", fontSize: "16px"}}>Meal Plan</h6>
                        </Link>
                    </Box>
                    :
                    <Box mr={1}>
                        <Link className={classes.link} to="/subscribe">
                            <ListAlt style={{fontSize: "50px"}}></ListAlt>
                            <h6 style={{margin: "0", fontSize: "16px"}}>Meal Plan</h6>
                        </Link>
                    </Box>

                }

                <ChevronRight></ChevronRight>
                
                {
                    activeCart ?
                    <Box mx={1}>
                        <Link style={{pointerEvents: "none"}} className={classes.link} to="/cart">
                            <AddShoppingCart style={{fontSize: "50px"}}></AddShoppingCart>
                            <h6 style={{margin: "0", fontSize: "16px"}}>Cart</h6>
                        </Link>
                    </Box>
                    :
                    <Box mx={1}>
                        <Link className={classes.link} to="/cart">
                            <AddShoppingCart style={{fontSize: "50px"}}></AddShoppingCart>
                            <h6 style={{margin: "0", fontSize: "16px"}}>Cart</h6>
                        </Link>
                    </Box>
                }


                <ChevronRight></ChevronRight>

                {
                    activeCheckout ?
                    <Box ml={1}>
                        <Link style={{pointerEvents: "none"}} className={classes.link} to="/checkout">
                            <Payment style={{fontSize: "50px"}}></Payment>
                            <h6 style={{margin: "0", fontSize: "16px"}}>Checkout</h6>
                        </Link>
                    </Box>
                    :
                    <Box ml={1}>
                        <Link className={classes.link} to="/checkout">
                            <Payment style={{fontSize: "50px"}}></Payment>
                            <h6 style={{margin: "0", fontSize: "16px"}}>Checkout</h6>
                        </Link>
                    </Box>
                }
            </Box>
        </div>
    );
};

export default CartHeader;