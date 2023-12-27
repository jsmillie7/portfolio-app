/**
 * @file Home.js
 * 
 * @abstract The first tile in the application.
 */
import { Box, Typography } from "@mui/material";
import topoImg from '../../images/topo.png';
import NamePlate from "./NamePlate";
import Hero from "../shared/hero";

/**
 * The first panel (tile) in the web app.
 * @returns JSX
 */
export default function TopPanel() {

    const name = "James Smillie";
    const namelen = 27;
    const titlelen = 9;


    return (
        <Hero backgroundImage={topoImg} backgroundSize={'contain'} scale={2}>
            <Box
                className={'col'}
                flex={0.7}
                alignItems={'center'}
                justifyContent={'flex-end'}
                width={'100%'}

            >
                <Box
                    className={'col'}
                    flex={1}
                    alignItems={'center'}
                    justifyContent={'space-around'}
                    width={'100%'}
                >
                    <NamePlate name={name} />
                    <Box
                        className={'col'}
                        alignItems={'center'}
                    >
                        <Typography
                            fontFamily={'monospace'}
                            align={'center'}
                            sx={{
                                fontSize: {
                                    xl: `${45 / titlelen}vw`,
                                    lg: `${50 / titlelen}vw`,
                                    md: `${70 / titlelen}vw`,
                                    sm: `${90 / titlelen}vw`,
                                    xs: `${100 / titlelen}vw`
                                }
                            }}
                        >
                            developer
                        </Typography>
                        <Typography
                            fontFamily={'monospace'}
                            fontSize={'1.85vw'}
                            sx={{
                                fontSize: {
                                    xl: `${45 / namelen}vw`,
                                    lg: `${50 / namelen}vw`,
                                    md: `${70 / namelen}vw`,
                                    sm: `${90 / namelen}vw`,
                                    xs: `${100 / namelen}vw`
                                }
                            }}
                        >
                            cloud | full-stack | devops
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Hero>
    );
}


export function debounce(fn, ms) {
    let timer;
    return _ => {
        clearTimeout(timer);
        timer = setTimeout(_ => {
            timer = null;
            fn.apply(this, arguments);
        }, ms);
    };
}