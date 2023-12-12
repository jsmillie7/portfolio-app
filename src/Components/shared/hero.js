import { Box } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../App";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';


export default function Hero({
    backgroundImage,
    backgroundSize,
    scale,
    BoxProps,
    children
}) {
    const { isMobile } = useContext(AppContext);
    const heroRef = useRef();
    const scrollRef = useRef();
    scale = scale || 1;
    backgroundSize = backgroundSize || 'cover';

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
                height = origVpHeight;
            } else {
                // allows for resizing of desktop browser.
                height = window.innerHeight;
            }
            const scrollY = window.scrollY;
            const panelHt = origVpHeight - (scale * scrollY);
            const scrollPct = scrollY / origVpHeight;
            if (heroRef.current) {
                if (scrollPct < (1 / (scale + 1)) && panelHt > 0) {
                    heroRef.current.style.height = `${panelHt}px`;
                    scrollRef.current.style.opacity = `${(panelHt/origVpHeight)**3*100}%`
                }
            }
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
            ref={heroRef}
            height={'100vh'}
            width={'100vw'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            position={'relative'}
            sx={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: backgroundSize,
                backgroundPosition: 'center',
                ...BoxProps
                // backgroundRepeat: 'no-repeat'
            }}
            overflow={'clip'}
            {...BoxProps}
        >
            {/* <ScrollIcon /> */}
            {children}
            <Box
                ref={scrollRef}
                position={'absolute'}
                bottom={'0.5em'}
                left={'50%'}
                zIndex={-20}
            >
                <KeyboardDoubleArrowDownIcon fontSize={'large'} />
            </Box>
        </Box>
    );
}
