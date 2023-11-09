import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { debounce } from "./TopPanel";


export default function NamePlate({ name }) {
    const [winSize, setWinSize] = useState({ x: window.innerWidth, y: window.innerHeight })
    const [cursor, setCursor] = useState({ x: 0, y: 0 })
    const [offset, setOffset] = useState({ x: window.innerWidth / 2, y: 0 })

    // useEffect(() => {
    //     const debouncedHandleResize = debounce(function handleResize() {
    //         setWinSize({ x: window.innerWidth, y: window.innerHeight })
    //         console.log('listening to window size')
    //     }, 1000)
    //     window.addEventListener("resize", debouncedHandleResize);
    //     return () => {
    //         window.removeEventListener("resize", debouncedHandleResize);
    //     }
    // }, [])

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
                    // textShadow: `${-20*offset.x}px ${-20*offset.y}px 10px rgba(0,0,0,0.5)`,
                    textShadow: `${-10*offset.x}px 0px 10px rgba(0,0,0,0.5)`,
                    marginBottom: '100px'
                }}
                fontWeight={'normal'}
                align={'center'}
                noWrap
            >
                {name}
            </Typography>

            {/* <Typography
                sx={{
                    // position: 'absolute',
                    // top: "30%",
                    // left: '50%',
                    // transform: 'translateX(-' + String(50 + (1 * offset.x)) + '%) translateY(0%)',
                    transform: 'translateX(1%)',
                    color: 'black',
                    zIndex: 2,
                    // userSelect: 'none',
                    // width: '99vw',
                    // fontSize: {
                    //     xl: '9.1vw',
                    //     lg: '10.1vw',
                    //     md: '11.1vw',
                    //     sm: '12.2vw',
                    //     xs: '14.3vw'
                    // },
                    fontSize: {
                        xl: '9vw',
                        lg: '10vw',
                        md: '11vw',
                        sm: '12vw',
                        xs: '14vw'
                    },
                    opacity: '25%',
                    // alignItems: 'center',
                    // justifyContent: 'center',
                    // border: 'solid red 0px',
                }}
                fontWeight={'normal'}
                align={'center'}
                noWrap
            >
                {name}
            </Typography> */}
        </Box>

    )
}