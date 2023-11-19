import { Box, Paper, Typography, useTheme } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../App";

export default function TitlePlate({ title }) {
    const { isMobile } = useContext(AppContext)
    const [val, setVal] = useState('')
    const [cursor, setCursor] = useState(true)
    const valRef = useRef(0)

    const theme = useTheme();

    useEffect(() => {

    }, [])

    useEffect(() => {
        const numIters = title.length

        function blinkCursor() {
            setCursor(state => !state)
            setTimeout(blinkCursor, 530)
        }

        function nextLetter() {
            if (valRef.current > numIters) {
                blinkCursor()
                return
            }
            valRef.current = valRef.current + 1
            setVal(title.substring(0, valRef.current))
            const del = 1000 / ((10 * Math.random()) + 5)
            setTimeout(nextLetter, del)
        }

        setTimeout(nextLetter, 500)
    }, [])

    return (
        <Box width={isMobile ? '80%' : '60%'} >
            <Paper
                elevation={1}
                sx={{
                    padding: 1,
                    bgcolor: theme.palette.secondary.main,
                    border: `0.25px solid ${theme.palette.secondary.dark}`
                }}
            >
                <Typography
                    fontFamily={'Space Mono'}
                    // variant={'h6'}
                    color={'text.primary'}
                >
                    smillie# {val}{cursor && '_'}

                </Typography>
            </Paper>
        </Box>
    )
}