import { Box, Button, Grid, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  bannerBox: {
    background: 'url(/images/bg.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '600px',
    position: 'relative',
  },
  detailsBox: {
    width: 'fit-content',
    position: 'absolute',
    left: '20px',
    bottom: '173px',
    color: '#000',
    '& button': {
      background: '#009b9d',
      color: '#fff',
      border: '1px solid #009b9d',
      marginTop: '20px',
      '&:hover': {
        border: '1px solid #009b9d',
        background: '#fff',
        color: '#009b9d',
      },
    },
  },
}))
export default function Banner() {
  const classes = useStyles()
  const history = useHistory()
  return (
    <Box className={classes.bannerBox}>
      <Box className={classes.detailsBox}>
        <Typography variant="h3">30 YEARS OF EXCELLENCE</Typography>
        <Button
          variant="primary"
          color="secondary"
          onClick={() => history.push('/about')}
        >
          View More
        </Button>
      </Box>
    </Box>
  )
}
