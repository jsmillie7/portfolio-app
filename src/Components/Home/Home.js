import { Box, Fab, Fade, Typography } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import topoImg from '../../images/topo.png'
import { AppContext } from "../../App";
import NamePlate from "./NamePlate";

/**
 * The first panel (tile) in the web app.
 * @returns JSX
 */
export default function Home() {
    const { isMobile, handleChange, setShowAppBar } = useContext(AppContext);
    const [showArrow, setShowArrow] = useState(true);

    const homeRef = useRef()

    const name = "James Smillie"

    /**
     * Hook to set the parallax on the scroll of the Home panel
     */
    useEffect(() => {
        const origVpHeight = window.innerHeight;

        const handleScroll = () => {
            let height;
            if (isMobile) {
                // mobile browsers hide the url bar as you scroll which makes 
                // the ui twitchy otherwise.
                height = origVpHeight
            } else {
                // allows for resizing of desktop browser.
                height = window.innerHeight;
            }
            const scrollY = window.scrollY;
            const panelHt = origVpHeight - (1 * scrollY)
            const scrollPct = scrollY / origVpHeight
            if (homeRef.current) {
                if (scrollPct < 0.45 && panelHt > 0) {
                    homeRef.current.style.height = `${panelHt}px`
                } 
            }
            setShowAppBar(scrollPct >= 0.2)
        };

        // Add a scroll event listener when the component mounts
        window.addEventListener("scroll", handleScroll);

        // Remove the scroll event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <Box
            ref={homeRef}
            height={'100vh'}
            // height={`${scrollPct}px`}
            // height={`calc(${window.innerHeight}px - ${2 * window.scrollY}px)`}
            width={'100vw'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            sx={{ backgroundImage: `url(${topoImg})` }}
        >
            <NamePlate name={name} />
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
                python / node.js / aws / react / full stack
            </Typography>
            <Fade in={showArrow}>
                <Fab
                    sx={{
                        position: 'fixed',
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


export function debounce(fn, ms) {
    let timer
    return _ => {
        clearTimeout(timer)
        timer = setTimeout(_ => {
            timer = null
            fn.apply(this, arguments)
        }, ms)
    };
}