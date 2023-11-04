import { Box, Paper, Typography, useTheme } from "@mui/material";
import { Children, Fragment, cloneElement, createRef, forwardRef, useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../../App";


export default function Terminal({ delayStart, children }) {
    const { isMobile } = useContext(AppContext)
    const [PID, setPID] = useState(0)
    const childRef = useRef([])

    const theme = useTheme();

    async function runCmds() {
        if (delayStart) {
            await new Promise((resolve) => { setTimeout(resolve, delayStart); });
        }
        console.log('Running...')
        const numLoops = childRef.current.length
        console.log(numLoops, 'loops!')
        for (let loop = 0; loop < numLoops; loop++) {
            const { writeStdin, showStdout } = childRef.current[loop].current
            await writeStdin()
            console.log('Finished with stdin...')
            setPID(oldPID => oldPID + 1)
            await new Promise((resolve) => { setTimeout(resolve, 500); });
        }
    }

    useEffect(() => {
        runCmds()
    }, []);


    return (
        <Box
            width={isMobile ? '80%' : '60%'}
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
                {Children.map(children, (child, index) => {
                    childRef.current[index] = createRef();
                    return cloneElement(
                        child,
                        {
                            BoxProps: {
                                // border: '1px solid green',
                                display: PID >= index ? '' : 'none'
                            },
                            ref: childRef.current[index],
                            id: index

                        }
                    );
                })}
            </Paper>
        </Box>
    )
}

export const TerminalIO = forwardRef(function TerminalIO(props, ref) {
    const stdin = props.stdin

    const [stdout, setStdout] = useState('')
    const [cursor, setCursor] = useState(true)
    const [stdinTyped, setStdinTyped] = useState('')
    const [showStdout, setShowStdout] = useState(false)
    const stdinRef = useRef('')
    const loopRef = useRef(0)


    const knownCommands = {
        'whoami': 'A Colorado-based full-stack developer',
        'cat welcome.txt': 'Thanks for checking out my portfolio.',
        ['']: ''
    }

    useEffect(() => {
        stdinRef.current = stdinTyped
    }, [stdinTyped])


    function parseCommand() {
        const newStdout = stdinRef.current
        if (newStdout === '') {
            setStdout('')
        } else if (!!knownCommands[newStdout]) {
            setStdout(knownCommands[newStdout])
        } else {
            setStdout(`jsh: command not found: ${newStdout}`)
        }
        console.log(`[${props.id}] Finished with cmd`)
        setShowStdout(true)
        setCursor(false)
    }


    /**
     * Make the cursor blink to emulate input.
     */
    function blinkCursor() {
        setCursor(state => !state)
        setTimeout(blinkCursor, 530)
    }

    /**
     * print the next letter to stdin and set the next timeout
     * @returns undefined
     */
    function nextLetter() {
        loopRef.current = loopRef.current + 1
        setStdinTyped(stdin.substring(0, loopRef.current))
    }

    async function writeStdin() {
        console.log(`[${props.id}] Writing to stdin...`)
        while (stdin.length >= loopRef.current) {
            nextLetter()
            const del = 1000 / ((10 * Math.random()) + 5)
            // const del = 2000
            console.log(`[${props.id}] Sleeping `, del)
            await new Promise((resolve) => { setTimeout(resolve, del); });
        }
        parseCommand()
        return
    }

    /**
     * Give parent access to nextLetter method
     */
    if (!!ref) {
        ref.current = { writeStdin, showStdout }
    }


    useEffect(() => {
        if (!!stdin) {
            console.log('Not interactive...')
            return
        }
        const handleKeyPress = (event) => {
            const ignoredKeys = ["Shift", "CapsLock", "Alt", "Meta", "Control"];
            // Check if a valid character is pressed (e.g., letters, numbers, etc.)
            if (event.key === " " || event.key === "Spacebar") {
                // Prevent the default behavior of the space key
                event.preventDefault();
            }
            if (ignoredKeys.includes(event.key)) {
                // ignore
            } else if (event.key === 'Enter' || event.key === '\r' || event.keyCode === 13) {
                parseCommand()
            } else if (event.key === 'Delete' || event.keyCode === 8) {
                setStdinTyped(prevText => prevText.slice(0, -1))
            } else {
                setStdinTyped((prevText) => prevText + event.key);
            }
        };

        // Add event listener for key presses
        window.addEventListener('keydown', handleKeyPress);

        return () => {
            // Clean up the event listener when the component unmounts
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);


    useEffect(() => {
        if (!!stdin) {
            // Dont run blink if we have stdin
            return
        }

        console.log('Blinking start...')
        blinkCursor()
    }, [])

    return (
        <Box {...props.BoxProps}>
            <Typography
                fontFamily={'monospace'}
                color={'text.primary'}
            >
                smillie# {stdinTyped}{cursor && '_'}
            </Typography>
            {showStdout &&
                <Typography
                    fontFamily={'monospace'}
                    color={'text.primary'}
                >
                    {stdout}
                </Typography>
            }
        </Box>

    )
})


export function Shell({ commands }) {
    const theme = useTheme();
    const { isMobile } = useContext(AppContext);
    /**
     * State variable to allow user entry into the shell
     */
    const [allowUserEntry, setAllowUserEntry] = useState(true)

    /**
     * State of the blinking cursor
     */
    const [showCursor, setShowCursor] = useState(true)

    /**
   * Data structure for each shell command IO
   * @param {String} stdin 
   * @param {String} stdout 
   * @returns Object
   */
    const command = (stdin, stdout) => (
        {
            stdin: stdin,
            stdout: stdout
        }
    )

    /**
     * history of commands executed
     */
    const [allCommands, setAllcommands] = useState([command('', null)])

    /**
     * Commands that are run on mount prior to making the shell user-enabled
     */
    commands = commands || []

    /**
     * Add the character to the command
     * @param {*} value 
     */
    function writeCommand(value) {
        const allCmds = [...allCommands];
        const lastCmd = allCmds.at(-1)
        let thisCmd;
        if (!lastCmd.stdout) {
            thisCmd = lastCmd
        } else {
            allCmds.push(command('', null))
            thisCmd = allCmds.at(-1)
        }
        thisCmd.stdin += value
        setAllcommands(allCmds)
    }

    /**
     * Run the command and write the output to stdout
     */
    function executeCommand() {
        // execute a command and write the output to stdout
        console.log('Executing Command!')
        const knownCommands = {
            'whoami': 'A Colorado-based full-stack developer',
            'cat welcome.txt': 'Thanks for checking out my portfolio.'
        }
        const allCmds = [...allCommands];
        const thisCmd = allCmds.at(-1);
        const thisStdin = thisCmd.stdin;
        let newStdOut;
        if (thisStdin === '') {
            thisCmd.stdout = ''
        } else if (!!knownCommands[thisStdin]) {
            thisCmd.stdout = knownCommands[thisStdin]
        } else {
            thisCmd.stdout = `jsh: command not found: ${thisStdin}`
        }
        allCmds.push(command('', null))
        setAllcommands(allCmds)
    }

    useEffect(() => {
        if (!allowUserEntry) {
            console.log('Not interactive...')
            return
        }
        const handleKeyPress = (event) => {
            const ignoredKeys = ["Shift", "CapsLock", "Alt", "Meta", "Control"];
            // Check if a valid character is pressed (e.g., letters, numbers, etc.)
            if (event.key === " " || event.key === "Spacebar") {
                // Prevent the default behavior of the space key
                event.preventDefault();
            }
            if (ignoredKeys.includes(event.key)) {
                // ignore
            } else if (event.key === 'Enter' || event.key === '\r' || event.keyCode === 13) {
                executeCommand()
            } else if (event.key === 'Delete' || event.keyCode === 8) {

                // setStdinTyped(prevText => prevText.slice(0, -1))
            } else {
                writeCommand(event.key)
                // setStdinTyped((prevText) => prevText + event.key);
            }
        };

        // Add event listener for key presses
        window.addEventListener('keydown', handleKeyPress);

        return () => {
            // Clean up the event listener when the component unmounts
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [allowUserEntry]);

    /**
     * Make the cursor blink to emulate input.
     */
    useEffect(() => {
        function blinkCursor() {
            setShowCursor(state => !state)
            setTimeout(blinkCursor, 530)
        }
        blinkCursor()
    }, [])


    return (
        <Box
            width={isMobile ? '80%' : '60%'}
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
                {allCommands.map((cmd, idx) => {
                    if (cmd.stdout === null) {
                        return (
                            <Typography
                                fontFamily={'monospace'}
                                color={'text.primary'}
                                key={idx}
                            >
                                smillie %{cmd.stdin}{showCursor && '_'}
                            </Typography>
                        )
                    } else {
                        return (
                            <Fragment key={idx}>
                                <Typography
                                    fontFamily={'monospace'}
                                    color={'text.primary'}
                                >
                                    smillie %{cmd.stdin}
                                </Typography>
                                <Typography
                                    fontFamily={'monospace'}
                                    color={'text.primary'}
                                >
                                    {cmd.stdout}
                                </Typography>
                            </Fragment>
                        )
                    }
                })}

            </Paper>
        </Box>
    )
}