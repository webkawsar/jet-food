import { Box, Grid, Paper, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';


const useStyles = makeStyles({
    root: {
        
    },
    paper: {
        backgroundColor: "#f5f6fa",
        padding: "40px"
    }




})

const Order = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newMemberSignUpFee, setNewMemberSignUpFee] = useState(6)
    const [items, setItems] = useState([]);
    const [tax, setTax] = useState(0)
    const [total, setTotal] = useState(0)

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {

      

    }

    useEffect(() => {

        
        const total = items.reduce((total, item) => item.price + total, 0)
        const payableTax = total * 0.15;
        setTax(Math.round(payableTax))
        setTotal(total);
        setItems(loggedInUser.orders);

    }, [loggedInUser, items])


    const [card, setCard] = useState({})
    const handleCard = (e) => {
        const value = {[e.target.name]: e.target.value}
        setCard({...card, [e.target.name]: e.target.value})
        setLoggedInUser({...loggedInUser, cardInfo: card})
    }

    console.log(loggedInUser);
    console.log(card);

    const classes = useStyles();
    return (
        <Box className={classes.root}>
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
                                                        <h5 style={{fontWeight: "normal", margin: "0"}}> <strong>{item.category}</strong> X <strong> 1 </strong> X <strong> {item.mealsTime} </strong> X <strong> {item.days} days</strong></h5>
                                                        <h5 style={{margin: "0", fontWeight: "normal"}}><strong>$ {item.price}</strong> / <strong>{item.period}</strong></h5>
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
                                <h4 style={{margin: "0"}}>${total + tax} / month</h4>
                            </Box>
                            <hr/>
                            
                            <h4 style={{margin: "0"}}>Pay with your credit card.</h4>
                            <Box style={{padding: "20px"}}>

                                <input type="number" name="cardnumber" onChange={handleCard} />
                                <input type="number" name="cardexpire" onChange={handleCard} />
                                <input type="number" name="cardcvc" onChange={handleCard} />


                                {/* <form onSubmit={handleSubmit(onSubmit)}>
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
                                </form> */}
                            </Box>
                            <hr/>




                            <button style={{marginTop: "50px"}} className="mainButton" type="submit">Sign Up Now</button>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Box>
    );
};

export default Order;