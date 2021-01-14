import { Box, Container, Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import fakeData from '../../FakeData/FakeData';
import CartHeader from '../CartHeader/CartHeader';
import CartItem from '../CartItem/CartItem';
import Header from '../Header/Header';



const MainCart = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [cartItems, setCartItems] = useState([]);
    const [items, setItems] = useState(true)

 


    useEffect(() => {

        if(loggedInUser.orders.length){

            setCartItems(loggedInUser.orders)
            setItems(false)
        } else {
            setItems(true)
        }

    }, [loggedInUser])

    


    return (
        <Container>
            <Box>
                <Header />
                <CartHeader></CartHeader>
            </Box>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={12} md={12}>
                    <Box display="flex" justifyContent="center">
                        <Link className="mainButton" to="/subscribe">Add Another Meal Plan</Link>
                        <Link className="mainButton" to="/subscribe">Add Kids Meal Plan</Link>
                        <Link className="mainButton" to="/subscribe">Proceed to Checkout</Link>
                    </Box>
                </Grid>
                <Grid item md={8}>
                    <Box style={{borderRight: "2px solid grey", paddingRight: "20px", marginRight: "20px"}}>
                        <Grid container>
                            <Grid item xs={3} sm={6} md={6}>
                                <h4 style={{textAlign: "center"}}>Product</h4>
                            </Grid>
                            <Grid item xs={3} sm={2} md={2}>
                                <h4 style={{textAlign: "center"}}>Price</h4>
                            </Grid>
                            <Grid item xs={3} sm={2} md={2}>
                                <h4 style={{textAlign: "center"}}>Quantity</h4>
                            </Grid>
                            <Grid item xs={3} sm={2} md={2}>
                                <h4 style={{textAlign: "center"}}>Subtotal</h4>
                            </Grid>
                            <Grid item md={12}>
                                {
                                    items ? <div style={{textAlign: "center", color: "red", fontSize: "30px"}}>Item not found your cart</div>
                                    :
                                    cartItems.map(item => <CartItem item={item} key={item.category}></CartItem>)
                                }
                                
                            </Grid>
                        </Grid>
                    </Box>
                    
                </Grid>
              
                <Grid item sm={12} md={4}  >
                    
                    <h1 style={{fontSize: "45px", textAlign: "center"}}>Cart Totals</h1>
                    <Grid container>
                        <Grid item xs={4} sm={4} md={4}>
                            <h5 style={{margin: "0"}}>Subtotal</h5>
                        </Grid>
                        <Grid item xs={8} sm={8} md={8}>
                            <span>$511.00</span>
                        </Grid>
                    </Grid>
                    <hr/>

                    <Grid container>
                        <Grid item xs={4} sm={4} md={4}>
                            <h5 style={{margin: "0"}}>Delivery</h5>
                        </Grid>
                        <Grid item xs={8} sm={8} md={8}>
                            <span>No Delivery options were found for FL.</span>
                        </Grid>
                    </Grid>
                    <hr/>

                    <Grid container>
                        <Grid item xs={4} sm={4} md={4}>
                            <h5 style={{margin: "0"}}>New Member <br/> Sign Up Fee</h5>
                        </Grid>
                        <Grid item xs={8} sm={8} md={8}>
                            <span>$6.99</span>
                        </Grid>
                    </Grid>
                    <hr/>

                    <Grid container>
                        <Grid item xs={4} sm={4} md={4}>
                            <h5 style={{margin: "0"}}>Tax</h5>
                        </Grid>
                        <Grid item xs={8} sm={8} md={8}>
                            <span>$35.77</span>
                        </Grid>
                    </Grid>
                    <hr/>

                    <Grid container>
                        <Grid item xs={4} sm={4} md={4}>
                            <h5 style={{margin: "0"}}>Total</h5>
                        </Grid>
                        <Grid item xs={8} sm={8} md={8}>
                            <span>$553.76</span>
                        </Grid>
                    </Grid>
                    <hr/>

                    <Grid container>
                        <Grid item xs={4} sm={4} md={4}>
                            <h5 style={{margin: "0"}}>Recurring total</h5>
                        </Grid>
                        <Grid item xs={8} sm={8} md={8}>
                            <span>$546.77 / week <br/> First renewal: January 19, 2021</span>
                        </Grid>
                    </Grid>
                    
                    <Link to="/checkout" style={{marginTop: "60px"}} className="mainButton">Proceed to Checkout</Link>

                </Grid>
            </Grid>
        </Container>
    );
};

export default MainCart;