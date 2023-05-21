import Page from 'src/component/Page'
import { Box, Container, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
const useStyles = makeStyles((theme) => ({
  titleBox: {
    textAlign: 'center',
    color: '#000',
    padding: '20px',
  },
  detailBox: {
    color: '#000',
    marginBottom: '10px',
  },
  backgroundBox: {
    marginTop: '40px',
    background: 'url(/images/bg2.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '500px',
    position: 'relative',
  },
}))
export default function Mission() {
  const classes = useStyles()
  return (
    <Page title="Our Mission & Vission">
      <Box className={classes.backgroundBox}>
        <Container>
          <Box className={classes.titleBox}>
            <Typography variant="h3">Mission & Vision</Typography>
          </Box>
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <Box className={classes.detailBox}>
              <Typography variant="h5">
                We are trusted professionals with high degree of ethics
                providing services in the field of tax and audit and other
                statutory requirements applicable to the business segment of the
                society. Our mission is to diversify from traditional practice
                of tax and audit regulatory requirements to comprehensive and
                active support to the business enterprises by providing wide
                range of advisory functions, management support services to
                strengthen and optimize productivity and profitability in the
                clients business with full compliance of business laws and
                regulatory frame work.
              </Typography>
            </Box>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <Box className={classes.detailBox}>
              <Typography variant="h5">
                Dedication and sincerity is the motto of our partners and staffs
                which gives an edge to our professional services for the
                clients. We accelerate to be amongst front runners in the
                accountancy profession equipped with an ability to provide one
                step value addition to professional services.
              </Typography>
            </Box>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <Box className={classes.detailBox}>
              <Typography variant="h5">
                Our vision is to upgrade the professional skills to match with
                ever evolving business needs to provide quality services to
                assist the clients to over come tax related complex situations
                in the fast changing segment of business and also to assist in
                rightful decision making process. We keep ourselves fine tuned
                with day to day developments in the business world and
                regulatory frame work to maintain strong bond and lasting
                relationship with clients ever ready to offer personalized,
                reliable and committed services through all time easy
                accessibility for sound business advice and quality services at
                cost effective expense with high ethics maintaining professional
                standards. We make our clients free to work in full swing in the
                area of their core competency by taking over the burden of their
                non core functions and deploy our full energy and resources
                thereon efficiently, but still remaining cost effective.
              </Typography>
            </Box>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <Box className={classes.detailBox}>
              <Typography variant="h5">
                Perfection and accuracy are our torch lights for shoulder to
                shoulder evolution of our skills and business needs of our
                clients
              </Typography>
            </Box>
          </AnimationOnScroll>
        </Container>
      </Box>
    </Page>
  )
}
