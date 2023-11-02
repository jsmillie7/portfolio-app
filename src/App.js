import { Outlet, Link } from "react-router-dom";
import {
  AppBar,
  Box, Button,
  Collapse, Container,
  createTheme,
  CssBaseline, Slide,
  ThemeProvider, Toolbar,
  Typography, Stack, useMediaQuery,
  IconButton, Menu, Fab, Grid, Tooltip, Fade
} from "@mui/material";
import MenuList from "@mui/material/MenuList";
import { getPages } from "./pages";
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import Home from "./Components/Home/Home";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { isMobile } from 'react-device-detect';


const themeLight = createTheme({
  palette: {
    background: {
      default: "#EEEDED",
      light: "#5C6E91"
    },
    text: {
      primary: "#DD9866",
      secondary: "#8F384D",

    },
    icon: {
      default: "#8F384D",
      active: "#DD9866",
    }
  }
});


const themeDark = createTheme({
  palette: {
    primary: {
      main: "#B55400"
    },
    secondary: {
      main: "#393E46",
      light: "#CCFFCC"
    },
    background: {
      default: "#222831",
      light: "#393E46"
    },
    text: {
      // primary: "#EEEEEE",
      primary: "#ede4d3",
      // secondary: "#ede4d3"
      // secondary: "#bbbbbb"
      secondary: "#B55400"
    },
    icon: {
      default: "#B55400",
      active: "#ede4d3",
      dark: "#9B6A47"
    },
  }
});


export const AppContext = createContext();

let appVersion = 'v0.4.5';

export default function App() {
  const pages = getPages();
  const [darkMode, setDarkMode] = useState(true);
  const [currentPage, setCurrentPage] = useState(0)
  const [showAppBar, setShowAppBar] = useState(false);
  const allPages = useRef(null)
  allPages.current = []

  useEffect(() => {
    console.log(currentPage)
  }, [currentPage])

  function handleChange(newPage) {
    const element = document.getElementById(pages[newPage].urlName)
    setTimeout(() => {
      element.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }, 50)
  }

  const appVars = useMemo(() => ({
    pages, currentPage, setCurrentPage, handleChange, isMobile, allPages,
    showAppBar, setShowAppBar,
  }), [currentPage, isMobile, showAppBar])

  function buildMenu() {
    return (
      pages.map((page, idx) => (
        <DrawerItem key={idx} page={page} index={idx} callback={handleChange} />
      )))
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleShowMobileMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMobileMenu = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={darkMode ? themeDark : themeLight}>
      <AppContext.Provider value={appVars}>
        <Box sx={{ height: '100vh' }}>
          <CssBaseline />
          <Fade in={currentPage !== 0}>
            <AppBar position="fixed" sx={{ bgcolor: "background.default", opacity: "95%", }} elevation={4}>
              <Toolbar variant="dense" position="sticky">
                <Typography
                  color={'text.primary'}
                  variant={'h5'}
                  component="div"
                  sx={{
                    fontFamily: 'monospace',
                    fontWeight: 450,
                    userSelect: 'none'
                  }}
                  onClick={() => handleChange(0)}
                >
                  js
                </Typography>
                <Typography
                  color={'background.light'}
                  variant={'h5'}
                  component="div"
                  sx={{
                    fontFamily: 'monospace',
                    fontWeight: 450,
                    userSelect: 'none'
                  }}
                >
                  &nbsp;|&nbsp;
                </Typography>
                <Typography
                  color={'icon.default'}
                  variant={'h5'}
                  component="div"
                  sx={{
                    fontFamily: 'monospace',
                    flexGrow: 1,
                    fontWeight: 450,
                    userSelect: 'none'
                  }}
                >
                  {pages[currentPage].dispName.toLowerCase()}
                </Typography>
                {isMobile ?
                  <React.Fragment>
                    <IconButton
                      onClick={handleShowMobileMenu}
                      size="large"
                      sx={{ ml: 2 }}
                      aria-controls={open ? 'account-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      color={'primary'}
                    >
                      <MenuRoundedIcon sx={{ width: 32, height: 32 }} />
                    </IconButton>
                    <Menu
                      anchorEl={anchorEl}
                      id="account-menu"
                      open={open}
                      onClose={handleCloseMobileMenu}
                      onClick={handleCloseMobileMenu}
                      color={'background.light'}
                      PaperProps={{
                        elevation: 0,
                        sx: {
                          overflow: 'visible',
                          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                          mt: 1.5,
                          bgcolor: 'background.light',
                          '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                            bgcolor: 'background.light',
                          },
                          '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 24,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.light',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                          },
                        },
                      }}
                      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                      {buildMenu()}
                    </Menu>
                  </React.Fragment>
                  :
                  <Tooltip title={'LinkedIn'} arrow>
                    <IconButton
                      sx={{
                        color: "background.light",
                        "&:hover": {
                          color: "icon.default"
                        }
                      }}
                      size={'large'}
                      href="https://www.linkedin.com/in/james-s-a03574124"
                      target="_blank"
                    >
                      <LinkedInIcon fontSize={"large"} />
                    </IconButton>
                  </Tooltip>
                }
              </Toolbar>
            </AppBar>
          </Fade>
          {/* <Toolbar /> */}
          {!isMobile &&
            <MenuList sx={{ position: 'fixed', top: "15%", zIndex: 1500 }}>
              {buildMenu()}
            </MenuList>
          }
          <Box sx={{ overflowX: 'hidden', overflowY: 'auto', width: '100vw', display: 'flex', flexDirection: "column" }}>
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="stretch"
              spacing={0}
              width={'100%'}
            >
              {pages.map((page, idx) => <ObservedContainer page={page} key={idx} />)}
            </Stack>
          </Box>

          {/* TODO: Remove the following block before production */}
          <Typography
            sx={{
              position: 'fixed',
              bottom: 5,
              left: 20,
              textAlign: 'center'
            }}
            variant={'body1'}
            color={'error'}
          >
            Development Version {appVersion}
          </Typography>
          {/* End of Remove */}

        </Box>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

function ObservedContainer(props) {
  const { allPages, setCurrentPage, currentPage } = useContext(AppContext)
  const PageComponent = props.page.component
  const pageRef = useRef()
  const [inView, setInView] = useState(false)
  const visible = useRef(null)
  visible.current = false
  const isTop = useRef(null)
  isTop.current = false

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting !== visible.current) {
          if (entry.isIntersecting) {
            console.log(props.page.dispName, ' entered screen')
            allPages.current.push(props.page.index)
            let topPage = Math.min(...allPages.current)
            if (topPage === 0) {
              setCurrentPage(topPage)
            }
          } else {
            console.log(props.page.dispName, ' exited screen')
            allPages.current = allPages.current.filter(e => e !== props.page.index);
            console.log('All Pages = ', JSON.stringify(allPages.current))
            let topPage = Math.min(...allPages.current)
            if (topPage !== Infinity) {
              setCurrentPage(topPage)
            }
          }
          visible.current = entry.isIntersecting
        }
      },
      {
        threshold: 0.2
      }
    );
    if (pageRef.current) {
      observer.observe(pageRef.current);
    }
    return () => {
      observer.unobserve(pageRef.current);
    };
  })

  return (
    <Box
      // id={props.page.urlName} 
      sx={{
        alignItems: 'stretch',
        justifyContent: 'center',
        display: 'flex',
        position: 'relative',
        flexDirection: 'column'
      }}
      ref={pageRef}
      maxWidth={'100vw'}
    >
      <div style={{ position: 'absolute', top: props.page.index === 0 ? '0px' : '-60px' }} id={props.page.urlName} />
      <PageComponent page={props.page} />
    </Box>
  )
}

function DrawerItem(props) {
  const [showText, setShowText] = useState(false)
  const { currentPage, setCurrentPage, isMobile } = useContext(AppContext)

  return (
    <MenuItem
      onMouseEnter={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
      sx={{
        background: 'transparent', // transparent
        '&:hover': {
          background: '#222831'
        }
      }}
      key={props.index}
      onClick={() => props.callback(props.page.index)}
    >
      <ListItemIcon
        sx={
          props.page.index !== currentPage ?
            { color: 'icon.default' } :
            { color: 'icon.active' }
        }
      >
        {props.page.icon}
      </ListItemIcon>
      <Collapse in={showText || isMobile} orientation={"horizontal"}>
        <ListItemText>
          <Typography variant={'body1'} color={'text.primary'}>
            &nbsp;<b>{props.page.dispName}</b>
          </Typography>
        </ListItemText>
      </Collapse>
    </MenuItem>
  )
}