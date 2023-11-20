import { Backdrop, Box, Container, Grid, Typography, useTheme } from "@mui/material";
import Hero from "../shared/hero";
import topoImg from '../../images/topo.png'
// import topoImg from '../../images/mtn.jpg'
import geoMtnImg from '../../images/mtn.jpg'
import laserImg from '../../images/laser.jpg'
import dashboardImg from '../../images/cloudsim.png'
// import dashboardImg from './CloudSim/images/dashboard.png'
import { useContext, useState } from "react";
import { AppContext } from "../../App";
import Geomodeling from "./Geomodeling/Geomodeling";
import { Route, Routes, useNavigate } from "react-router-dom";


export default function Projects() {
    const { isMobile } = useContext(AppContext)

    return (
        <Box>
            <Hero backgroundImage={topoImg} backgroundSize={'contain'} scale={2}>
                <Typography variant={isMobile ? 'h3' : 'h1'}>
                    Projects
                </Typography>
            </Hero>
            <Box
                height={'200vh'}
                width={'100vw'}
            >
                <Container maxWidth={'lg'} sx={{ paddingY: 4 }}>
                    <ProjectsGrid />
                </Container>
            </Box>
        </Box>
    )
}


export function ProjectsGrid({ maxProjects }) {

    const projects = [
        {
            title: 'CloudSim',
            desc: 'A fully integrated web application for managing high-performance computing on the cloud',
            img: dashboardImg,
            link: '/projects/cloudsim'
        },
        {
            title: 'Scale-Modeling Mountains',
            desc: 'Using software and hardware to build 3d models',
            img: geoMtnImg,
            link: '/projects/geomodeling'
        },
        {
            title: 'CNC Laser Cutter',
            desc: 'Building an accurate 2-axis GRBL-based laser cutter on a budget',
            img: laserImg,
            link: '/projects/laser'
        },
    ]

    maxProjects = maxProjects || projects.length

    return (
        <Grid container spacing={4}>
            {projects.slice(0, maxProjects).map(proj => (
                <Grid item xs={12} sm={12} md={6}>
                    <ProjectCard
                        title={proj.title}
                        description={proj?.desc}
                        backgroundImage={proj.img}
                        link={proj.link}
                    />
                </Grid>
            ))}
        </Grid>

    )
}


function ProjectCard({ title, description, backgroundImage, link }) {
    const { isMobile } = useContext(AppContext)
    const theme = useTheme();
    const navigate = useNavigate()
    const [showTitle, setShowTitle] = useState(false)

    const handleClick = () => {
        if (showTitle) {
            navigate(link)
        } else {
            setShowTitle(true)
        }
    }

    return (
        <Box
            display={'flex'}
            width={'100%'}
            height={isMobile ? '250px' : '350px'}
            sx={{
                ':hover': {
                    outline: `1.5px solid ${theme.palette.primary.main}`,
                    cursor: 'pointer'
                }
            }}
            alignItems={'flex-end'}
            position={'relative'}
            overflow={'clip'}
            borderRadius={1}
            onClick={handleClick}
            onMouseEnter={() => setShowTitle(!isMobile)}
            onMouseLeave={() => setShowTitle(false)}
        >
            <img src={backgroundImage} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
            <Backdrop
                open={showTitle}
                sx={{ position: 'absolute', bgcolor: 'rgba(34, 40, 49, 0.85)' }}
            >
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    height={'100%'}
                    padding={4}
                >
                    <Typography
                        fontWeight={'bold'}
                        variant={isMobile ? 'h6' : 'h4'}
                        color={'text.primary'}
                        align={'center'}
                    >
                        {title}
                    </Typography>
                    <Typography
                        fontWeight={200}
                        variant={'body1'}
                        color={'text.primary'}
                        align={'center'}
                        gutterBottom
                    >
                        {description}
                    </Typography>

                </Box>
                <Typography
                    fontFamily={'Space Mono'}
                    variant={'body2'}
                    sx={{
                        position: 'absolute',
                        bottom: '5%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        ':hover': {
                            color: 'text.secondary'
                        }
                    }}
                    gutterBottom
                >
                    [view project]
                </Typography>
            </Backdrop>
        </Box>
    )
}

export function CodeBlock({ children }) {

    return (
        <Box
            width={'100%'}
            bgcolor={'black'}
            p={0.5}
        >
            <pre>
                {children}
            </pre>
            {/* {lines.map(line => (
                <Typography fontFamily={'Space Mono'} color={'text.primary'}>
                    {line}
                </Typography>
            ))} */}

        </Box>
    )
}