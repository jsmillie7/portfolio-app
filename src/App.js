import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import {
  Box,
  Collapse,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography
} from "@mui/material";
import { getPages } from "./pages";
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import MenuItem from "@mui/material/MenuItem"
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { isMobile } from 'react-device-detect';
import PortfolioAppBar from "./Components/PortfolioAppBar/PortfolioAppBar";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Geomodeling from "./Components/Projects/Geomodeling/Geomodeling";
import ProjectNotFound from "./Components/Projects/ProjectNotFound";
import CloudSim from "./Components/Projects/CloudSim/CloudSim";


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

let appVersion = 'v0.5.5';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentPage, setCurrentPage] = useState(0)
  const [showAppBar, setShowAppBar] = useState(false);
  const pages = getPages()
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


          <Box sx={{ overflowX: 'hidden', overflowY: 'auto', width: '100vw', display: 'flex', flexDirection: "column" }}>

            <BrowserRouter>
              <PortfolioAppBar />
              <HandleScroll />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/geomodeling" element={<Geomodeling />} />
                <Route path="/projects/cloudsim" element={<CloudSim />} />
                <Route path="/projects/*" element={<ProjectNotFound />} />
              </Routes>
            </BrowserRouter>

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

/**
 * When the URL changes, 
 * @returns 
 */
function HandleScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null
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