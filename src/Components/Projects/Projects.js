import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import Hero from "../shared/hero";
import topoImg from '../../images/topo.png'
// import topoImg from '../../images/mtn.jpg'
import geoMtnImg from '../../images/mtn.jpg'
import laserImg from '../../images/laser.jpg'
import dashboardImg from '../../images/cloudsim.png'
// import dashboardImg from './CloudSim/images/dashboard.png'
import { useContext } from "react";
import { AppContext } from "../../App";
import Geomodeling from "./Geomodeling/Geomodeling";
import { Route, Routes, useNavigate } from "react-router-dom";


export default function Projects() {

    return (
        <Box>
            <Hero backgroundImage={topoImg} backgroundSize={'contain'} scale={2}>
                <Typography variant="h1">
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


function ProjectsGrid() {

    const projects = [
        {
            title: 'CloudSim',
            img: dashboardImg,
            link: '/projects/cloudsim'
        },
        {
            title: 'Scale-Modeling Mountains',
            img: geoMtnImg,
            link: '/projects/geomodeling'
        },
        {
            title: 'CNC Laser Cutter',
            img: laserImg,
            link: '/projects/laser'
        },
    ]

    return (
        <Grid container spacing={4}>
            {projects.map(proj => (
                <Grid item xs={12} sm={12} md={6}>
                    <ProjectCard
                        title={proj.title}
                        backgroundImage={proj.img}
                        link={proj.link}
                    />
                </Grid>
            ))}
        </Grid>

    )
}


function ProjectCard({ title, backgroundImage, link }) {
    const { isMobile } = useContext(AppContext)
    const theme = useTheme();
    const navigate = useNavigate()

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
            onClick={() => navigate(link)}
        >
            <img src={backgroundImage} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
            <Box
                flex={1}
                bgcolor={'rgba(39, 62, 70, 0.85)'}
                p={1}
                position={'absolute'}
                width={'100%'}
            >

                <Typography fontWeight={'bold'} variant={'body2'} color={'text.primary'}>
                    {title}
                </Typography>
            </Box>

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
                <Typography fontFamily={'monospace'} color={'text.primary'}>
                    {line}
                </Typography>
            ))} */}

        </Box>
    )
}