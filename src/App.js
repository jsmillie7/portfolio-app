import { Outlet, Link } from "react-router-dom";
import {
    AppBar,
    Box, Button,
    Collapse, Container,
    createTheme,
    CssBaseline, Slide,
    ThemeProvider, Toolbar,
    Typography
} from "@mui/material";
import MenuList from "@mui/material/MenuList";
import {getPages} from "./pages";
import {createContext, useContext, useEffect, useMemo, useState} from "react";
import MenuItem from "@mui/material/MenuItem";
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
// const themeDark = createTheme({
//     palette: {
//         background: {
//             default: "#382933"
//         },
//         text: {
//             primary: "#A4B494",
//             secondary: "#519872"
//         },
//         icon: {
//             default: "#3B5249"
//         },
//     }
// });

// ORIGINAL
// const themeDark = createTheme({
//     palette: {
//         background: {
//             default: "#222222"
//         },
//         text: {
//             primary: "#ffffff",
//             secondary: "#D3D3D3"
//         },
//         icon: {
//             default: "#FF0000"
//         },
//     }
// });


export default function App() {
    const pages = getPages();
    const [light, setLight] = useState(false);
    // const [light, setLight] = useState(true);
    const [showSlide, setShowSlide] = useState(true);

    // Handle swipes:
    // https://developer.chrome.com/docs/devtools/remote-debugging/
    // Listen for touchstart, save initial coords, listen for touchmove
    // Save final coords from touchmove? or from touchend?
    // Calculate net angle, with tolerance determine up/down (eg. 60-120deg = up, 240-300deg = down)
    // Listen for touchstart again.
    // window.addEventListener("touchmove", handleScroll);
    // window.removeEventListener("touchmove", handleScroll);

    useEffect(() => {
        window.addEventListener("wheel", handleScroll);
        return () => {
            window.removeEventListener("wheel", handleScroll);
        }
    }, [showSlide])
    // window.addEventListener("wheel", handleScroll);
    // window.addEventListener("touchmove", handleScroll);

    function handleScroll(e) {
        // console.log('Got scroll event', e.deltaY)
        if (e.deltaY > 0 && showSlide) {
            console.log('Go Down')
            setShowSlide(false)
        } else if (e.deltaY < 0 && !showSlide) {
            console.log('Go Up')
            setShowSlide(true)
        }
        // if e.deltaY
        // let element = e.target
        // if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            // do something at end of scroll
            // console.log('At end of container')
        // }
    }

    return (
        <ThemeProvider theme={light ? themeLight : themeDark}>
            {/*<Box overflow={'hidden'} height="100vh" display="flex" flexDirection="column" onWheel={handleScroll}>*/}
            <Box overflow={'hidden'} height="100vh" display="flex" flexDirection="column">
                <CssBaseline />
                {/*<AppBar position="sticky" sx={{bgcolor: "background.default"}} elevation={4}>*/}
                <AppBar position="absolute" sx={{bgcolor: "background.default"}} elevation={4}>
                    <Toolbar>
                        <Typography
                            color={'text.primary'}
                            variant={'h4'}
                            component="div"
                            sx={{
                                flexGrow: 1,
                                fontWeight: 550
                            }}
                        >
                            JS
                        </Typography>
                        <Button
                            variant={'contained'}
                            color={'primary'}
                            onClick={() => setShowSlide(!showSlide)}
                        >
                            Résumé
                        </Button>
                    </Toolbar>
                </AppBar>
                <MenuList sx={{position: 'absolute', top: "15%"}}>
                    {pages.map((page, idx) => (
                        <DrawerItem page={page} index={idx}/>
                    ))}
                </MenuList>

                <Box height={'100%'}>
                    {/*<Outlet />*/}
                    <Container
                        sx={{
                            maxWidth: '75%',
                            height: "100%",
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex'
                        }}
                    >
                        <Slide
                            // direction={showSlide ? "up" : "down"}
                            direction={"down"}
                            in={showSlide}
                            mountOnEnter
                            unmountOnExit
                        >
                            <div className="home-container" style={{overflow: 'hidden'}}>
                                <Expenses />
                            </div>
                        </Slide>
                            {/*<Expenses />*/}

                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

function DrawerItem(props){
    const [showText, setShowText] = useState(false)

    return (
        <MenuItem
            onMouseEnter={() => setShowText(true)}
            onMouseLeave={() => setShowText(false)}
            sx={{borderRadius: "5px"}}
            key={props.index}
        >
            {/*<ListItemIcon sx={{color: 'text.secondary'}}>*/}
            <ListItemIcon
                sx={
                    props.page.dispName !== 'Home' ?
                        {color: 'icon.default'} :
                        {color: 'icon.active'}
                }
            >
                {props.page.icon}
            </ListItemIcon>
            <Collapse in={showText} orientation={"horizontal"}>
                <ListItemText>
                    <Typography variant={'body1'} color={'text.primary'}>
                        &nbsp;<b>{props.page.dispName}</b>
                    </Typography>
                </ListItemText>
            </Collapse>
        </MenuItem>
    )
}