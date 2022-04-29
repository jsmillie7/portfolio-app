import { Box, Card, Stack, Typography } from "@mui/material";
import { bgcolor } from "@mui/system";
import { Fragment } from "react";

export default function Biography() {

    const bgStyle = {
        width: '0',
        height: '0',
        borderStyle: 'solid',
        borderWidth: '0 0 200px 380px',
        borderColor: 'transparent transparent #007bff transparent'
    }

    const name = "James Smillie"

    return (
        <Fragment>
            <Stack direction={'column'}>
            <Box
                sx={{
                    position: 'relative',
                    border: 'solid white 0px',
                    width: '100vw',
                    minHeight: '50vh',
                    bgcolor: 'background.light'
                }}
            >
                {/* <Card
                    sx={{
                        height: '200px',
                        width: '200px',
                        bgcolor: 'background.light',
                        position: 'relative',
                        top: '-100px',
                        left: '50%'
                    }}
                >
                    Education
                </Card> */}
                
            </Box>
            <Box
                sx={{
                    position: 'relative',
                    border: 'solid white 0px',
                    width: '100vw',
                    minHeight: '50vh',
                    bgcolor: 'background.default',
                    // marginTop: '20vh'
                }}
            >
                <Typography 
                    // variant="h1" 
                    sx={{
                        position: 'absolute', 
                        top: 0, 
                        left: '50%', 
                        transform: 'translateX(-49.25%) translateY(-65%)',
                        zIndex: 3, 
                        color: 'text.secondary',
                        userSelect: 'none',
                        border: 'solid white 0px',
                        width: '99vw',
                        fontSize: {
                            xl: '8vw',
                            md: '9vw',
                            sm: '12vw',
                            xs: '14vw'
                        }

                    }} 
                    fontWeight={'bold'}
                    // fontSize={'11vw'}
                    align={'center'}
                >
                    {name}
                </Typography>

                <Typography 
                    // variant="h1" 
                    sx={{
                        position: 'absolute', 
                        top: 0, 
                        left: '50%', 
                        transform: 'translateX(-50.75%) translateY(-65%)',
                        color: 'background.default',
                        zIndex: 2,
                        userSelect: 'none',
                        width: '99vw',
                        fontSize: {
                            xl: '8vw',
                            md: '9vw',
                            sm: '12vw',
                            xs: '14vw'
                        }
                    }} 
                    fontWeight={'bold'}
                    // fontSize={'100%'}
                    align={'center'}
                >
                    {name}
                </Typography>
                <Typography 
                    // variant="h1" 
                    sx={{
                        position: 'absolute', 
                        // top: 0, 
                        left: '50%', 
                        transform: 'translateX(-50%) translateY(50%)',
                        color: 'icon.active',
                        width: '99vw',
                        fontSize: {
                            xl: '1.25vw',
                            lg: '1.5vw',
                            md: '1.75vw',
                            sm: '2.5vw',
                            xs: '4vw'
                        }
                    }} 
                    fontFamily={'monospace'}
                    align={'center'}

                    // fontWeight={'bold'}
                >
                    python / node.js / aws
                </Typography>
            {/* </div> */}
            </Box>
            </Stack>
        </Fragment>
    )
}