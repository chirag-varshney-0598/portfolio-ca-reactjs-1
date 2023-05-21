import React from 'react'
import {
  makeStyles,
  IconButton,
  Box,
  Container,
  Divider,
  Typography,
} from '@material-ui/core'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk'
const useStyles = makeStyles((theme) => ({
  topheaderBox: {
    backgroundColor: '#009b9d',
    padding: '8px',
    '& .socialEndEnd': {
      ' & button.themeset': { background: 'none' },
      ' & button': {
        padding: '5px 22px',
        background: '#000',
      },
      ' & p': {
        fontWeight: '400',
        fontSize: '14px',
        color: '#000',
      },
      '& .MuiIconButton-root': {
        padding: '0px',
      },
    },
  },
  flexbox: {
    display: 'flex',
    alignItems: 'center',
    '& h4': {
      marginLeft: '6px',
      fontSize: '16px',
    },
  },
}))

function TopHeaderSection() {
  const classes = useStyles()

  return (
    <Box className={classes.topheaderBox}>
      <Container maxWidth="lg" style={{ padding: '0px' }}>
        <Box className="socialEndEnd">
          <Box>
            <Box className={classes.flexbox}>
              <IconButton className="socialIconBox">
                <PhoneInTalkIcon />
              </IconButton>
              <Typography variant="h4">+91 9811528842</Typography>
            </Box>
          </Box>
          <Box className={classes.flexbox}>
            <Box pr={2}>
              <Divider orientation="vertical" />
            </Box>

            <IconButton className="socialIconBox">
              <FaFacebookF />
            </IconButton>
            <IconButton className="socialIconBox">
              <FaTwitter />
            </IconButton>

            <IconButton className="socialIconBox">
              <FaInstagram />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default TopHeaderSection
