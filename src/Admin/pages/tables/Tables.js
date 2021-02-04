import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";



// components
import PageTitle from "../../components/PageTitle";

const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }


}))

export default function Tables() {
  const classes = useStyles();
  return (
    <>
      <PageTitle title="Tables" />
      
    </>
  );
}
