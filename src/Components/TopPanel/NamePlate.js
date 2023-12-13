import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { debounce } from "./TopPanel";
import './nameplate.css'


export default function NamePlate({ name }) {
    const [winSize, setWinSize] = useState({ x: window.innerWidth, y: window.innerHeight })
    const [cursor, setCursor] = useState({ x: 0, y: 0 })
    const [offset, setOffset] = useState({ x: window.innerWidth / 2, y: 0 })

    useEffect(() => {
        window.addEventListener("mousemove", e => setCursor({ x: e.clientX, y: e.clientY }));
        // return () => {
        //     window.removeEventListener("mousemove");
        // };
    }, []);

    useEffect(() => {
        let xRel = (cursor.x - (winSize.x / 2)) / (winSize.x / 2)
        let yRel = (cursor.y - (winSize.y / 2)) / (winSize.y / 2)
        setOffset({ x: xRel, y: yRel })
    }, [cursor, winSize])

    // useEffect(() => {
    //     console.log('Offset:', offset)
    // }, [offset])

    return (
        <Box
            // position={'relative'}
            // border={'1px solid white'}
            zIndex={6}
            display={'flex'}
            width={'100%'}
        >
            <Typography
                sx={{
                    zIndex: 3,
                    color: 'text.secondary',
                    userSelect: 'none',
                    // width: '99vw',
                    // opacity: '90%',
                    width: '100%',
                    fontSize: {
                        xl: '9vw',
                        lg: '10vw',
                        md: '11vw',
                        sm: '12vw',
                        xs: '14vw'
                    },
                    // textShadow: `0px 0px 4px rgba(255,255,255,0.5)`,
                    // textShadow: `${-10*offset.x}px 0px 10px rgba(0,0,0,0.5)`,
                    // marginBottom: '100px'
                }}
                className={'nameplate'}
                fontWeight={'normal'}
                fontFamily={'Chivo'}
                align={'center'}
                noWrap
            >
                {name}
            </Typography>
        </Box>

    )
}