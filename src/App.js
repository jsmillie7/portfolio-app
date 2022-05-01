import { Outlet, Link } from "react-router-dom";
import {
    AppBar,
    Box, Button,
    Collapse, Container,
    createTheme,
    CssBaseline, Slide,
    ThemeProvider, Toolbar,
    Typography, Stack, useMediaQuery,
    IconButton, Menu, Fab, Grid, Tooltip
} from "@mui/material";
import MenuList from "@mui/material/MenuList";
import {getPages} from "./pages";
import React, {createContext, useContext, useEffect, useMemo, useRef, useState} from "react";
import MenuItem from "@mui/material/MenuItem";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import Home from "./Components/Home/Home";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
            dark:  "#9B6A47"
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
            active: "#ede4d3"
        },
    }
});


export const AppContext = createContext();


let appVersion = 'v0.3.14';

export default function App() {
    const pages = getPages();
    const [darkMode, setDarkMode] = useState(true);
    const [currentPage, setCurrentPage] = useState(0)
    const isMobile = useMediaQuery('(max-width: 760px)')

    function handleChange(newPage) {
      const element = document.getElementById(pages[newPage].urlName)
      setTimeout(() => {
        element.scrollIntoView({behavior: "smooth",})
      }, 50)
    }

    const appVars = useMemo(() => ({
      pages, currentPage, setCurrentPage, handleChange, isMobile
  }), [currentPage, isMobile])

    function buildMenu() {
      return (
        pages.map((page, idx) => (
          <DrawerItem key={idx} page={page} index={idx} callback={handleChange}/>
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
        <ThemeProvider theme={darkMode ? themeDark: themeLight}>
            <AppContext.Provider value={appVars}>
            {/* <Box overflow={'hidden'} height="100vh" display="flex" flexDirection="column"> */}
            <Box overflowX={'hidden'} overflowY={'auto'} height="100vh" display="flex" flexDirection="column">
                <CssBaseline />
                <AppBar position="absolute" sx={{bgcolor: "background.default"}} elevation={4}>
                  <Toolbar>
                    <Typography
                      color={'text.primary'}
                      variant={'h5'}
                      component="div"
                      sx={{
                        fontFamily: 'monospace',
                        flexGrow: 1,
                        fontWeight: 550,
                        userSelect: 'none'
                      }}
                    >
                      js_{pages[currentPage].dispName.toLowerCase()}
                    </Typography>
                    {isMobile ?  
                      <React.Fragment>
                        {currentPage !== 0 && <IconButton
                          onClick={() => handleChange(0)}
                          size="small"
                          sx={{ ml: 2 }}
                          aria-controls={open ? 'home' : undefined}
                        >
                          <HomeTwoToneIcon sx={{color: 'text.primary' }}/>
                        </IconButton>}
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
                      <IconButton sx={{
                        color: "background.light",
                        "&:hover": {
                          color:  "icon.default"
                        }
                        }}
                        size={'large'}
                        href="https://www.linkedin.com/in/james-s-a03574124" 
                        target="_blank"
                      >
                        <LinkedInIcon fontSize={"large"}/>
                      </IconButton>
                    </Tooltip>
                    }
                      {/* <Button
                        variant={'contained'}
                        color={'primary'}
                        hidden={true}
                      >
                        Résumé
                    </Button>} */}
                  </Toolbar>
                </AppBar>
                {!isMobile && 
                  <MenuList sx={{position: 'absolute', top: "15%", zIndex: 1500}}>
                    {buildMenu()}
                  </MenuList>
                }
                    <div style={{overflow: 'auto', width: '100vw'}}>
                      <Stack
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="stretch"
                        spacing={0}
                        width={'100%'}
                      >
                      {pages.map((page, idx) => <ObservedContainer page={page} key={idx}/>)}
                      </Stack>
                    </div>

                    {/* TODO: Remove the following block before production */}
                    <Typography 
                      sx={{
                        position: 'absolute', 
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
  const {setCurrentPage} = useContext(AppContext)
  const PageComponent=props.page.component
  const pageRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentPage(props.page.index);
        }
      },
      {
        threshold: 0.5
      }
    );
    if (pageRef.current) {
      observer.observe(pageRef.current);
    }
    return () => {
      observer.unobserve(pageRef.current);
    };
  }, [])

  return(
    <Box
      id={props.page.urlName}
      sx={{
        minHeight: '100vh', 
        alignItems: 'center', 
        justifyContent: 'center', 
        display: 'flex'
      }}
      ref={pageRef}
      maxWidth={'100vw'}
    >
      <PageComponent page={props.page}/>
    </Box>
  )
}

function DrawerItem(props){
    const [showText, setShowText] = useState(false)
    const {currentPage, setCurrentPage, isMobile} = useContext(AppContext)

    return (
        <MenuItem
            onMouseEnter={() => setShowText(true)}
            onMouseLeave={() => setShowText(false)}
            sx={{
                background: 'transparent',
                '&$selected': {
                    backgroundColor: 'primary'
                }
            }}
            key={props.index}
            onClick={() => props.callback(props.page.index)}
        >
            <ListItemIcon
                sx={
                    props.page.index !== currentPage ?
                        {color: 'icon.default'} :
                        {color: 'icon.active'}
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