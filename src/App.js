import { Outlet, Link } from "react-router-dom";
import {
    AppBar,
    Box, Button,
    Collapse, Container,
    createTheme,
    CssBaseline, Slide,
    ThemeProvider, Toolbar,
    Typography, Stack, useMediaQuery,
    IconButton, Menu
} from "@mui/material";
import MenuList from "@mui/material/MenuList";
import {getPages} from "./pages";
import React, {createContext, useContext, useEffect, useMemo, useState} from "react";
import MenuItem from "@mui/material/MenuItem";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Expenses from "./Components/Expenses/Expenses";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const themeLight = createTheme({
    palette: {
        background: {
            default: "#FAF5EF",
            light: "#D7D1C9"
        },
        text: {
            primary: "#99B19C",
            secondary: "#672F2F"
        },
        icon: {
            default: "#99B19C",
            active: "#672F2F"
        }
    }
});

// // Original
// const themeLight = createTheme({
//     palette: {
//         background: {
//             default: "#e4f0e2",
//         },
//         text: {
//             primary: "#000000",
//             // secondary: "#00FF00"
//         },
//         icon: {
//             default: "#0000FF"
//         }
//     }
// });

const themeDark = createTheme({
    palette: {
        primary: {
          main: "#B55400"
        },
        secondary: {
            main: "#393E46"
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


let appVersion = 'v0.3';

export default function App() {
    const pages = getPages();
    const [darkMode, setDarkMode] = useState(true);
    const [collapseDir, setCollapseDir] = useState('up');
    const [showSlide, setShowSlide] = useState(true);
    const [currentPage, setCurrentPage] = useState(0)
    const [queuedPage, setQueuedPage] = useState(0)
    const [dirUp, setDirUp] = useState(true)
    const isMobile = useMediaQuery('(max-width: 760px)')
    const transitionTime = 200;

    useEffect(() => {
      console.debug('New Index =', currentPage)
      if (currentPage < 0) {
        setTimeout(() => {
          console.debug('Transitioning in second page')
          setCurrentPage(-1*currentPage)
        }, transitionTime)
      } else {
        console.debug('Completed transition!')
      }
    }, [currentPage])

    useEffect(() => {
      console.debug('queued page changed to ', queuedPage, '. Current page transisioning out.')
      setTimeout(() => {
        console.debug('Set direction after transition completes')
        setDirUp(!dirUp)
      }, transitionTime)
    }, [queuedPage])

    useEffect(() => {
      console.debug('Direction changed')
      if (currentPage !== queuedPage) {
        console.debug('Need to bring new page in')
        setCurrentPage(queuedPage)
      } else {
        console.debug('Starting page transition')
      }
    }, [dirUp])


    // Handle swipes:
    // https://developer.chrome.com/docs/devtools/remote-debugging/
    // Listen for touchstart, save initial coords, listen for touchmove
    // Save final coords from touchmove? or from touchend?
    // Calculate net angle, with tolerance determine up/down (eg. 60-120deg = up, 240-300deg = down)
    // Listen for touchstart again.
    // window.addEventListener("touchmove", handleScroll);
    // window.removeEventListener("touchmove", handleScroll);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         window.addEventListener("wheel", handleScroll);
    //         console.log('pos', value)
    //     }, 1000);
    //
    //     return () => {
    //         clearTimeout(timer);
    //         window.removeEventListener("wheel", handleScroll);
    //     }
    // }, [showSlide])
    // window.addEventListener("touchmove", handleScroll);


//    function handleScroll(e) {
//        console.log('Got scroll event', e.deltaY)
//        // if (e.deltaY > 0) {
//        //     console.log('Go Down')
//        //     if (currentPage < pages.length-1) {
//        //         handleChange(currentPage+1)
//        //     }
//        // } else if (e.deltaY < 0) {
//        //     console.log('Go Up')
//        //     if (currentPage > 0) {
//        //         handleChange(currentPage-1)
//        //     }
//        //
//        // }
//    }

    function handleChange(newPage) {
      if (currentPage === newPage) {
        console.debug('Already on this page, nothing to change.')
        return
      }
      const delta = currentPage - newPage;
      setDirUp(delta > 0)
      setTimeout(() => {
        setQueuedPage(newPage)
      }, 10)
      // Adjust this timeout delay if the directions are not being set in time 
    }

    const appVars = useMemo(() => ({
      pages, currentPage, setCurrentPage, handleChange, isMobile
  }), [currentPage, isMobile])


    function buildMenu() {
      return (
        pages.map((page, idx) => (
          <DrawerItem page={page} index={idx} callback={handleChange}/>
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
            <Box overflow={'hidden'} height="100vh" display="flex" flexDirection="column">
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
                                right: 14,
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
                      <Button
                        variant={'contained'}
                        color={'primary'}
                      >
                        Résumé
                    </Button>}
                  </Toolbar>
                </AppBar>
                {!isMobile && 
                  <MenuList sx={{position: 'absolute', top: "15%"}}>
                    {buildMenu()}
                  </MenuList>
                }
                <Box height={'100%'}>
                    <Container
                        sx={{
                            maxWidth: isMobile ? '100%' : '75%',
                            height: "100%",
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex'
                        }}
                    >
                      <Stack direction='column'>
                      {pages.map((page, idx) => {
                        const PageComponent=page.component
                        return(
                          <Slide
                            direction={dirUp ? 'up' : 'down'}
                            in={idx === currentPage && currentPage === queuedPage}
                            timeout={transitionTime/2}
                            mountOnEnter
                            unmountOnExit
                          >   
                            <div className="home-container" style={{overflow: 'hidden'}}>
                              <PageComponent />
                            </div>
                          </Slide>
                        )
                      })}
                      </Stack>
                      <Typography sx={{position: 'absolute', bottom: 10}} variant={'body1'} color={'error'}>
                        Development Version {appVersion}
                      </Typography>
                    </Container>
                </Box>
            </Box>
            </AppContext.Provider>
        </ThemeProvider>
    );
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
                '&$selected': { // <-- mixing the two classes
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