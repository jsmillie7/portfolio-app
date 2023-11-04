/**
 * @file Home.js
 * 
 * @abstract The first tile in the application.
 */
import { Box, Fab, Fade, Typography } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import topoImg from '../../images/topo.png'
import { AppContext } from "../../App";
import NamePlate from "./NamePlate";
import Hero from "../shared/hero";
import TitlePlate from "./TitlePlate";
import Terminal, { Shell, TerminalIO } from "./Terminal/Terminal";

/**
 * The first panel (tile) in the web app.
 * @returns JSX
 */
export default function Home() {
    const { isMobile, handleChange, setShowAppBar } = useContext(AppContext);
    const [showArrow, setShowArrow] = useState(true);


    const name = "James Smillie"

    
    return (
        <Hero backgroundImage={topoImg} scale={2}>
            <NamePlate name={name} />
            <Shell />
            {/* <Terminal
                delayStart={500}
            >
                <TerminalIO 
                    stdin={'whoami'} 
                    // stdout={'A Colorado-based full-stack developer'}
                />
                <TerminalIO 
                    stdin={'cat welcome.txt'} 
                    // stdout={'Thanks for checking out my portfolio.'}
                />
                <TerminalIO />
            </Terminal> */}
        </Hero>
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