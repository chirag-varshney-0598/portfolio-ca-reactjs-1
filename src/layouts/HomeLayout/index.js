import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import TopBar from './TopBar'
import TopHeaderSection from './TopHeaderSection'
import Footer from './Footer'
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
  },
  MainLayout: {
    minHeight: 'calc(100vh - 335px)',
    // overflowX: "hidden",
  },
}))

const MainLayout = ({ children }) => {
  const classes = useStyles()
  const history = useHistory()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={classes.root}>
      <TopHeaderSection />
      <TopBar />
      <div
        style={
          history.location.pathname !== '/'
            ? { display: 'block' }
            : { display: 'none' }
        }
      ></div>

      <div className={classes.MainLayout}>{children}</div>
      <Footer />
    </div>
  )
}

export default MainLayout
