import { Box, Container, Grid, makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Order from './Order';



const useStyles = makeStyles({
    root: {
        padding: "100px 0"
    },
    helperText: {
        color: "red"
    }
})


const BillingDetails = () => {



    const [billingInfo, setBillingInfo] = useState({})
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {

        setBillingInfo(data)

    }

    

    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Container>
                <Grid container spacing={5}>
                    <Grid item md={6}>
                        <h3>Billing Details</h3>
                        <Box style={{textAlign: "center"}}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <TextField
                                    inputRef={register({
                                        required: "Company name is required",
                                    })}
                                    margin="normal"
                                    type="text"
                                    fullWidth
                                    name="company"
                                    id="company"
                                    variant="outlined"
                                    label="Company name (optional)"
                                    // className={classes.input}
                                    FormHelperTextProps={{
                                        className: classes.helperText,
                                    }}
                                    helperText={errors.firstName && errors.firstName.message}
                                />

                                <TextField
                                    inputRef={register({
                                        required: "Street address is required",
                                    })}
                                    margin="normal"
                                    type="text"
                                    fullWidth
                                    name="lastName"
                                    id="lastName"
                                    variant="outlined"
                                    label="Street address"
                                    // className={classes.input}
                                    FormHelperTextProps={{
                                        className: classes.helperText,
                                    }}
                                    helperText={errors.lastName && errors.lastName.message}
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






                                {/* <button style={{marginTop: "50px"}} className="mainButton" type="submit">Next</button> */}
                            </form>
                        </Box>
                    </Grid>
                    <Grid md={6}>
                        <h3>Your Order</h3>
                        <Order />
                    </Grid>
                    <Grid md={6}>
                        <h3>Delivery Start Date</h3>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default BillingDetails;