import { Box, Button, Container, MobileStepper, Typography } from "@mui/material";
import { isMobile } from "react-device-detect";
import buffsLogo from '../Biography/assets/buffs.svg';
import techxLogo from './images/techx.svg';
import eurofinsLogo from './images/eurofins.svg';
import './experience.css';
import Event, { EventBody, EventSeparator, EventSection, EventTimeline, EventTimelineBody } from "./Event";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import SectionTitle from "../shared/SectionTitle";


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
            <SectionTitle title={'Education & Experience'} />
            <Box
                id={'experience-body'}
                display={'flex'}
                width={'100%'}
                justifyContent={'flex-end'}
            >
                <Box
                    id={'experience-scroll-box'}
                    className={"row no-scrollbar snap-container"}
                >
                    <Event
                        icon={buffsLogo}
                        title={'University of Colorado'}
                        location={'Boulder, CO'}
                    >
                        <EventBody>
                            <EventSection
                                title={'Bachelor of Arts - Physics'}
                                subtitle={'Class of 2019'}
                            />
                            <Box className={'col'}>
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
                        </EventBody>
                    </Event>
                    {/* <EventSeparator />
                    <Event
                        icon={eurofinsLogo}
                        title={'Eurofins FII'}
                        location={'Boulder, CO'}
                    >
                        <EventBody>
                            <EventSection
                                title={'Quality Coordinator'}
                                subtitle={'November 2016 - December 2019'}
                            />
                            <Box>
                                VBA
                            </Box>
                        </EventBody>
                    </Event> */}
                    <EventSeparator />
                    <Event
                        icon={techxLogo}
                        title={'Tech-X Corporation'}
                        location={'Boulder, CO'}
                    >
                        <EventBody>
                            <EventTimelineBody>
                                <EventTimeline
                                    title={'Software Developer II'}
                                    subtitle={'September 2022 - Present'}
                                    first
                                >
                                    <ul>
                                        <li>Cloud-based platform for HPC computing</li>
                                        <li>Automated license generation</li>
                                        <li>Spack for Windows</li>
                                    </ul>
                                </EventTimeline>
                                <EventTimeline
                                    title={'Software Developer I'}
                                    subtitle={'June 2020 - September 2022'}
                                    last
                                >
                                    <ul>
                                        <li>Python-based GUI testing suite</li>
                                        <li>C++ floating license implementation </li>
                                    </ul>
                                </EventTimeline>
                            </EventTimelineBody>
                            <EventSection title={'Awards'}>
                                <ul>
                                    <li>2023 Software Innovator of the Year</li>
                                    <li>2021 Quality Contributer of the Year</li>
                                </ul>
                            </EventSection>
                        </EventBody>
                    </Event>
                </Box>
            </Box>
            <Box
                position={'relative'}
                marginTop={'0.5rem'}
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