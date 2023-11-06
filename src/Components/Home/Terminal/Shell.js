/**
 * GUI Component for Terminal class 
 */
import { Box, Paper, Typography, useTheme } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../../App";
import { Terminal } from "./Terminal";


const jTerm = new Terminal();

/**
 * GUI component for running jsh commands
 * @param {Array} commands - Array of string commands to run in the terminal
 * @param  {Number} delay - Time to wait in ms before typing the first command
 * @returns JSX
 */
export function JShell({ commands, delay }) {
    const [stdin, setStdin] = useState('')
    const [history, setHistory] = useState([])
    const theme = useTheme();
    const { isMobile } = useContext(AppContext);
    const loopRef = useRef(0)
    const stdinRef = useRef('')
    commands = commands || []
    delay = Number(delay) || 0

    /**
     * Write the stdin state variable to a ref so async loops can reach it
     */
    useEffect(() => {
        stdinRef.current = stdin
    }, [stdin])

    /**
     * Emulate typing commands into the shell and pressing enter
     * @param {*} value 
     * @returns 
     */
    async function write2Stdin(value) {
        loopRef.current = 0
        while (value.length >= loopRef.current) {
            loopRef.current = loopRef.current + 1
            setStdin(value.substring(0, loopRef.current))
            const del = 1000 / ((10 * Math.random()) + 5)
            await new Promise((resolve) => { setTimeout(resolve, del); });
        }
        handleRunCmd()
        return
    }

    /**
     * Run initial commands when the comonent loads
     */
    useEffect(() => {
        (async () => {
            await new Promise((resolve) => { setTimeout(resolve, delay); });
            for (const cmd of commands) {
                await write2Stdin(cmd);
            }
        })();
    }, [])

    /**
     * Run the stdin value in the jTerm backend
     */
    function handleRunCmd() {
        jTerm.runCommand(stdinRef.current)
        setStdin('')
        setHistory(jTerm.history)
    }

    /**
     * Listen for the return key and execute the current command line
     */
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Enter' || event.key === '\r' || event.keyCode === 13) {
                handleRunCmd()
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [stdin]);


    return (
        <Box
            width={isMobile ? '90%' : '60%'}
            height={'40vh'}
        >
            <Paper
                elevation={1}
                sx={{
                    padding: 1,
                    bgcolor: theme.palette.secondary.main,
                    border: `0.25px solid ${theme.palette.secondary.dark}`,
                    height: '100%'
                }}
            >
                <Box
                    flex={1}
                    display={'flex'}
                    flexDirection={'column'}
                    height={'100%'}
                    overflow={'auto'}
                    border={`1px solid ${theme.palette.primary.main}`}
                    borderRadius={1}
                    padding={1}
                >
                    {history.map((cmd, idx) => (
                        <Box display={'flex'} flexDirection={'column'} key={idx}>
                            <Typography
                                fontFamily={'monospace'}
                                color={'text.primary'}
                            >
                                smillie% {cmd.stdin}
                            </Typography>
                            <Typography
                                fontFamily={'monospace'}
                                color={'text.primary'}
                            >
                                {cmd.stdout}
                            </Typography>
                        </Box>
                    ))}
                    <Box
                        display={'flex'}
                        flexDirection={'row'}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                width: '100%'
                            }}
                        >
                            <span>
                                <Typography
                                    fontFamily={'monospace'}
                                    color={'text.primary'}
                                >
                                    smillie%&nbsp;
                                </Typography>
                            </span>
                            <input
                                type={'text'}
                                inputMode={'text'}
                                autoCapitalize={'none'}
                                autoFocus={true}
                                value={stdin}
                                onChange={e => setStdin(e.target.value)}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    fontFamily: 'monospace',
                                    fontSize: '16px',
                                    color: theme.palette.text.primary,
                                    display: 'flex',
                                    outline: 'none',
                                    ':focus': {
                                        outline: 'none',
                                        border: 'none'
                                    },
                                    paddingLeft: 0,
                                    width: '100%'
                                }}
                            />
                        </div>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}