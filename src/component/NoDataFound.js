import { Box, Typography } from "@material-ui/core";
import React from "react";

export default function NoDataFound() {
  return (
    <Box align="center" mt={1} width="100%">
      <Typography
        variant="body1"
        style={{ color: "#E73725", fontSize: "14px" }}
      >
        No data found !
      </Typography>
    </Box>
  );
}
