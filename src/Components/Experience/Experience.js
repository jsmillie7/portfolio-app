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


export default function Experience() {
    const theme = useTheme();
    const navigate = useNavigate();

    const experiences = [
        {
            title: 'University of Colorado',
            subtitle: <>Boulder, CO<br />Bachelor of Arts, Physics</>,
            icon: buffsLogo
        },
        <img src={pathSvg} width={'100px'} />,
        {
            title: 'Eurofins Food Integrity & Innovation',
            subtitle: <>Nov 2016 - Dec 2019<br />Quality Coordinator</>,
            icon: eurofinsLogo,
        },
        <img src={pathSvg} width={'100px'} />,
        {
            title: 'Tech-X Corporation',
            subtitle: <>June 2020 - Present<br />Software Developer II</>,
            icon: techxLogo
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
                width={'100%'}
                display={'flex'}
                justifyContent={'center'}
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
                    // paddingX={'52.5px'}
                    paddingX={'50vw'}
                    sx={{ scrollSnapType: 'x mandatory' }}
                    className={"gallery"}
                >
                    {experiences.map((skill, index) => {
                        if (index % 2 === 0) {
                            return (
                                <Box 
                                    sx={{ scrollSnapAlign: 'center' }}
                                >
                                    <Skill
                                        skill={skill}
                                        iconSize={120}
                                        exitOpacity={'100%'}
                                        width={isMobile ? '85vw' : '75vw'}
                                    />
                                </Box>
                            );
                        } else {
                            return (
                                <Box
                                    height={'100px'}
                                    width={'100px'}
                                    display={'flex'}
                                    alignItems={'center'}
                                    justifyContent={'center'}
                                >
                                    {skill}
                                </Box>
                            );
                        }
                    })}
                </Box>
            </Box>
        </div>
        // </Container>
    );
}