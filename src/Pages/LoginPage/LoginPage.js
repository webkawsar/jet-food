import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Header from '../../Components/Header/Header';
import Login from '../../Components/Login/Login';


const useStyles = makeStyles({
    root: {
        backgroundImage: "linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2019/08/cover-image-2-4.jpg')",
        backgroundRepeat: "no-repeat",
        position: "absolute",
        left: "0",
        top: "0",
        right: "0",
        bottom: "0",
        backgroundSize: "100% 100%",
        padding: "0 0 100px",
        height: "100%"

    }
})

const LoginPage = () => {
    
    const classes = useStyles();
    return (
        <div className={`${classes.root}`}>
            <Header />
            <Container>
                <Login />
            </Container>
        </div>
    );
};

export default LoginPage;