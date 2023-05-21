import Page from 'src/component/Page'
import React from 'react'
import {
  Container,
  makeStyles,
  Typography,
  Box,
  Grid,
  Paper,
} from '@material-ui/core'
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
  bannerBox: {
    background: 'url(/images/bg5.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '500px',
    position: 'relative',
  },
  mainCardContainer: {
    padding: '20px',
    borderRadius: '12px',
    color: '#000',
    background: '#fff',
    cursor: 'pointer',
  },
}))
const dataMap = [
  {
    icon: '',
    name: 'Automotive',
  },
  {
    icon: '',
    name: 'Banking & Finance',
  },
  {
    icon: '',
    name: 'Capital Good & Engineering',
  },
  {
    icon: '',
    name: 'Chemicals',
  },
  {
    icon: '',
    name: 'Enegry',
  },
  {
    icon: '',
    name: 'Food & Processing',
  },
  {
    icon: '',
    name: 'Healthcare',
  },
  {
    icon: '',
    name: 'Hospitality',
  },
  {
    icon: '',
    name: 'Information Technology',
  },
  {
    icon: '',
    name: 'Logistics',
  },
  {
    icon: '',
    name: 'Media',
  },
  {
    icon: '',
    name: 'Non-Profit Organizations',
  },
  {
    icon: '',
    name: 'Oil & Gas',
  },
  {
    icon: '',
    name: 'Pharmaceuticals',
  },
  {
    icon: '',
    name: 'Real Estate',
  },
  {
    icon: '',
    name: 'Retail',
  },
  {
    icon: '',
    name: 'Trading',
  },
  {
    icon: '',
    name: 'Transportation',
  },
]
export default function Industries() {
  const classes = useStyles()
  return (
    <Page title="Industries">
      <Box className={classes.bannerBox}>
        <Container>
          <Box className={classes.titleBox}>
            <Typography variant="h3">INDUSTRIES</Typography>
          </Box>
          <Grid container spacing={3}>
            {dataMap &&
              dataMap.map((data, i) => {
                return (
                  <Grid item lg={3} sm={3} xs={12} md={3}>
                    <AnimationOnScroll animateIn="animate__fadeInLeft">
                      <IndustriesCard classes={classes} data={data} index={i} />
                    </AnimationOnScroll>
                  </Grid>
                )
              })}
          </Grid>
        </Container>
      </Box>
    </Page>
  )
}

const IndustriesCard = ({ data, index, classes }) => {
  return (
    <Paper key={`ind${index}`} className={classes.mainCardContainer}>
      <Typography variant="h5">{data.name}</Typography>
    </Paper>
  )
}
