import { Box, Button, Container, Divider, Grid, Icon, Stack, Typography } from '@mui/material';
import CsDashboard from '../../../images/cloudsim.png';
import Hero from '../../shared/hero';
import { useContext, useEffect, useRef } from 'react';
import { AppContext } from '../../../App';
import reactLogo from '../../Biography/assets/react.svg';
import awsLogo from '../../Biography/assets/aws.svg';
import nodeLogo from '../../Biography/assets/node.svg';
import pyLogo from '../../Biography/assets/python.svg';
import nginxLogo from '../../Biography/assets/nginx.svg';
import a from './images/a.png';
import b from './images/b.png';
import c from './images/c.png';
import d from './images/d.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import topoImg from '../../../images/topo.png';
import { useNavigate } from 'react-router-dom';
import Technology, { PortfolioIcon } from '../Common/Technology';
import ProjectTitle from '../Common/ProjectTitle';
import ProjectBody from '../Common/ProbjectBody';

export default function CloudSim() {
    const { isMobile } = useContext(AppContext);
    const spacing = isMobile ? 1 : 2;
    const navigate = useNavigate();

    return (
        <Box>
            <Hero
                backgroundImage={CsDashboard}
                backgroundSize={isMobile ? 'contain' : 'cover'}
                BoxProps={{
                    bgcolor: 'background.light',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* <Box border={'1px solid red'} height={'100%'} width={'100%'} /> */}
            </Hero>
            <ProjectBody>
                    <ProjectTitle
                        title={'CloudSim'}
                        subtitle={'A fully integrated web application for managing high-performance computing on the cloud'}
                    />
                    <Technology
                        icons={[
                            <PortfolioIcon icon={nodeLogo} title={'node.js'} />,
                            <PortfolioIcon icon={reactLogo} title={'react'} />,
                            <PortfolioIcon icon={awsLogo} title={'aws'} />,
                            <PortfolioIcon icon={pyLogo} title={'python3'} />,
                            <PortfolioIcon icon={nginxLogo} title={'nginx'} />
                        ]}
                    />
                    <Stack
                        direction={isMobile ? 'column' : 'row'}
                        divider={
                            <Divider
                                flexItem
                                orientation={'vertical'}
                                variant={'middle'}
                            />
                        }
                        spacing={spacing ** 2}
                    >
                        <Box>
                            <Typography
                                variant={'h6'}
                                color={'text.secondary'}
                                fontWeight={200}
                            >
                                Project Background
                            </Typography>
                            <Typography variant={'body1'} fontWeight={200} paragraph>
                                Tech-X, a physics simulation company in Boulder, Colorado, was
                                looking for a way to allow access for its users to run simulations
                                on the AWS cloud. This is a complicated process that requires a
                                lot of configuration, which generally requires full IT department's
                                involvement to get a single workstation or cluster up and running.
                            </Typography>
                            <Typography variant={'body1'} fontWeight={200} paragraph>
                                CloudSim solves this issue by managing AWS resources on the user's
                                behalf. It handles all of the networking, EC2 instance configuration,
                                remote desktop connection and cloud storage of data. The full-service
                                application allows a scientist to use AWS cloud computing without needing
                                a computer science degree to set it up, saving time and money.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                variant={'h6'}
                                color={'text.secondary'}
                                fontWeight={200}
                            >
                                My Role
                            </Typography>
                            <Typography variant={'body1'} fontWeight={200} paragraph>
                                I was the lead developer for this project, in all facets of the development.
                                I worked on the team to design the UI, and was in charge of the full UX/UI
                                development using React and node.js. I also worked on the server configuration,
                                AMI development, build tools and pipelines, security, and full backend
                                framework.
                            </Typography>
                            <Typography variant={'body1'} fontWeight={200} paragraph>
                                The application is fully integrated with the AWS JavaScript SDK v3, and uses
                                the Material UI component library as a framework to the user interface.
                            </Typography>
                        </Box>
                    </Stack>
                {/* </Box> */}
            </ProjectBody>
            <Box
                width={'100%'}
                sx={{
                    backgroundImage: `url(${topoImg})`,
                }}
                paddingY={spacing}
            >
                <Typography
                    align="center"
                    variant="h4"
                    gutterBottom
                    fontWeight={'200'}
                    sx={{ padding: 4 }}
                >
                    Gallery
                </Typography>
                <Gallery spacing={spacing}>
                    <GalleryRow images={[a, c]} spacing={spacing} />
                    <GalleryRow images={[b, d]} spacing={spacing} end />
                </Gallery>
            </Box>
            <Box height={'25vh'} p={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Button
                    startIcon={<ArrowBackIosIcon />}
                    onClick={() => navigate('/projects')}
                    variant={'contained'}
                >
                    Return to Projects
                </Button>
            </Box>
        </Box>
    );
}


function Gallery({ spacing, children }) {

    return (
        <Box
            width={'100%'}
            overflow={'scroll'}
            marginBottom={spacing}
        >
            <Stack direction={'column'} spacing={spacing}>
                {children}
            </Stack>
        </Box>

    );
}


function GalleryRow({ images, spacing, end }) {
    const galleryRowRef = useRef();
    end = end || false;

    useEffect(() => {
        if (!end) return;
        const timeout = setTimeout(() => {
            galleryRowRef.current.scrollTo({
                left: galleryRowRef.current.scrollLeftMax,
                behavior: 'instant'
            });
            // galleryRowRef.current.scrollTo(galleryRowRef.current.scrollLeftMax, 0)
        }, 5000);
        return () => clearTimeout(timeout);
    }, [galleryRowRef.current]);



    return (
        <Box
            width={'100%'}
            overflow={'auto'}
            ref={galleryRowRef}
        >
            <Stack
                direction={'row'}
                spacing={spacing}
                sx={{ width: '125%' }}
            >
                {images.map((img, idx) => (
                    <img key={idx} src={img} style={{ width: `${1 / images.length * 100}%` }} />
                ))}
            </Stack>
        </Box>
    );
}
