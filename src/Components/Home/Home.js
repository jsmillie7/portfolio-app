import { Box, Fab, Fade, Stack, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import bgImage from '../../images/texture.png'
import topoImg from '../../images/topo.png'
import { AppContext } from "../../App";
import { display } from "@mui/system";
import { isMobile } from "react-device-detect";
 

function debounce(fn, ms) {
    let timer
    return _ => {
      clearTimeout(timer)
      timer = setTimeout(_ => {
        timer = null
        fn.apply(this, arguments)
      }, ms)
    };      
  }

export default function Home() {
    const {handleChange, currentPage} = useContext(AppContext);
    const [cursor, setCursor] = useState({x:0, y:0})
    const [winSize, setWinSize] = useState({x: window.innerWidth, y: window.innerHeight})
    const [offset, setOffset] = useState({x: window.innerWidth/2, y: 0})
    const [showArrow, setShowArrow] = useState(true);

    useEffect(() => {
        const onScroll = e => {
            setShowArrow(e.target.documentElement.scrollTop <= 50)
        };
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, [showArrow]);

    useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setWinSize({x: window.innerWidth, y: window.innerHeight})
            console.log('listening to window size')
          }, 1000)
        window.addEventListener("resize", debouncedHandleResize);
        return () => {
            window.removeEventListener("resize", debouncedHandleResize);
        }
    }, [])

    useEffect(() => {
        window.addEventListener("mousemove", e => setCursor({x: e.clientX, y: e.clientY}));
        return () => {
          window.removeEventListener("mousemove");
        };
    }, []);

    useEffect(() => {
        let xRel = (cursor.x - (winSize.x/2)) / (winSize.x/2)
        let yRel = (cursor.y - (winSize.y/2)) / (winSize.y/2)
        setOffset({x:  xRel, y: yRel})
    }, [cursor, winSize])
    
    const name = "James Smillie"

    return (
            <Box
                sx={{
                    // position: 'relative',
                    border: 'solid white 0px',
                    width: '100vw',
                    height: '100vh',
                    bgcolor: 'background.default',
                    backgroundImage: `url(${topoImg})`,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // display: 'flex',
                    // flexFlow: 'column',
                    // flexGrow: 1
                }}
            >
                <Typography 
                    sx={{
                        position: 'absolute',
                        top: "30%",
                        left: "50%",
                        transform: 'translateX(-50%) translateY(0%)',
                        zIndex: 3, 
                        color: 'text.secondary',
                        userSelect: 'none',
                        width: '99vw',
                        opacity: '90%',
                        fontSize: {
                            xl: '9vw',
                            lg: '10vw',
                            md: '11vw',
                            sm: '12vw',
                            xs: '14vw'
                        },
                        alignItems:  'center',
                        justifyContent: 'center',
                        border: 'solid white 0px',
                    }} 
                    fontWeight={'normal'}
                    align={'center'}
                >
                    {name}
                </Typography>

                <Typography 
                    sx={{
                        position: 'absolute', 
                        top: "30%", 
                        left: '50%',
                        transform: 'translateX(-' + String(50+(1*offset.x)) + '%) translateY(0%)',
                        color: 'black',
                        zIndex: 2,
                        userSelect: 'none',
                        width: '99vw',
                        fontSize: {
                            xl: '9.1vw',
                            lg: '10.1vw',
                            md: '11.1vw',
                            sm: '12.2vw',
                            xs: '14.3vw'
                        },
                        opacity: '25%',
                        alignItems:  'center',
                        justifyContent: 'center',
                        border: 'solid red 0px',
                    }} 
                    fontWeight={'normal'}
                    align={'center'}
                >
                    {name}
                </Typography>

                
                <Typography 
                    sx={{
                        position: 'absolute', 
                        left: '50%', 
                        bottom: isMobile ? '40%' : '30%',
                        transform: 'translateX(-50%) translateY(0%)',
                        color: 'icon.active',
                        width: '99vw',
                        fontSize: {
                            xl: '1.25vw',
                            lg: '1.5vw',
                            md: '1.75vw',
                            sm: '2.5vw',
                            xs: '4vw'
                        },
                        userSelect: 'none',
                    }} 
                    fontFamily={'monospace'}
                    align={'center'}
                >
                    python / node.js / react / full stack
                </Typography>
                <Fade in={showArrow}>
                  <Fab
                      sx={{
                          position:'fixed', 
                          bottom: isMobile ? '4%' : '4%', 
                          left: '50%',
                          transform: 'translateX(-50%) translateY(0%)',
                          opacity: '80%',
                          bgcolor: 'transparent',
                          boxShadow: 'none',
                          color: 'text.primary',
                          "&:hover": {
                              bgcolor: 'transparent',
                              color: 'text.secondary'
                          }
                      }}
                      onClick={() => handleChange(1)}
                      
                  >
                          <KeyboardDoubleArrowDownIcon 
                              sx={{
                                  width: '30px',
                                  height: '30px',

                              }}
                          />
                  </Fab>
                </Fade>
            </Box>
    )
}
