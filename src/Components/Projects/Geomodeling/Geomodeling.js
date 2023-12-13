import { Box, Container, Divider, Typography } from "@mui/material";
import Hero from "../../shared/hero";
import MtWerner from '../../../images/mtwerner.jpg';
import HeaderImg from './images/header.png';
import UsgsImg from './images/usgs.png';
import PathImg from './images/path.png';
import { useContext } from "react";
import { AppContext } from "../../../App";
import { CodeBlock } from "../Projects";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { coordNt, getCoords, linEqNt, loadFile } from "./pythonSnippets";
import ProjectBody from "../Common/ProbjectBody";
import ProjectTitle from "../Common/ProjectTitle";
import ProjectsReturnButton from "../Common/ProjectsReturnBtn";


export default function Geomodeling() {
    const { isMobile } = useContext(AppContext);

    const pythonCode = `def hello_world():
    print("Hello, World!")

hello_world()`;

    return (
        <Box>
            <Hero
                backgroundImage={MtWerner}
            >
                {/* <Box
                    p={2}
                    // paddingBottom={8}
                    bgcolor={'rgba(39, 62, 70, 0.8)'}
                    borderRadius={1}
                    maxWidth={'90vw'}
                >
                    <Typography variant={'h2'} gutterBottom>
                        Scale-Modeling Mountains
                    </Typography>
                    <Typography variant="h4">
                        Using software, hardware and CNC laser cutting.
                    </Typography>
                </Box> */}
            </Hero>
            <ProjectBody>
                <ProjectTitle
                    title={'Scale-Modeling Mountains'}
                    subtitle={'Using software, hardware and CNC laser cutting to create replica mountains.'}
                />
                <Box>
                    <img src={HeaderImg} style={{ width: '100%' }} />
                    <Typography variant="h5" paragraph gutterBottom>
                        Background
                    </Typography>
                    <Typography paragraph gutterBottom>
                        Growing up in Colorado means spending a lot of your formative years in the
                        mountains. I spent much of that time in Steamboat Springs skiing and mountain
                        biking at Mt. Werner.
                    </Typography>
                    <Typography paragraph gutterBottom>
                        This was a pandemic-project for me. I was in between college and starting
                        my professional career, locked down with time on my hands. I had a laser
                        cutter that I had built during college and a desire to keep my mind busy.
                        Along the way, I learned a lot about data structures, algorithms, creative
                        thinking, and problem solving.
                    </Typography>
                </Box>
                {/* <hr /> */}
                <Box paddingTop={2}>
                    <Typography variant="h5" paragraph gutterBottom>
                        The challenge
                    </Typography>
                    <Typography paragraph gutterBottom fontStyle={'italic'}>
                        Using creativity and the resources I had in my house,
                        make a scale model of Mt. Werner that fits on a shelf.
                    </Typography>
                </Box>
                {/* <hr /> */}
                <Box paddingTop={2}>
                    <Typography variant="h5" paragraph gutterBottom>
                        Gathering Topography Data
                    </Typography>
                    <Box
                        display={'flex'}
                        flexDirection={isMobile ? 'column' : 'row'}
                    >
                        <Box width={isMobile ? '100%' : '40%'}>
                            <Typography paragraph sx={{ paddingTop: 1 }}>
                                The US Geological Survey is an excellent resource for free Earth-relevant data.
                                Using EarthExplorer, I navigated to Mt. Werner data sets, chose the Digital
                                Elevation branch, chose SRTM 1 Arc-Second Global data, and downloaded the result
                                as a GeoTIFF file.
                            </Typography>
                        </Box>
                        <Box flex={1}>
                            <img src={UsgsImg} width={'100%'} />
                        </Box>
                    </Box>
                </Box>
                {/* <hr /> */}
                <Box paddingTop={2}>
                    <Typography variant="h5" paragraph gutterBottom>
                        Outlining the Area
                    </Typography>
                    <Box
                        display={'flex'}
                        flexDirection={isMobile ? 'column' : 'row-reverse'}
                    >
                        <Box width={isMobile ? '100%' : '40%'}>
                            <Typography paragraph sx={{ paddingTop: 1 }}>
                                The first step was to get a polygon of the coordinates of the desired area.
                                The easiest way to do this was to use Google Earth Pro to draw a path and
                                export it as a .KMZ file. The resulting path for Mt. Werner can be seen below.
                            </Typography>
                        </Box>
                        <Box flex={1}>
                            <img src={PathImg} width={'100%'} />
                        </Box>
                    </Box>
                </Box>
                <Box paddingTop={2}>
                    <Typography variant="h5" paragraph gutterBottom>
                        A note about data structures
                    </Typography>
                    <Typography gutterBottom>
                        The for data that is created and referenced often, a consistent data structure
                        makes life much easier and keeps the code easier to read.. I like using collections.namedtuple
                        instances anytime that I am creating a data structure. In this project, two types of namedtuples
                        were created:
                    </Typography>
                    <Box
                        paddingX={4}
                        paddingTop={4}
                    >
                        <Typography>
                            A coordinate tuple to easily access latitude/longitude values:
                        </Typography>
                        <SyntaxHighlighter language="python" style={darcula}>
                            {coordNt}
                        </SyntaxHighlighter>
                    </Box>
                    <Box
                        paddingX={4}
                        paddingTop={4}
                    >
                        <Typography>
                            A linear equation tuple to quickly contain calculated slope (m) and offset(b) data:
                        </Typography>
                        <SyntaxHighlighter language="python" style={darcula}>
                            {linEqNt}
                        </SyntaxHighlighter>
                    </Box>
                </Box>
                <Box paddingTop={2}>
                    <Typography variant="h5" paragraph gutterBottom>
                        Parsing .KMZ file data
                    </Typography>
                    <Typography gutterBottom>
                        <b>Class: KMZ</b>
                        <br /><br />
                        A KMZ file is a special zipped XML file that contains all of the
                        data surrounding the path, and most importantly for this project,
                        a list of coordinates for each corner of the outlined polygon. This
                        source was a big help in figuring out how to get the coordinate data
                        out of the KMZ file. I used the PlacemarkHandler class from this
                        source verbatin, since the tedious work was already done. I created
                        another class called KMZ to wrap all of the actions surrounding the
                        KMZ data into one easy to use package. After the KMZ file is read,
                        it will build the geofence polygon:
                    </Typography>
                    <SyntaxHighlighter language="python" style={darcula}>
                        {getCoords}
                    </SyntaxHighlighter>
                    <Typography sx={{ paddingY: 2 }}>
                        Another function in this class will generate the filename of the elevation
                        GeoTIFF file using the standard naming practices that the USGS utilizes. It
                        will check the directory to see if the file has been downloaded from the USGS
                        EarthExplorer site already, and will return an error if the file is not present.
                        Downloading the file will fix this.
                    </Typography>
                    <SyntaxHighlighter language="python" style={darcula}>
                        {loadFile}
                    </SyntaxHighlighter>
                </Box>
            </ProjectBody>
            <ProjectsReturnButton />
        </Box>
    );
}