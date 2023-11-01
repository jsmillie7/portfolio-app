import { Box, Fab, Fade, Stack, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import bgImage from '../../images/texture.png'
import topoImg from '../../images/topo.png'
import { AppContext } from "../../App";
import { display } from "@mui/system";
import { isMobile } from "react-device-detect";
import SkillSpinner from "./SkillSpinner";
import NamePlate from "./NamePlate";


export default function Home() {
    const { handleChange, currentPage } = useContext(AppContext);
    const [showArrow, setShowArrow] = useState(true);

    const name = "James Smillie"

    return (
        <Box
            height={'100vh'}
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