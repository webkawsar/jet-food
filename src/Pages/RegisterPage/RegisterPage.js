import { Container, makeStyles } from '@material-ui/core';
import React from 'react';
import Header from '../../Components/Header/Header';
import Register from '../../Components/Register/Register';






const useStyles = makeStyles({
    root: {
        backgroundImage: "linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2019/08/cover-image-2-4.jpg')",
        backgroundRepeat: "no-repeat",
        left: "0",
        top: "0",
        right: "0",
        bottom: "0",
        backgroundSize: "100% 100%",
        padding: "0 0 100px",
        

    }
})


const RegisterPage = () => {



    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
            <Container>
                <Register />
            </Container>
        </div>
    );
};

export default RegisterPage;