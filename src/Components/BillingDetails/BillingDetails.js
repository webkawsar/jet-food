import { Box, Container, Grid, makeStyles, Paper, TextField } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';



const useStyles = makeStyles({
    root: {
        padding: "100px 0"
    },
    helperText: {
        color: "red"
    },
    paper: {
        backgroundColor: "#f5f6fa",
        padding: "40px"
    }




})


const BillingDetails = () => {



    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {

        const billingData = data;
        const newUserData = {...loggedInUser.userData, billingData}
        setLoggedInUser({...loggedInUser, userData: newUserData})

    }

   

    const [newMemberSignUpFee, setNewMemberSignUpFee] = useState(6)
    const [items, setItems] = useState([]);
    const [tax, setTax] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {

        
        const total = items.reduce((total, item) => (item.price * item.qty) + total, 0)
        const payableTax = total * 0.15;
        setTax(Math.round(payableTax))
        setTotal(total);
        setItems(loggedInUser.orders);

    }, [loggedInUser, items])

    console.log(loggedInUser);

    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={5}>
                        <Grid item md={6}>
                            <h3>Billing Details</h3>
                            <Box style={{textAlign: "center"}}>
                                
                                    <TextField
                                        inputRef={register({
                                            required: "Street address is required",
                                        })}
                                        margin="normal"
                                        type="text"
                                        fullWidth
                                        name="streetAddress"
                                        id="streetAddress"
                                        variant="outlined"
                                        label="Street address"
                                        // className={classes.input}
                                        FormHelperTextProps={{
                                            className: classes.helperText,
                                        }}
                                        helperText={errors.streetAddress && errors.streetAddress.message}
                                    />


                                    <TextField
                                        inputRef={register({
                                            required: "Town / City is required",
                                        })}
                                        margin="normal"
                                        type="text"
                                        fullWidth
                                        name="town"
                                        id="town"
                                        variant="outlined"
                                        label="Town / City"
                                        // className={classes.input}
                                        FormHelperTextProps={{
                                            className: classes.helperText,
                                        }}
                                        helperText={errors.town && errors.town.message}
                                    />

                                    <TextField
                                        inputRef={register({
                                            required: "State  is required",
                                        })}
                                        margin="normal"
                                        type="text"
                                        fullWidth
                                        name="state"
                                        id="state"
                                        variant="outlined"
                                        label="State "
                                        // className={classes.input}
                                        FormHelperTextProps={{
                                            className: classes.helperText,
                                        }}
                                        helperText={errors.state && errors.state.message}
                                    />


                                    <TextField
                                        inputRef={register({
                                            required: "Zipcode  is required",
                                        })}
                                        margin="normal"
                                        type="text"
                                        fullWidth
                                        name="zipcode"
                                        id="zipcode"
                                        variant="outlined"
                                        label="Zipcode"
                                        // className={classes.input}
                                        FormHelperTextProps={{
                                            className: classes.helperText,
                                        }}
                                        helperText={errors.zipcode && errors.zipcode.message}
                                    />

                            </Box>
                        </Grid>
                        <Grid item md={6}>
                            <h3>Your Order</h3>
                            <Box>
                                <Paper className={classes.paper}>
                                    <Box>
                                        <Grid container>
                                            <Grid item xs={12} sm={12} md={12}>
                                                <Box display="flex" justifyContent="space-between">
                                                    <h4>Product</h4>
                                                    <h4>Subtotal</h4>
                                                </Box>

                                                {
                                                    items.map(item => <Box key={item.id}>
                                                                        <Box display="flex" justifyContent="space-between">
                                                                            <h5 style={{fontWeight: "normal", margin: "0"}}> <strong>{item.category}</strong> X <strong> {item.qty} </strong> X <strong> {item.mealsTime} </strong> X <strong> {item.days} days</strong></h5>
                                                                            <h5 style={{margin: "0", fontWeight: "normal"}}><strong>$ {(item.price * item.qty)}</strong> / <strong>{item.period}</strong></h5>
                                                                        </Box>
                                                                        <hr/>

                                                                        </Box>)
                                                }

                                                <Box display="flex" justifyContent="space-between">
                                                    <h4 style={{margin: "0"}}>Subtotal</h4>
                                                    <h4 style={{margin: "0"}}>$ {total}</h4>
                                                </Box>
                                                <hr/>

                                                <Box display="flex" justifyContent="space-between">
                                                    <h4 style={{margin: "0"}}>Delivery</h4>
                                                    <h4 style={{margin: "0"}}>No delivery option available</h4>
                                                </Box>
                                                <hr/>

                                                <Box display="flex" justifyContent="space-between">
                                                    <h4 style={{margin: "0"}}>New Member Sign Up Fee</h4>
                                                    <h4 style={{margin: "0"}}>${newMemberSignUpFee}</h4>
                                                </Box>
                                                <hr/>

                                                <Box display="flex" justifyContent="space-between">
                                                    <h4 style={{margin: "0"}}>Tax</h4>
                                                    <h4 style={{margin: "0"}}>${tax}</h4>
                                                </Box>
                                                <hr/>

                                                <Box display="flex" justifyContent="space-between">
                                                    <h4 style={{margin: "0"}}>Total</h4>
                                                    <h4 style={{margin: "0"}}>${total + newMemberSignUpFee + tax}</h4>
                                                </Box>
                                                <hr/>

                                                <Box display="flex" justifyContent="space-between">
                                                    <h4 style={{margin: "0"}}>Recurring total</h4>
                                                    <h4 style={{margin: "0"}}>${total + tax}</h4>
                                                </Box>
                                                <hr/>
                                                
                                                <h4 style={{margin: "0"}}>Pay with your credit card.</h4>
                                                <Box style={{padding: "20px"}}>
                                                    <TextField
                                                            inputRef={register({
                                                                required: "Card number is required",
                                                            })}
                                                            margin="normal"
                                                            type="number"
                                                            fullWidth
                                                            name="cardnumber"
                                                            id="cardnumber"
                                                            variant="filled"
                                                            label="card number"
                                                            // className={classes.input}
                                                            FormHelperTextProps={{
                                                                className: classes.helperText,
                                                            }}
                                                            helperText={errors.cardnumber && errors.cardnumber.message}
                                                    />
                                                    <TextField
                                                            inputRef={register({
                                                                required: "Expiry Date is required",
                                                            })}
                                                            margin="normal"
                                                            type="number"
                                                            fullWidth
                                                            name="expiredate"
                                                            id="expiredate"
                                                            variant="filled"
                                                            label="mm / yy"
                                                            // className={classes.input}
                                                            FormHelperTextProps={{
                                                                className: classes.helperText,
                                                            }}
                                                            helperText={errors.expiredate && errors.expiredate.message}
                                                    />


                                                    <TextField
                                                            inputRef={register({
                                                                required: "Card Code (CVC) is required",
                                                            })}
                                                            margin="normal"
                                                            type="number"
                                                            fullWidth
                                                            name="cvc"
                                                            id="cvc"
                                                            variant="filled"
                                                            label="CVC"
                                                            // className={classes.input}
                                                            FormHelperTextProps={{
                                                                className: classes.helperText,
                                                            }}
                                                            helperText={errors.cvc && errors.cvc.message}
                                                    />
                                                
                                                </Box>
                                                <hr/>


                                                <button style={{marginTop: "50px"}} className="mainButton" type="submit">Sign Up Now</button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Paper>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </Box>
    );
};

export default BillingDetails;