import {
  AppBar,
  Toolbar,
  makeStyles,
  IconButton,
  Drawer,
  Box,
  Container,
} from '@material-ui/core'
import Logo from 'src/component/Logo'
import MenuIcon from '@material-ui/icons/Menu'
import { NavLink } from 'react-router-dom'
import { CgCloseO } from 'react-icons/cg'
import React, { useState, useEffect, useContext } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: 0,
    minWidth: 'auto',
    color: '#000',
    padding: '0px 12px',
    letterSpacing: '1px',
    // marginRight: "15px",
    textDecoration: 'none',
    lineHeight: '54px',
    display: 'flex',

    '&.deskmenu': {
      padding: '6px 2px !important',
      lineHeight: '17px',
    },
    '& span': {
      display: 'flex',
      alignItems: 'center',
    },
    '@media (max-width: 1280px)': {
      fontStyle: 'normal',
      letterSpacing: '1px',
      lineHeight: '17px',
      fontSize: '12.5px',
      color: '#000',
      padding: '0px 2px !important',
      width: '100%',
      display: 'flex',
      marginRight: '15px',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      height: 'auto',
      // "&.moremenu": { marginTop: "-3px" },
    },
    '@media (max-width: 1166px)': {
      padding: '6px 2px !important',
      fontSize: '13.5px',
    },
    '&.activeMenu': {
      color: '#E73725',
      position: 'relative',
      '&:before': {
        content: "' '",
        position: 'absolute',
        top: '40px',
        left: ' 0px',
        width: '100%',
        height: '2px',
        background: '#E73725',
        [theme.breakpoints.down('md')]: {
          display: 'none',
        },
      },
    },

    '&:hover': {
      color: '#E73725',
    },
  },

  toolbar: {
    display: 'flex',
    padding: '8px 0',

    '@media (max-width: 900px)': {
      paddingLeft: '75px',
      paddingRight: '20px',
    },
  },
  logoDrawer: {
    paddingLeft: '21px',
    width: '105px',
    marginBottom: '10px',
  },
  drawerContainer: {
    padding: '20px 0px ',
    height: '100%',
    width: '325px',
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    overflow: 'scroll',
    overflowX: 'hidden',
    backgroundColor: '#fff !important',
  },
  drawericon: {
    color: '#000',
    fontSize: '25px',
  },
  containerHeight: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  mainHeader: {
    justifyContent: 'space-between',
    padding: '0px',
    minHeight: '60px !important',
    padding: '6px 0px',
  },
  inerrMenu: {
    display: 'flex',
    listStyle: 'none',
    padding: '0',
    whiteSpace: 'nowrap',
    paddingLeft: '25px !important',
    // alignItems: "center",
    justifyContent: 'flex-start',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      paddingLeft: '25px',
    },
    '&.disgrid': { display: 'grid', margin: '0px' },
    '& li': {
      '&.active': {
        background: 'red',
      },
    },
    '@media(max-width:1166px)': {
      display: 'grid',
      margin: '0px',
    },
  },
  inerrMenu1: {
    display: 'flex',
    listStyle: 'none',
    padding: '0',
    whiteSpace: 'nowrap',
    // paddingLeft: "25px",
    // alignItems: "center",

    justifyContent: 'flex-start',
    flexDirection: 'column',
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      padding: '0',
      marginTop: '56px',
      marginLeft: '-1px',
    },
    '& li': {
      '&.active': {
        background: 'red',
      },
    },
  },
  menuul: {
    display: 'flex',
    listStyle: 'none',
    padding: '0',
    alignItems: 'center',
    // height: "30px",
    marginLeft: '15px',
    justifyContent: 'space-between',
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      marginLeft: '0',
      '& .logoDesk': {
        display: 'none',
      },
    },
  },
  menuul1: {
    display: 'block',
    // display: "flex",
    listStyle: 'none',
    padding: '8px',
    // alignItems: "center",
    // height: "30px",
    // justifyContent: "space-between",
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      '& .logoDesk': {
        display: 'none',
      },
    },
  },
  mainBox: {
    '& .heading': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '10px',
    },
  },
  moblesectionlogo: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '20px',
    position: 'relative',
    '& .iconsection': {
      top: '16px',
      right: '13px',
      position: 'absolute',
      '& svg': {
        fontSize: '24px',
        color: '#50555d',
      },
    },
  },
  avatarsection: {
    width: '100%',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',

    margin: '30px 10px 20px 24px',
    '& h5': {
      color: theme.palette.primary.main,
    },
    '& avatar': {
      width: '72px',
      height: '72px',
      borderRadius: '50%',
    },
  },
  marginsec: {
    marginTop: '255px',
    '@media(max-width:1280px)': {
      marginTop: '155px',
      marginLeft: '-5px',
    },
  },
  dialogPaper: {
    position: 'absolute',
    top: '30px',
  },
  ButtonBox: { paddingBottom: '20px' },
  // dessection: {
  //   marginTop: "40px",
  //   "@media(max-width:1281px)": {
  //     marginTop: "0px",
  //   },
  // },
  menuButtonBox: {
    marginLeft: '-8px',
  },
  DialogBox: {
    padding: '8px 24px',
    minHeight: 'calc(100vh - 100px)',
    '.MuiDialogContent-root': {
      minHeight: '669px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '8px 0px',
    },
  },
  menuIcon: {
    '& .MuiIconButton-root': {
      padding: '8px 0px 8px 8px',
    },
  },
}))
export default function Header() {
  const classes = useStyles()
  const location = useLocation()

  const {
    toolbar,
    drawerContainer,
    drawericon,
    logoDrawer,
    containerHeight,
    inerrMenu,
    mainHeader,
    menuButton,
  } = useStyles()
  const history = useHistory()
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  })
  const { mobileView, drawerOpen } = state

  const handleDrawerOpen = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: true }))
  const handleDrawerClose = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: false }))
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1167
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }))
    }
    setResponsiveness()
    window.addEventListener('resize', () => setResponsiveness())
  }, [])

  const displayDesktop = () => {
    return (
      <Box maxWidth="lg">
        <Toolbar className={toolbar}>
          {productLogo}
          {menuText}
        </Toolbar>
      </Box>
    )
  }
  const displayMobile = () => {
    return (
      <Toolbar className={mainHeader}>
        <Box style={{ display: 'flex' }}>
          <Box>{productLogo}</Box>
        </Box>
      </Toolbar>
    )
  }
  const productLogo = (
    <Box display="flex" alignItems="center">
      <Link to="/" style={{ display: 'inherit' }}>
        <Logo />
      </Link>
    </Box>
  )
  const menuText = (
    <nav>
      <ul className={inerrMenu}>
        <li>
          <NavLink
            exact
            activeClassName={mobileView ? '' : 'activeMenu'}
            className={menuButton}
            to="/"
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            activeClassName={mobileView ? '' : 'activeMenu'}
            className={menuButton}
            to="/about"
          >
            ABOUT US
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            activeClassName={mobileView ? '' : 'activeMenu'}
            className={menuButton}
            to="/services"
          >
            SERVICES
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            exact
            activeClassName={mobileView ? '' : 'activeMenu'}
            className={menuButton}
            to="/gallery"
          >
            GALLERY
          </NavLink>
        </li>

        <li>
          <NavLink
            exact
            activeClassName={mobileView ? '' : 'activeMenu'}
            className={menuButton}
            to="/contact-us"
          >
            CONTACT US
          </NavLink>{' '}
        </li> */}
      </ul>
      {/* </li>
      </ul> */}
    </nav>
  )
  const destopmenuText = (
    <Box>
      <ul className={`${inerrMenu} disgrid`}>
        <li>
          <NavLink exact className={`${menuButton} deskmenu`} to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink exact className={`${menuButton} deskmenu`} to="/about">
            ABOUT US
          </NavLink>
        </li>
        <li>
          <NavLink exact className={`${menuButton} deskmenu`} to="/services">
            SERVICES
          </NavLink>
        </li>

        {/* <li>
          <NavLink exact className={`${menuButton} deskmenu`} to="/gallery">
            GALLERY
          </NavLink>
        </li>
        <li>
          <NavLink exact className={`${menuButton} deskmenu`} to="/contact-us">
            CONTACT US
          </NavLink>
        </li> */}
      </ul>
    </Box>
  )
  return (
    <>
      <AppBar
        className="headerNav"
        position="relative"
        style={{ background: '#fff' }}
      >
        <Container maxWidth="lg" className={containerHeight}>
          {mobileView ? displayMobile() : displayDesktop()}
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <Box className={classes.menuIcon}>
              <IconButton
                className={drawericon}
                {...{
                  edge: 'start',
                  color: 'inherit',
                  'aria-label': 'menu',
                  'aria-haspopup': 'true',
                  onClick: handleDrawerOpen,
                }}
              >
                <MenuIcon
                  width="60px"
                  height="60px"
                  style={{ color: '#E73725', fontSize: '35px' }}
                />
              </IconButton>
              <Drawer
                {...{
                  anchor: 'right',
                  open: drawerOpen,
                  onClose: handleDrawerClose,
                }}
              >
                <div className={drawerContainer}>
                  <Box className={classes.moblesectionlogo}>
                    <img
                      className={logoDrawer}
                      src="/images/newLogo.png"
                      alt="website logo"
                      style={{ width: '100px' }}
                    />

                    <Box className="iconsection">
                      <IconButton onClick={handleDrawerClose}>
                        <CgCloseO />
                      </IconButton>
                    </Box>
                  </Box>

                  <Box
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {destopmenuText}
                  </Box>
                </div>
              </Drawer>
            </Box>
          </Box>
        </Container>
      </AppBar>
    </>
  )
}
