import { Box, Typography } from '@material-ui/core'
import React, { useContext } from 'react'

export default function NoDataFoundFrame({ data }) {
  return (
    <Box align="center" mt={1} width="100%">
      <img
        src={true ? 'images/DarkFrame.png' : 'images/WhiteFrame.png'}
        style={{ maxWidth: '260px' }}
      />
      <Typography
        variant="body1"
        style={{ color: '#6b6b6b', fontSize: '14px' }}
      >
        {data}
      </Typography>
    </Box>
  )
}
