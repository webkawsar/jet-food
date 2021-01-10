import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
      maxWidth: 345
    },
    media: {
      height: 180,
    },
  });

const SingleCategory = (props) => {
    const { id, name, catDeatils, img } = props.category;

    const { location } = useHistory();


    let details = ""
    if(location.pathname === "/"){
        details = <Typography variant="body2" color="textSecondary" component="p">
                    {catDeatils}
                  </Typography>
    } 


    const classes = useStyles();
    return (
            <>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card className={classes.root}>
                        <CardActionArea>
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
                                details ? details : ""
                            }
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link to={`/foodcat/${id}`}>Details</Link>
                        </CardActions>
                    </Card>
                </Grid>
            </>
    );
};

export default SingleCategory;