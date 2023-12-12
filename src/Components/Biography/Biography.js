import {Box, Card, CardContent, Container, Grid, Icon, Stack, SvgIcon, Typography} from "@mui/material";
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import bioImg from './assets/bio.jpg'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import pythonLogo from './assets/python2.svg'
import reactLogo from './assets/react.svg'
import nodeLogo from './assets/node.svg'
import buffsLogo from './assets/buffs.svg'
import awsLogo from './assets/aws.svg'
import electronLogo from './assets/electron.svg'
import Skill from './Skill'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


export default function Biography() {
    
    function aboutMe () {
        return (
            <Typography paragraph>
                An expert in Python with a diverse skillset including: cloud computing, DevOps, full-stack 
                development, UX/UI design, and cross-platform desktop application development and testing.
                I've done a little bit of everything. I enjoy creating robust, yet user-friendly 
                experiences with a high attention to detail.
            </Typography>
        )
    }

    const iconSize = 80

    const skills = [
        {
            title: 'Bachelor of Arts, Physics',
            subtitle: <>University of Colorado <br/>Boulder, CO</>,
            icon: buffsLogo
        },
        {
            title: 'Python',
            subtitle: 'Package development, product testing, UX/UI, web frameworks & task automation.',
            icon: pythonLogo
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
    ]

    return (
            <Box
                sx={{
                    bgcolor: 'Background.default',
                    minHeight: '100vh',
                    width: '100%',
                    // border: 'solid white 5px',
                }}
            >
                <Box
                sx={{
                    position: 'relative',
                    bgcolor: 'Background.default',
                    width: '100%',
                }}
            >
                <img src={bioImg} width={'100%'} style={{display: 'block'}} alt={'James Smillie at Banff National Park'}/>
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
                            <BrowserView>
                                {aboutMe()}
                            </BrowserView>
                        </Box>

                    </CardContent>
            </Card>
        </Box>
            <MobileView>
                <Box 
                    sx={{
                        bgcolor: 'background.light', 
                        paddingTop: '20px', 
                        paddingBottom: '20px', 
                        paddingX: '20px'}}>
                    {aboutMe()}
                </Box>
            </MobileView>
            <Container 
                maxWidth={'lg'} 
                sx={{
                    alignItems: 'center',
                    justifyContent: 'stretch',
                    marginY: '30px',
                    flex: 1
                }}
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
                        noWrap
                    >
                        Skills & Expertise
                    </Typography>
                </Box>
                {/* <Typography align="center" variant="h4" gutterBottom fontWeight={'200'}>
                    
                </Typography> */}
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={3}
                    >
                        {skills.map((skill, index) => {
                            return (
                                <Grid item xs={'auto'} key={index}>
                                    <Skill skill={skill} />
                                </Grid>
                            )
                        })}
                    </Grid>
            </Container>
            
        </Box>
    );
}


