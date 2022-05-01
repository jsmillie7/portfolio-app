import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import bgImage from '../../images/texture.png'
 

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

export default function Biography() {
    const [cursor, setCursor] = useState({x:0, y:0})
    const [winSize, setWinSize] = useState({x: window.innerWidth, y: window.innerHeight})
    const [offset, setOffset] = useState({x: window.innerWidth/2, y: 0})

    useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setWinSize({x: window.innerWidth, y: window.innerHeight})
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
        <Stack direction={'column'} sx={{overflowX: 'clip', width: '100%'}}>
            <Box
                sx={{
                    position: 'relative',
                    border: 'solid white 0px',
                    width: '100vw',
                    minHeight: '50vh',
                    bgcolor: 'background.light',
                    backgroundImage: `url(${bgImage})`,
                    // backgroundImage: `url("https://github.com/jsmillie7/portfolio-app/blob/master/src/images/texture.png?raw=true")`,
                    opacity: "40%"
                }}
            />
            <Box
                sx={{
                    position: 'relative',
                    border: 'solid white 0px',
                    width: '100vw',
                    minHeight: '50vh',
                    bgcolor: 'background.default',
                }}
            >
                <Typography 
                    sx={{
                        position: 'absolute', 
                        top: 0, 
                        left: '50%', 
                        transform: 'translateX(-50%) translateY(-65%)',
                        zIndex: 3, 
                        color: 'text.secondary',
                        userSelect: 'none',
                        border: 'solid white 0px',
                        width: '99vw',
                        fontSize: {
                            xl: '9vw',
                            lg: '10vw',
                            md: '11vw',
                            sm: '12vw',
                            xs: '14vw'
                        },
                    }} 
                    fontWeight={'strong'}
                    align={'center'}
                >
                    {name}
                </Typography>
                <Typography 
                    sx={{
                        position: 'absolute', 
                        top: 0, 
                        left: '50%',
                        transform: 'translateX(-' + String(50+(0.75*offset.x)) + '%) translateY(-' + String(65+(5*offset.y)) + '%)',
                        color: 'background.default',
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
                        opacity: '60%'
                    }} 
                    fontWeight={'strong'}
                    align={'center'}
                >
                    {name}
                </Typography>
                <Typography 
                    sx={{
                        position: 'absolute', 
                        left: '50%', 
                        transform: 'translateX(-50%) translateY(80%)',
                        color: 'icon.active',
                        // '&:hover': {
                        //     color: 'icon.default'
                        // },
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
            </Box>
        </Stack>
    )
}

function HoverText(props) {
    const hoverColor = props.color
    const text = props.text
    const defaultColor = 'icon.active'
    const [textColor, setTextColor] = useState(defaultColor)

    return (
        <Typography 
                    // variant="h1" 
                    sx={{
                        position: 'absolute', 
                        // top: 0, 
                        left: '50%', 
                        transform: 'translateX(-50%) translateY(80%)',
                        color: {textColor},
                        width: '99vw',
                        fontSize: {
                            xl: '1.25vw',
                            lg: '1.5vw',
                            md: '1.75vw',
                            sm: '2.5vw',
                            xs: '4vw'
                        }
                    }} 
                    fontFamily={'monospace'}
                    align={'center'}
                    onMouseEnter={e => setTextColor(hoverColor)}
                    onMouseExit={e => setTextColor(defaultColor)}
                >
                    {text}
                </Typography>
    )
}