import { Box, Container, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { memo, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import BillingDetails from '../BillingDetails/BillingDetails';



const useStyles = makeStyles({
    helperText: {
        color: "red"
    }
})


const ContactInfo = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [billingInfo, setBillingInfo] = useState(false)
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {

        setLoggedInUser({...loggedInUser, userData: {contactInfo: data}})
        setBillingInfo(true)
        window.scroll({top: 700, left: 0, behavior: 'smooth'})
    }

 
    const classes = useStyles();
    return (
        <>
            <Container>
                <h3>Contact Info</h3>
                <Box style={{textAlign: "center"}}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            inputRef={register({
                                required: "First name is required",
                            })}
                            margin="normal"
                            type="text"
                            fullWidth
                            name="firstname"
                            id="firstname"
                            variant="outlined"
                            label="First Name"
                            // className={classes.input}
                            FormHelperTextProps={{
                                className: classes.helperText,
                            }}
                            helperText={errors.firstname && errors.firstname.message}
                        />

                        <TextField
                            inputRef={register({
                                required: "Last nameis required",
                            })}
                            margin="normal"
                            type="text"
                            fullWidth
                            name="lastname"
                            id="lastname"
                            variant="outlined"
                            label="Last Name"
                            // className={classes.input}
                            FormHelperTextProps={{
                                className: classes.helperText,
                            }}
                            helperText={errors.lastname && errors.lastname.message}
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
                                required: "Password is required",
                            })}
                            margin="normal"
                            type="password"
                            fullWidth
                            name="password"
                            id="password"
                            variant="outlined"
                            label="Password"
                            // className={classes.input}
                            FormHelperTextProps={{
                                className: classes.helperText,
                            }}
                            helperText={errors.password && errors.password.message}
                        />

                        <TextField
                            inputRef={register({
                                required: "Phone number is required",
                            })}
                            margin="normal"
                            type="number"
                            fullWidth
                            name="phone"
                            id="phone"
                            variant="outlined"
                            label="Phone"
                            // className={classes.input}
                            FormHelperTextProps={{
                                className: classes.helperText,
                            }}
                            helperText={errors.phone && errors.phone.message}
                        />


                        <button style={{marginTop: "50px"}} className="mainButton" type="submit">Next</button>
                    </form>
                </Box>
                <Box>
                    {
                        billingInfo && <BillingDetails />
                    }
                </Box>
            </Container>
        </>
    );
};

export default memo(ContactInfo);