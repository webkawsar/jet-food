import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
      
    },
    media: {
      height: 180,
    },



  });

const SingleProduct = (props) => {
    const { id, name, prodDetails, img } = props.product;
    const { location } = useHistory();
    const history = useHistory();


    
    const handleClick = () => {

        history.push(`/prod/${id}`);
    }
    


    const classes = useStyles();
    return (
            <>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card className={classes.root}>
                        <CardActionArea onClick={handleClick}>
                            <CardMedia
                                className={classes.media}
                                image={img}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {name}
                            </Typography>

                            {
                                location.pathname === "/" || location.pathname === "/home" ? 

                                <Typography variant="body2" color="textSecondary" component="p">
                                    {prodDetails}
                                </Typography>
                                :
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {""}
                                </Typography>
                            }

                            </CardContent>
                        </CardActionArea>
                        {
                            location.pathname === "/" || location.pathname === "/home" ?
                            
                            <CardActions>
                                <Link to={`/prod/${id}`}>Details</Link>
                            </CardActions>
                            :
                            ""
                        }
                    </Card>
                </Grid>
            </>
    );
};

export default SingleProduct;