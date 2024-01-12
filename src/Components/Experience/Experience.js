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
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';


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

                            <EventSection title={'Selected Coursework'}>
                                <ul>
                                    <li>calculus i, ii & iii</li>
                                    <li>linear algebra & differential equations</li>
                                    <li>quantum mechanics</li>
                                    <li>statistical mechanics, scientific computing and statistics</li>
                                    <li>advanced laboratory</li>
                                </ul>
                            </EventSection>
                            <EventSection title={'Verifiable Credentials'}>
                                <Box
                                    className="col"
                                    gap={'1rem'}
                                >
                                    <Typography variant="body2" gutterBottom>
                                        CeDiD:<br /><span className="cred">203I-5FPC-J8E0</span>
                                    </Typography>
                                    <Typography variant="body2">
                                        Initials:<br /><span className="cred">Ja</span>
                                    </Typography>
                                    <Button
                                        onClick={() => window.open('https://reg.colorado.edu/cediploma/', '_blank')}
                                        variant={'outlined'}
                                        sx={{ width: 'fit-content' }}
                                    >
                                        Verify Here
                                    </Button>
                                </Box>
                            </EventSection>
                        </EventBody>
                    </Event>
                    <EventSeparator />
                    <Event
                        icon={eurofinsLogo}
                        title={smallWindow ? 'Eurofins FII' : 'Eurofins Food Integrity & Innovation'}
                        location={'Boulder, CO'}
                    >
                        <EventBody>
                            <EventTimelineBody>
                                <EventTimeline
                                    title={'Quality Coordinator'}
                                    subtitle={'August 2017 - December 2019'}
                                    first
                                >
                                    <ul>
                                        <li>performing qa audits on lab standard operating procedures to protect the lab's ISO accreditation</li>
                                        <li>verifying test results and sending lab reports to customers</li>
                                        <li>manage and dispose of hazardous waste following CDPHE and EPA regulations</li>
                                        <li>automation of the above tasks using Python and VBA to increase productivity while reducing human error</li>
                                    </ul>
                                </EventTimeline>
                                <EventTimeline
                                    title={'QA Assistant'}
                                    subtitle={'November 2016 - July 2017'}
                                    last
                                >
                                    <ul>
                                        <li>data entry and updating Excel spreadsheets</li>
                                        <li>basic office tasks like filing, cleaning, shredding and preparing archived documents for long-term storage</li>
                                    </ul>
                                </EventTimeline>
                            </EventTimelineBody>
                        </EventBody>
                    </Event>
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
                                        <li>Principle developer of a web application for running physics simulations on cloud-based HPC clusters.</li>
                                        <li>On the team working to support Windows in <a href="https://spack.io" target="_blank">Spack</a>.</li>
                                    </ul>
                                </EventTimeline>
                                <EventTimeline
                                    title={'Software Developer I'}
                                    subtitle={'June 2020 - September 2022'}
                                    last
                                >
                                    <ul>
                                        <li>Refactored and expanded a python-based GUI testing system up to PEP8 standards.</li>
                                        <li>Aided in design and implementation of product licensing including floating license capabilities.</li>
                                    </ul>
                                </EventTimeline>
                            </EventTimelineBody>
                            <EventSection title={
                                <span className="row" style={{ gap: '0.5rem', alignItems: 'center', justifyContent: 'flex-start' }}><EmojiEventsTwoToneIcon color="primary" /><>Awards and Recognition</></span>
                            }>
                                <ul>
                                    <li>2023 Software Innovator of the Year</li>
                                    <li>2021 Quality Contributor of the Year</li>
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
    );
}