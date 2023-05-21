import Page from 'src/component/Page'
import React from 'react'
import { Box, Container, Grid, Typography, makeStyles } from '@material-ui/core'
import { motion } from 'framer-motion'
import { AnimationOnScroll } from 'react-animation-on-scroll'
const useStyles = makeStyles((theme) => ({
  titleBox: {
    textAlign: 'center',
    color: '#000',
    padding: '20px',
    marginTop: '40px',
  },
  detailBox: {
    color: '#000',
  },
}))
export default function Info() {
  const classes = useStyles()

  return (
    <Page title="CA Firm">
      <Container>
        <Box className={classes.titleBox}>
          <Typography variant="h3">CHARTERED ACCOUNTANT (CA) FIRM</Typography>
        </Box>
        <Grid container spacing={3} alignItems="center">
          <Grid item lg={6} sm={6} xs={12}>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <Box>
                <img src="/images/bg1.jpg" alt="" width="100%" />
              </Box>
            </AnimationOnScroll>
          </Grid>
          <Grid item lg={6} sm={6} xs={12}>
            <AnimationOnScroll animateIn="animate__fadeInRight">
              <Box className={classes.detailBox}>
                <Typography variant="h5">
                  We provide an all-inclusive agglomeration of specially
                  designed and multidisciplinary expert services that meet the
                  requirements of every single need of our clients. Our company
                  of Chartered Accountants constitutes a group of expert skill
                  set that is equipped to provide excellent monetary solutions
                  and counsel. We are defined by our drive to make a difference.
                  Good isn’t the best. We aim for the skies at whatever we do –
                  from helping businesses understand their true potential to
                  magnifying their profits.
                  <br />
                  <br />
                  We provide an all-inclusive agglomeration of specially
                  designed and multidisciplinary expert services that meet the
                  requirements of every single need of our clients. Our company
                  of Chartered Accountants constitutes a group of expert skill
                  set that is equipped to provide excellent monetary solutions
                  and counsel. We are defined by our drive to make a difference.
                  Good isn’t the best. We aim for the skies at whatever we do –
                  from helping businesses understand their true potential to
                  magnifying their profits.
                </Typography>
              </Box>
            </AnimationOnScroll>
          </Grid>
        </Grid>
      </Container>
    </Page>
  )
}
