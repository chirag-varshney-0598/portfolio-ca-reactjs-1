import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import Skeleton from "react-loading-skeleton";
const useStyle = makeStyles((theme) => ({}));
export default function LoaderPost() {
  const classes = useStyle();
  return (
    <Box className={classes.paper}>
      <Box style={{ position: "relative" }}>
        <Skeleton height={140} />
      </Box>
      <Box className={classes.btm}>
        {/* <Skeleton height={30} />
        <Skeleton height={30} /> */}
      </Box>
    </Box>
  );
}
