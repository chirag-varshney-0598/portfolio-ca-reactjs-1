import React, { useState } from "react";
import {
  Box,
  Divider,
  Grid,
  makeStyles,
  Typography,
  FormControl,
  MenuItem,
  Select,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainHeading: {
    "& h3": {
      color: theme.palette.primary.main,
      fontSize: "25px",
      // padding: "15px 0px",
      position: "relative",
      display: "inline-block",
      
      
      [theme.breakpoints.down("xs")]: {
        fontSize: "20px",
      },
    },
  },

}));

export default function Heading({ type }) {
  const classes = useStyles();
  const [select, setSelect] = useState("10");

  return (
    <Box className={classes.mainHeading}>
      <Typography variant="h3">{type}</Typography>
      <Box className={classes.divider}></Box>
    </Box>
  );
}
