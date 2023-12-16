import { Box, Button, Container, Divider, Grid, Icon, Typography, useTheme } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { isMobile } from "react-device-detect";
import Skill from "../Biography/Skill";
import buffsLogo from '../Biography/assets/buffs.svg';
import techxLogo from './images/techx.svg';
import eurofinsLogo from './images/eurofins.svg';
import pathSvg from './images/path.svg';
import { useNavigate } from "react-router-dom";
import './experience.css';
import Event, { EventSeparator, EventTitle } from "./Event";


export default function Experience() {
    const theme = useTheme();
    const navigate = useNavigate();

    const experiences = [
        {
            title: 'University of Colorado',
            subtitle: <>Boulder, CO<br />Bachelor of Arts, Physics</>,
            icon: buffsLogo,
            location: 'Boulder, CO'
        },
        <img src={pathSvg} width={'100px'} />,
        {
            title: 'Eurofins Food Integrity & Innovation',
            subtitle: <>Nov 2016 - Dec 2019<br />Quality Coordinator</>,
            icon: eurofinsLogo,
            location: 'Boulder, CO'
        },
        <img src={pathSvg} width={'100px'} />,
        {
            title: 'Tech-X Corporation',
            subtitle: <>June 2020 - Present<br />Software Developer II</>,
            icon: techxLogo,
            location: 'Boulder, CO'
        },
    ];

    return (
        <div>
            <Container
                maxWidth={'lg'}
                sx={{ marginTop: '30px' }}
            >
                <Box
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
                    // noWrap
                    >
                        Education & Experience
                    </Typography>
                </Box>
            </Container>
            <Box
                display={'flex'}
                width={'100%'}
                // border={'1px solid lime'}
                justifyContent={'flex-end'}
            >
                <Box
                    width={'min-content'}
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'flex-start'}
                    alignItems={'center'}
                    overflow={'auto'}
                    gap={1}
                    maxWidth={'100%'}
                    paddingX={'30vw'}
                    paddingRight={'50vw'}
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
                        <Box
                            className="col"
                        >
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
                        title={'Eurofins Food Integrity & Innovation'}
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
            {/* </Box> */}

        </div>
        // </Container>
    );
}