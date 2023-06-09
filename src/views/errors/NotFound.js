import { Box, Typography, Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import Page from "src/component/Page";
export default function NotFound(props) {
  const history = useHistory();
  return (
    <Page title="page not found!">
      <Box pt={20} textAlign="center">
        <img
          src="images/nofound.png"
          style={{ maxWidth: "100%", width: "auto" }}
          alt="404"
        />
      </Box>
      <Box align="center" pt={2}>
        <Typography variant="h4">NO DATA FOUND!</Typography>
      </Box>
    </Page>
  );
}
