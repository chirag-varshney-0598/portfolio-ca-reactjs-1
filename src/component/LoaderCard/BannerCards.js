import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import Skeleton from "react-loading-skeleton";
const useStyle = makeStyles((theme) => ({}));
export default function BannerCards({ data }) {
  const classes = useStyle();
  return (
    <Box className={classes.paper} style={{ padding: "8px" }}>
      <Box style={{ position: "relative" }}>
        <Skeleton height={data} />
      </Box>
      {/* <Box className={classes.btm}>
        <Skeleton height={30} />
        <Skeleton height={30} />
      </Box> */}
    </Box>
  );
}
