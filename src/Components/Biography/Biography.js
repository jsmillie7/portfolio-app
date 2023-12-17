import { Box, Card, CardContent, Container, Grid, Icon, Stack, SvgIcon, Typography } from "@mui/material";
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import bioImg from './assets/bio.jpg';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import pythonLogo from './assets/python2.svg';
import reactLogo from './assets/react.svg';
import nodeLogo from './assets/node.svg';
import buffsLogo from './assets/buffs.svg';
import bashLogo from './assets/bash.svg';
import awsLogo from './assets/aws.svg';
import electronLogo from './assets/electron.svg';
import Skill from './Skill';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { AppContext } from "../../App";
import { useContext } from "react";
import SectionTitle from "../shared/SectionTitle";


export default function Biography() {
    const { smallWindow } = useContext(AppContext);


    function AboutMe({ display, BoxProps }) {
        return (
            <Box
                display={display ? '' : 'none'}
                {...BoxProps}
            >
                <Typography paragraph>
                    An expert in Python with a diverse skillset including: cloud computing, DevOps, full-stack
                    development, UX/UI design, and cross-platform desktop application development, testing and
                    building via CI/CD pipelines.
                </Typography>
                <Typography paragraph>
                    I've done a little bit of everything. I enjoy creating robust, yet user-friendly
                    experiences with a high attention to detail.
                </Typography>
            </Box>
        );
    }

    const iconSize = 80;

    const skills = [
        // {
        //     title: 'Bachelor of Arts, Physics',
        //     subtitle: <>University of Colorado <br/>Boulder, CO</>,
        //     icon: buffsLogo
        // },
        {
            title: 'Python',
            subtitle: 'Package development, product testing, UX/UI, web frameworks & task automation.',
            icon: pythonLogo
        },
        {
            title: 'Bash',
            subtitle: 'Scripting, creating and running command line utilities, task automation and system configuration',
            icon: bashLogo
        },
        {
            title: 'Node.js',
            subtitle: 'Full-stack JavaScript development, scripting and deployment',
            icon: nodeLogo
        },
        {
            title: 'React.js',
            subtitle: 'Web application front-end user interface development.',
            icon: reactLogo
        },
        {
            title: 'AWS',
            subtitle: 'Deploy solutions using services like CloudFormation, EC2, Lambda and Cognito',
            icon: awsLogo
        },
        {
            title: 'Electron.js',
            subtitle: 'Develop, build and deliver  cross-platform JavaScript-based desktop applications',
            icon: electronLogo
        }
    ];

    return (
        <Box
            className={'col'}
            backgroundColor={'Background.default'}
            width={'100%'}
        >
            <Box
                sx={{
                    position: 'relative',
                    bgcolor: 'Background.default',
                    width: '100%',
                }}
            >
                <img src={bioImg} width={'100%'} style={{ display: 'block' }} alt={'James Smillie at Yoho National Park'} />
                <Box
                    sx={{
                        bgcolor: 'background.light',
                        opacity: '85%',
                        width: '50%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0
                    }}
                />
                <Card
                    sx={{
                        bgcolor: 'transparent',
                        opacity: '100%',
                        borderRadius: "0px",
                        width: '50%',
                        height: '100%',
                        paddingLeft: isMobile ? '0' : '60px',
                        paddingRight: isMobile ? '0' : '20px',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        overflow: 'auto'
                    }}
                    elevation={0}
                >
                    <CardContent>
                        <Box>
                            <Typography
                                // variant={'body1'}
                                variant={isMobile ? 'body1' : 'h6'}
                                fontFamily={'Space Mono'}
                            >
                                Hey there, I'm
                            </Typography>
                            <Typography variant={'h4'} gutterBottom color={'text.secondary'} fontWeight={'bold'} fontFamily={'Chivo'}>
                                James Smillie.
                            </Typography>
                            <AboutMe display={!smallWindow} />
                        </Box>

                    </CardContent>
                </Card>
            </Box>
            <AboutMe
                display={smallWindow}
                BoxProps={{
                    backgroundColor: 'background.light',
                    padding: '1rem'
                }}
            />
            <SectionTitle title={'Skills & Expertise'} />
            <Box
                display={'flex'}
                width={'100%'}
                justifyContent={'center'}
            >
                <Box width={smallWindow ? '90vw' : '70vw'} >
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="stretch"
                        spacing={3}
                    >
                        {skills.map((skill, index) => {
                            return (
                                <Grid
                                    item
                                    xs={6}
                                    sm={6}
                                    md={smallWindow ? 6 : 4}
                                    lg={4}
                                    xl={4}
                                    key={index}
                                >
                                    <Skill skill={skill} />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
            </Box>

            {/* </Container> */}

        </Box>
    );
}


