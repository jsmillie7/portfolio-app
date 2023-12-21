/**
 * Hero panel used on each page
 */
import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import './hero.css'

export default function Hero({
    backgroundImage,
    backgroundSize,
    scale,
    BoxProps,
    children
}) {
    const heroRef = useRef();
    const scrollRef = useRef();
    scale = scale || 1;
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
            const scrollPct = scrollY / origVpHeight;
            if (heroRef.current) {
                if (scrollPct < (1 / (scale + 1)) && panelHt > 0) {
                    heroRef.current.style.height = `${panelHt}px`;
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
