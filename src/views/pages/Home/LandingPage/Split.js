import Page from 'src/component/Page'
import {
  Container,
  Grid,
  Paper,
  Typography,
  makeStyles,
  Box,
} from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  bgClass: {
    background:
      'linear-gradient(153deg, rgba(204,204,204,1) 0%, rgba(255,255,255,1) 71%)',
    color: '#000',
    padding: '20px',
    minHeight: '252px',
  },
  mainContainer: {
    padding: '40px 0px',
  },
  heading: {
    marginBottom: '12px',
    '& h4': {
      fontSize: '22px',
    },
  },
}))

export default function Split() {
  const classes = useStyles()
  return (
    <Page title="Why choose us?">
      <Box className={classes.mainContainer}>
        {' '}
        <Container>
          <Grid container spacing={3}>
            <Grid item lg={4} sm={4} md={4} xs={12}>
              <Paper className={classes.bgClass}>
                <Box className={classes.detailSection}>
                  <Box className={classes.heading}>
                    <Typography variant="h4">Why choose us?</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h5">
                      We are team of experienced professionals who add value to
                      their business. Our clients can expect:
                      <ul>
                        <li>
                          A fresh and proactive approach to their accounts and
                          tax planning
                        </li>
                        <li>A friendly and personal service</li>
                        <li>Innovative solutions to requirements</li>
                      </ul>
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item lg={4} sm={4} md={4} xs={12}>
              <Paper className={classes.bgClass}>
                <Box className={classes.detailSection}>
                  <Box className={classes.heading}>
                    <Typography variant="h4">How we are different!</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h5">
                      Our firm of chartered accountants represents a coalition
                      of specialized skills that is geared to offer sound
                      financial solutions and advices. The organization is a
                      congregation of professionally qualified and experienced
                      persons who are committed to add value and optimize the
                      benefits accruing to clients.
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item lg={4} sm={4} md={4} xs={12}>
              <Paper className={classes.bgClass}>
                <Box className={classes.detailSection}>
                  <Box className={classes.heading}>
                    <Typography variant="h4">Who we are?</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h5">
                      We are prominent Chartered Accountants in India. We offer
                      services in New Delhi and other major cities in India,
                      like accounts outsourcing, auditing, company formation in
                      India, Business taxation, corporate compliance, starting
                      business in India, registration of foreign companies,
                      taxation of expatriates etc.
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Page>
  )
}
