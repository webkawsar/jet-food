import React from "react";
import { Grid } from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle";



export default function TypographyPage() {


  var classes = useStyles();
  return (
    <>
      <PageTitle title="Typography" />
      <Grid container spacing={4}>
        
      </Grid>
    </>
  );
}
