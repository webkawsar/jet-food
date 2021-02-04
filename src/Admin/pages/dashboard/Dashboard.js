import React from "react";
import { Grid } from "@material-ui/core";



// styles
import useStyles from "./styles";


// components
import PageTitle from "../../components/PageTitle";


export default function Dashboard(props) {



  const classes = useStyles();
  return (
        <>
          <PageTitle title="Dashboard" />
          <Grid container spacing={4}>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <h2>Welcome to Dashboard</h2>
            </Grid>
          </Grid>

        </>
  );
}
