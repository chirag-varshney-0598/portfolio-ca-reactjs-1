import React from 'react'
import {
  makeStyles,
  Box,
  Typography,
  Container,
  Paper,
  Grid,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  mainContent: {
    padding: '20px 20px 50px',
    background: '#fff',
    [theme.breakpoints.down('xs')]: {
      padding: '15px 15px 40px',
    },
  },
  main: {
    position: 'relative',
    zIndex: '1',
    height: '100%',
    width: '100%',
    marginBottom: '50px',
    '& h5': {
      color: '#000',
      fontSize: '14px',
      fontWeight: '500',
      lineHeight: '24px',
      [theme.breakpoints.down('xs')]: {
        fontSize: '12px',
      },
    },
  },
  subcontainer: {
    padding: '40px 0 20px',
    minHeight: '800px',
    [theme.breakpoints.down('xs')]: {
      padding: '20px 15px',
    },
  },
  backgroundColorWhite: {
    '& h5': {
      fontSize: '16px',
      fontWeight: '300',
      color: '#000',
      [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
      },
    },
  },
  PrivacyClass: {
    textAlign: 'center',
    marginBottom: '20px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '20px',
    },
  },
  mainCon: {
    [theme.breakpoints.down('xs')]: {
      padding: '0px',
    },
  },
  teamMember: {
    borderRadius: '15px',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    background: 'rgba(255, 255, 255, 0.05)',
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.12)',
    height: '100%',
    '& .teamMemberBox': {
      borderTopLeftRadius: '15px',
      borderTopRightRadius: '15px',
      overflow: 'hidden',
      '& figure': {
        margin: '0px',
        height: '339px',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        '& img': {
          width: '100%',
          height: 'auto',
        },
      },
    },
    '& .subtextbox': {
      padding: '20px',

      borderBottomLeftRadius: '15px',
      borderBottomRightRadius: '15px',
      [theme.breakpoints.down('xs')]: {
        padding: '12px',
      },
    },
    '& h3': {
      color: '#000',
      fontSize: '18px',
      fontWeight: '600',
      marginBottom: '8px',
      [theme.breakpoints.down('xs')]: {
        fontSize: '16px',
      },
    },
    '& h6': {
      color: '#000',
      fontSize: '16px',
      fontWeight: '300',
      marginBottom: '12px',
      [theme.breakpoints.down('xs')]: {
        fontSize: '14px',
      },
    },
    '& p': {
      color: '#000',
      fontSize: '13px',
      fontWeight: '300',
      lineHeight: '18.39px',
    },
  },
}))

const Privacy = () => {
  const classes = useStyles()

  const TeamCard = [
    {
      image: 'images/nk.png',
      name: 'Nalin Kumar Lal',
      post: 'B.COM (Hons), D.U',
      discription:
        'Nalin Kumar Lal has experience of over 16 years in the area of financial control and auditing. He was responsible for overall finance control including management reporting, internal audit and statutory audits. He was involved in developing internal control systems for the Companies',
    },
    {
      image: 'images/AnnirudhChauhan.png',
      name: 'Deepak Vashisth',
      post: 'Bachelor of Commerce, DU',
      discription:
        'Deepak having credible exposure spanning over 15 years +, he is PractitionerAdvocate, New Delhi, and is well known for his analytical strategic abilities as well asexcellent execution of the services handled. And Working independently as anAdvocate enrolled with Bar Council of Delhi & operating from Chamber No. 218, Civil Side, Tis Hazari, Delhi-110054',
    },
    {
      image: 'images/VikramMahendra.png',
      name: 'Yogesh Kumar Gupta',
      post: 'Master of Commerce (Account & Law)',
      discription:
        ' Mr.Yogesh Kumar Gupta qualified M.Com. in the Year 1998 and PGDBA-Finance inthe year 2010. He has 18 years of rich experience in the hardcore profession of Payroll Process, Accountancy services, GST, Audit, assurance services, Legal and regulatorycompliance services, corporate secretarial services and works contract etc',
    },
  ]

  return (
    <div className={classes.main}>
      <Box>
        <Container className={classes.mainCon}>
          <Box className={classes.subcontainer}>
            <Paper className={classes.mainContent} elevation={0}>
              <Box className={classes.backgroundColorWhite}>
                <Box>
                  <Box>
                    <Typography variant="h3" style={{ color: '#000' }}>
                      About us
                    </Typography>
                  </Box>
                  <Box my={3}>
                    <Typography variant="h5">
                      <ul>
                        <li>
                          Nayodeep Consulting Services LLP set up in 2018, is a
                          fastgrowing financial, tax, HR, Payroll, transaction,
                          legal, external credit rating and process advisory
                          firm.
                        </li>
                        <li>
                          The team at Nayodeep Consulting Services LLP consists
                          of fineblend of finance, HR, Payroll, legal and
                          advisory background, with the founding founding team
                          coming with his rich experiences experiences.
                        </li>
                        <li>
                          The team at Nayodeep Consulting Services LLP comprise
                          a mixof Chartered Accountants, MBA’s, Advocates and
                          CompanySecretary’s.
                        </li>
                      </ul>
                    </Typography>
                  </Box>
                  <Box my={3}>
                    <Typography variant="h3" style={{ color: '#000' }}>
                      Our Leadership Team
                    </Typography>
                  </Box>
                  <Grid container spacing={2} alignItems="stretch">
                    {TeamCard.map((data, i) => {
                      return (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                          <Box className={classes.teamMember}>
                            <Box className="teamMemberBox">
                              <figure>
                                <img src={data.image} alt="" width="100%" />
                              </figure>
                            </Box>
                            <Box className="subtextbox">
                              <Box className="teamtext-main">
                                <Typography variant="h3" align="left">
                                  {data.name}
                                </Typography>
                              </Box>
                              <Box>
                                <Typography variant="h6" align="left">
                                  {data.post}
                                </Typography>
                                <Typography variant="body2" align="left">
                                  {data.discription}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Grid>
                      )
                    })}
                  </Grid>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Container>
      </Box>
    </div>
  )
}

export default Privacy
