import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import LogoLoader from "./LogoLoader";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    backgroundColor: theme.palette.background.default,
    display: "flex",
    height: "100%",
    justifyContent: "center",
    position: "fixed",
    width: "100%",
    zIndex: 2000,
  },


}));

export default function PageLoading() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <LogoLoader />
    </div>
  );
}
