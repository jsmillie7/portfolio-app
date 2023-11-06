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
import Terminal, { JShell, TerminalIO } from "./Terminal/Shell";

/**
 * The first panel (tile) in the web app.
 * @returns JSX
 */
export default function Home() {
    const { isMobile, handleChange, setShowAppBar } = useContext(AppContext);
    const [showArrow, setShowArrow] = useState(true);


    const name = "James Smillie"

    const commands = [
        'whoami',
        'cat welcome.txt'
    ]

    return (
        <Hero backgroundImage={topoImg} scale={2}>
            <NamePlate name={name} />
            <JShell
                commands={commands}
                delay={500}
            />
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