import { Box, Container, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import BillingDetails from '../BillingDetails/BillingDetails';



const useStyles = makeStyles({
    helperText: {
        color: "red"
    }
})


const ContactInfo = () => {

    const [contactInfo, setContactInfo] = useState({})
    const [billingInfo, setBillingInfo] = useState(false)
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {

        setContactInfo(data)
        setBillingInfo(true)
    }

    if(contactInfo){
        console.log(contactInfo);
    }

    const classes = useStyles();
    return (
        <div>
            <Container>
                <h3>Contact Iinfo</h3>
                <Box style={{textAlign: "center"}}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            inputRef={register({
                                required: "First name is required",
                            })}
                            margin="normal"
                            type="text"
                            fullWidth
                            name="firstName"
                            id="firstName"
                            variant="outlined"
                            label="First Name"
                            // className={classes.input}
                            FormHelperTextProps={{
                                className: classes.helperText,
                            }}
                            helperText={errors.firstName && errors.firstName.message}
                        />

                        <TextField
                            inputRef={register({
                                required: "Last nameis required",
                            })}
                            margin="normal"
                            type="text"
                            fullWidth
                            name="lastName"
                            id="lastName"
                            variant="outlined"
                            label="Last Name"
                            // className={classes.input}
                            FormHelperTextProps={{
                                className: classes.helperText,
                            }}
                            helperText={errors.lastName && errors.lastName.message}
                        />


                        <TextField
                            inputRef={register({
                                required: "Email is required",
                            })}
                            margin="normal"
                            type="email"
                            fullWidth
                            name="email"
                            id="email"
                            variant="outlined"
                            label="Email Address"
                            // className={classes.input}
                            FormHelperTextProps={{
                                className: classes.helperText,
                            }}
                            helperText={errors.email && errors.email.message}
                        />

                        <TextField
                            inputRef={register({
                                required: "Phone number is required",
                            })}
                            margin="normal"
                            type="number"
                            fullWidth
                            name="number"
                            id="number"
                            variant="outlined"
                            label="Phone"
                            // className={classes.input}
                            FormHelperTextProps={{
                                className: classes.helperText,
                            }}
                            helperText={errors.number && errors.number.message}
                        />


                        <button style={{marginTop: "50px"}} className="mainButton" type="submit">Next</button>
                    </form>
                </Box>

                {
                    billingInfo && <BillingDetails />
                }
            </Container>
        </div>
    );
};

export default ContactInfo;