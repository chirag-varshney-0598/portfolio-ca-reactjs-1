import Page from 'src/component/Page'
import React from 'react'
import { Container, Grid, makeStyles, Typography, Box } from '@material-ui/core'
import { AnimationOnScroll } from 'react-animation-on-scroll'
const useStyles = makeStyles((theme) => ({
  productCardBox: {
    position: 'relative',
    zIndex: '1',
    '& figure': {
      width: 'initial',
      display: 'flex',
      overflow: 'hidden',
      alignItems: 'center',
    },
    '& img': {
      width: 'auto',
      maxWidth: '100%',
    },
    '& h6': {
      //   maxWidth: '115px',
      fontSize: '20px',
      color: '#000',
    },
  },
  titleBox: {
    textAlign: 'center',
    color: '#000',
    padding: '20px',
    marginTop: '40px',
  },
  mainBody: {
    paddingBottom: '40px',
  },
}))
const mapData = [
  {
    img: '/images/audit.jpg',
    title: 'AUDIT & ASSURANCE',
    description:
      'The capital markets & investors use the information provided by us. We know our onus of responsibility.',
  },
  {
    img: '/images/tax.jpg',
    title: 'TAX PLANNING',
    description:
      'Tax transparency & responsibility requires each of us to be accurate in the disclosure of statements.',
  },
  {
    img: '/images/advisory.jpg',
    title: 'ADVISORY',
    description:
      'We use our skills gained over a period to help your work to be smarter, quicker & stronger.',
  },
  {
    img: '/images/enterprise.jpg',
    title: 'ENTERPRISE',
    description:
      'Our passion for supporting you propels us forward. We salute your spirit of enterprise.',
  },
]
export default function Expertise() {
  const classes = useStyles()
  return (
    <Page title="Our Expertise">
      <Container className={classes.mainBody}>
        <Box className={classes.titleBox}>
          <Typography variant="h3">OUR EXPERTISE</Typography>
        </Box>
        <Grid container spacing={3}>
          {mapData &&
            mapData.map((data, i) => {
              return (
                <Grid item lg={3} xs={12} sm={3} md={3}>
                  <AnimationOnScroll animateIn="animate__fadeInRight">
                    <ViewCard data={data} index={i} classes={classes} />
                  </AnimationOnScroll>
                </Grid>
              )
            })}
        </Grid>
      </Container>
    </Page>
  )
}

const ViewCard = ({ data, index, classes }) => {
  return (
    <Box className={classes.productCardBox} key={`view${index}`}>
      <Box className="flexBox">
        <Box
          style={{ position: 'relative', zIndex: '999', minHeight: '268px' }}
          align="center"
        >
          <figure>
            <img src={data?.img} alt={data?.title} />
          </figure>
          <Box align="center">
            <Typography variant="h6">{data?.title}</Typography>
            <Typography variant="body2">{data?.description}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
