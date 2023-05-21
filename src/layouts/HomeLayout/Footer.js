import React from 'react'
import { Box, Container, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  footerSection: {
    overflow: 'hidden',
    background: '#009b9d',
    position: 'relative',
    padding: '4px 0px',
    zIndex: '2',
  },
  FooterBotom: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

export default function Liquidity() {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.footerSection}>
        <Container maxWidth="lg">
          <Box
            className={classes.FooterBotom}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="body1" className="bottomText">
                ©Nayodeep Consultancy Services 2023. All Rights Reserved
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}
