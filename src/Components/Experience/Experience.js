import { Box, Button, Container, MobileStepper, Typography } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { isMobile } from "react-device-detect";
import buffsLogo from '../Biography/assets/buffs.svg';
import techxLogo from './images/techx.svg';
import eurofinsLogo from './images/eurofins.svg';
import './experience.css';
import Event, { EventSeparator, EventTitle } from "./Event";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";


export default function Experience() {
    const [stepNum, setStepNum] = useState(0);
    const { smallWindow } = useContext(AppContext);

    useEffect(() => {
        const scrollbox = document.getElementById('experience-scroll-box');
        scrollbox.addEventListener('scroll', (event) => {
            const width = window.innerWidth;
            const smallWindow = width < 900;
            let panelPct = smallWindow ? 0.9 : 0.7;
            let panelWidth = panelPct * width;
            let serparatorPlusGap = 120;
            let segment = panelWidth + serparatorPlusGap;
            setStepNum(Math.round(event.target.scrollLeft / segment));
        });

        return () => scrollbox.removeEventListener('scroll', () => null);
    }, [smallWindow]);

    return (
        <div>
            <Container
                maxWidth={'lg'}
                sx={{ marginTop: '30px' }}
            >
                <Box
                    id={'experience-title'}
                    display={'flex'}
                    flexDirection={'row'}
                    alignItems={'center'}
                    paddingY={2}
                    paddingLeft={isMobile ? 0 : 2}
                >
                    <KeyboardArrowRightIcon fontSize={'large'} />
                    <Typography
                        variant="h4"
                        fontWeight={'200'}
                    >
                        Education & Experience
                    </Typography>
                </Box>
            </Container>
            <Box
                id={'experience-body'}
                display={'flex'}
                width={'100%'}
                justifyContent={'flex-end'}
            >
                <Box
                    id={'experience-scroll-box'}
                    width={'min-content'}
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'flex-start'}
                    alignItems={'center'}
                    overflow={'auto'}
                    gap={'10px'}
                    maxWidth={'100%'}
                    paddingX={'15vw'}
                    sx={{ scrollSnapType: 'x mandatory' }}
                    className={"gallery"}
                >


                    <Event
                        icon={buffsLogo}
                        title={'University of Colorado'}
                        location={'Boulder, CO'}
                    >
                        <EventTitle
                            title={'Bachelor of Arts - Physics'}
                            subtitle={'Class of 2019'}
                        />
                        <Box className={"col"}>
                            <Typography variant={'h6'}>
                                Selected Coursework
                            </Typography>
                            <ul>
                                <li>calculus i, ii & iii</li>
                                <li>linear algebra & differential equations</li>
                                <li>quantum mechanics</li>
                                <li>statistical mechanics, scientific computing and statistics</li>
                                <li>advanced laboratory</li>
                            </ul>
                        </Box>
                        <Box>
                            <Typography gutterBottom variant={'h6'}>
                                Verifiable Credentials
                            </Typography>
                            <Box
                                className="col"
                                gap={'1rem'}
                            >
                                <Box className="col">
                                    <Typography variant="body2" gutterBottom>
                                        CeDiD: <span className="cred">203I-5FPC-J8E0</span>
                                    </Typography>
                                    <Typography variant="body2">
                                        Initials: <span className="cred">Ja</span>
                                    </Typography>
                                </Box>

                            </Box>
                            <Button
                                onClick={() => window.open('https://reg.colorado.edu/cediploma/', '_blank')}
                            >
                                Verify Here
                            </Button>
                        </Box>
                    </Event>
                    <EventSeparator />
                    <Event
                        icon={eurofinsLogo}
                        title={'Eurofins FII'}
                        location={'Boulder, CO'}
                    >
                        <EventTitle
                            title={'Quality Coordinator'}
                            subtitle={'November 2016 - December 2019'}
                        />
                        <Box>
                            VBA
                        </Box>
                    </Event>
                    <EventSeparator />
                    <Event
                        icon={techxLogo}
                        title={'Tech-X Corporation'}
                        location={'Boulder, CO'}
                    >
                        <EventTitle
                            title={'Software Developer II'}
                            subtitle={'September 2022 - Present'}
                        />
                        <Box>
                            Cloud
                        </Box>
                        <EventTitle
                            title={'Software Developer I'}
                            subtitle={'Jule 2020 - September 2022'}
                        />
                        <Box>
                            Python
                        </Box>
                    </Event>
                </Box>
            </Box>
            <Box
                position={'relative'}
                marginY={'0.5rem'}
                display={'flex'}
                justifyContent={'center'}
            >
                <MobileStepper
                    variant={'dots'}
                    steps={3}
                    activeStep={stepNum}
                    sx={{
                        position: 'static'
                    }}
                />

            </Box>

        </div>
        // </Container>
    );
}