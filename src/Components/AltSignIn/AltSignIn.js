import React, { useContext } from 'react';
import "./AltSignIn.css";
import { Box, Container, Grid } from '@material-ui/core';
import faIcon from "../../Assets/Icon/fb.png";
import googleIcon from "../../Assets/Icon/google.png";
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { facebookSignIn, initializeFirebaseFramework, googleSignIn } from '../../Firebase/FirebaseManager';



const AltSignIn = () => {

    initializeFirebaseFramework();

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleFacebookSignIn = () => {
        
        facebookSignIn()
        .then(response => {
            
            if(response.success && response.email){

                const facebookSignInUser = {...loggedInUser, ...response};
                setLoggedInUser(facebookSignInUser);
                history.replace(from);
            }
            else{
        
                const facebookSignInUserError = {...loggedInUser, ...response};
                setLoggedInUser(facebookSignInUserError);            
            }

        })

    }

    const handleGoogleSignIn = () => {
        
        googleSignIn()
        .then(response => {

            if(response.success && response.email){

                const googleSignInUser = {...loggedInUser, ...response};
                setLoggedInUser(googleSignInUser);
                history.replace(from);
                
              }
              else{
        
                const googleSignInError = {...loggedInUser, ...response};
                setLoggedInUser(googleSignInError);  
            }

        })

    }



    return (
        
        <Container>
            <Box className="alternate-signin-system">
                <Grid container>
                    <Grid xs={12} sm={12} item md={3}>
                        {""}
                    </Grid>
                    <Grid xs={12} sm={12} item md={6}>
                        <Box className="or-section">
                            <hr/> Or <hr/>
                        </Box>
                        <Box onClick={handleFacebookSignIn} className="facebook">
                            <img className="icon" src={faIcon} alt=""/>
                            <p>Continue with Facebook</p>
                        </Box>
                        <Box onClick={handleGoogleSignIn} className="google">
                            <img className="icon" src={googleIcon} alt=""/>
                            <p>Continue with Google</p>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AltSignIn;