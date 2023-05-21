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
    description: [
      `Statutory Audit, Tax audit,
    internal audit or
    management audit and
    Bank audits`,
      `Certification and attestation`,
      `Internal control review,
    reporting requirements,
    physical verification of
    assets`,
      `Audit support on behalf of
    management/
    management letters`,
    ],
  },
  {
    img: '/images/tax.jpg',
    title: 'TAX PLANNING',
    description: [
      `Tax planning and advisory`,
      `Direct tax compliances,
        Corporate tax, expatriate
        taxation and withholding
        taxes`,
      `Indirect tax compliances`,
      `Litigation management
        support`,
      `Valuation from income tax
        prespective ie as per
        section 56(2)(viia),
        56(2)(viib) etc`,
    ],
  },
  {
    img: '/images/advisory.jpg',
    title: 'REGULATORY',
    description: [
      `Company law
         compliances ie annual
         filing, filing at the time of transfer of shares`,
      `Foreign Exchange Management Act, 1999
         compliances ie FCGPR,
         FCTRS, etc`,
      `Valuation from FEMA
         prespective`,
    ],
  },
  {
    img: '/images/enterprise.jpg',
    title: 'ACCOUNTING',
    description: [
      `Maintenance and
        finalisation of accounts on
        end to end basis`,
      `Reconciliation services
            like Bank Reconciliations, Debtors/Creditors
            Reconciliations, Fixed
            Assets verification etc.`,
      `End to end services for
            the Accounts Department`,
      `Other services based on
            the requirements of the
            Management.`,
    ],
  },
  {
    img: '/images/enterprise.jpg',
    title: 'INDIRECT TAXES',
    description: [
      `Offering services in
    indirect taxes - GST`,
      `Registrations and
    execution in all the above
    areas i.e. filing of Returns and other compliances
    including assessments`,
      `Other services based on
    the requirements of the
    Management.`,
    ],
  },
  {
    img: '/images/enterprise.jpg',
    title: 'OTHERS',
    description: [
      `Incorporation of
      companies and filing of
      various forms with ROC`,
      `Society and partnership firms Registration.`,
      `Registrations of
      trademarks, patents,
      copyrights etc,`,
      `Liaisoning with the various departments specific to the requirements of the
      Management`,
    ],
  },
]
export default function Services() {
  const classes = useStyles()
  return (
    <Page title="Our Services">
      <Container className={classes.mainBody}>
        <Box className={classes.titleBox}>
          <Typography variant="h3">Services</Typography>
        </Box>
        <Grid container spacing={3}>
          {mapData &&
            mapData.map((data, i) => {
              return (
                <Grid item lg={4} xs={12} sm={4} md={4}>
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
          {/* <figure>
            <img src={data?.img} alt={data?.title} />
          </figure> */}
          <Box align="center">
            <Typography variant="h6">{data?.title}</Typography>
            <Typography variant="body2">
              <ul>
                {data?.description &&
                  data?.description.map((x) => <li>{x}</li>)}
              </ul>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
