/**
 * Hero panel used on each page
 */
import { Box } from "@mui/material";
import { useContext, useEffect, useRef } from "react";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import './hero.css'
import { AppContext } from "../../App";


export default function Hero({
    backgroundImage,
    backgroundSize,
    scale,
    BoxProps,
    children
}) {
    const {smallWindow} = useContext(AppContext)
    const heroRef = useRef();
    const scrollRef = useRef();
    scale = smallWindow ? 2 : 1;
    backgroundSize = backgroundSize || 'cover';

    /**
     * Fix the 100vh issue on mobile by setting the panel height after render.
     */
    useEffect(() => {
        heroRef.current.style.height = `${window.innerHeight}px`
    }, [])

    /**
     * Hook to set the parallax on the scroll of the Home panel
     */
    useEffect(() => {
        const origVpHeight = window.innerHeight;
        const handleScroll = () => {

            const scrollY = window.scrollY;
            const panelHt = origVpHeight - (scale * scrollY);
            const scrollPct = (panelHt / origVpHeight);

            if (heroRef.current) {
                if (scrollPct > 0) {
                    heroRef.current.style.marginTop = `${scrollY}px`;
                    heroRef.current.style.height = `${(scrollPct) * origVpHeight}px`;
                    scrollRef.current.style.opacity = `${(panelHt / origVpHeight) ** 3 * 100}%`;
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Box
            ref={heroRef}
            id={'hero-container'}
            className={'col'}
            sx={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: backgroundSize,
                ...BoxProps
            }}
            {...BoxProps}
        >
            {children}
            <Box
                id={'hero-scroll-hint'}
                ref={scrollRef}
            >
                <KeyboardDoubleArrowDownIcon
                    fontSize={'large'}
                    className={'bounce'}
                />
            </Box>
        </Box>
    );
}
