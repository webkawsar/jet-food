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
    const { _id, title, description, image } = props.product;
    const { location } = useHistory();
    const history = useHistory();


    
    const handleClick = () => {

        history.push(`/prod/${_id}`);
    }
    

    
    const classes = useStyles();
    return (
            <>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card className={classes.root}>
                        <CardActionArea onClick={handleClick}>
                            <CardMedia
                                className={classes.media}
                                image={`http://localhost:5000/images/${image}`}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {title}
                            </Typography>

                            {
                                location.pathname === "/" || location.pathname === "/home" ? 

                                <Typography variant="body2" color="textSecondary" component="p">
                                    {description}
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
                                <Link to={`/prod/${_id}`}>Details</Link>
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