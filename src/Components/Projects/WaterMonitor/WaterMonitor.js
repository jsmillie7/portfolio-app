import { Box, Divider, Stack, Typography } from '@mui/material';
import Hero from '../../shared/hero';
import { useContext } from 'react';
import { AppContext } from '../../../App';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import pyLogo from '../../Biography/assets/python.svg';
import iftttLogo from '../../Biography/assets/ifttt.svg';

import topoImg from '../../../images/topo.png';
import { useNavigate } from 'react-router-dom';
import Technology, { PortfolioIcon } from '../Common/Technology';
import ProjectTitle from '../Common/ProjectTitle';
import ProjectBody from '../Common/ProbjectBody';
import ProjectsReturnButton from '../Common/ProjectsReturnBtn';
import Gallery, { GalleryRow } from '../Common/Gallery';
import { calcRmsSnippet, postSnippet, rmsSnippet, runForeverSnippet } from './codeSnippets';

const hero = "https://github.com/jsmillie7/water-monitor/blob/main/docs/img/wm-hero.png?raw=true";
const prototype_img = "https://github.com/jsmillie7/water-monitor/blob/main/docs/img/prototype.jpg?raw=true";
const mount = "https://github.com/jsmillie7/water-monitor/blob/main/docs/img/mic_mount.jpg?raw=true";
const on_pipe = "https://github.com/jsmillie7/water-monitor/blob/main/docs/img/on_pipe.jpg?raw=true";
const cad = "https://github.com/jsmillie7/water-monitor/blob/main/docs/img/cad.png?raw=true";
const push_notification = "https://github.com/jsmillie7/water-monitor/blob/main/docs/img/push_notification.PNG?raw=true";

export default function WaterMonitor() {
    const { isMobile } = useContext(AppContext);
    const spacing = isMobile ? 1 : 2;
    const navigate = useNavigate();

    return (
        <Box>
            <Hero
                backgroundImage={hero}
                backgroundSize={isMobile ? 'contain' : 'cover'}
                BoxProps={{
                    bgcolor: 'background.light',
                    backgroundRepeat: 'no-repeat'
                }}
            >
            </Hero>
            <ProjectBody>
                <ProjectTitle
                    title={'IoT Water Monitor'}
                    subtitle={'A micropython experiment to track sprinkler water usage'}
                />
                <Technology
                    icons={[
                        <PortfolioIcon icon={pyLogo} title={'python3'} />,
                        <PortfolioIcon icon={iftttLogo} title={'IFTTT'} />,
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
                            When you have an older house, you have to improvise to integrate modern-day
                            conveniences. In our case, my wife and I were going on a 2 week vacation
                            in July and didn't want our grass and ourdoor plants to die. It was simple
                            enough to put a timer on the hose spigot and automate the sprinklers in the
                            front and back yards, but how do we remotely verify that the system is
                            functioning properly and keeping the grass green while not wasting water?
                        </Typography>
                        <Typography
                            variant={'h6'}
                            color={'text.secondary'}
                            fontWeight={200}
                        >
                            Solution
                        </Typography>
                        <Typography variant={'body1'} fontWeight={200} paragraph>
                            The solution was to add a monitor to the system, but how best to do that?
                            We wanted to know if any water was running, ever, to make sure the timer
                            didn't get stuck on, that a pipe didn't burst, etc.
                        </Typography>
                        <Typography variant={'body1'} fontWeight={200} paragraph>
                            After loading micropython onto the ESP32 microcontroller and connecting the
                            microphone, the first step was to develop a monitoring soluton.
                        </Typography>
                        <Typography
                            variant={'h6'}
                            color={'text.secondary'}
                            fontWeight={200}
                        >
                            The White Noise Issue
                        </Typography>
                        <Typography variant={'body1'} fontWeight={200} paragraph>
                            Initially,
                            fast-fourier transform (FFT) was going to be used to detect flow in the pipes,
                            but this ultimately proved to be unneccessary due to the "white noise" factor
                            that water flowing in the pipes creates... this means that the noise that
                            water makes flowing through a pipe is essentially random and there are no
                            fundamental frequencies to detect using FFT. In order to simplify the code,
                            it was determined that the root-mean square (RMS) of the absolute value of the
                            amplitude was sufficient for detecting flow. With the microphone sensor pressed
                            up against the pipe, the noise made by the water was orders of magnitude louder
                            than other sounds.
                        </Typography>
                        <Typography
                            variant={'h6'}
                            color={'text.secondary'}
                            fontWeight={200}
                        >
                            Sampling Audio
                        </Typography>
                        <Typography variant={'body1'} fontWeight={200} paragraph>
                            One important issue in any audio-based project is sampling. This includes
                            the sampling rate and the sampling duration. Both of these variables affect
                            the resolution of the acquired data as well as the responsiveness of the
                            sensor.
                        </Typography>
                        <Typography variant={'body1'} fontWeight={200} paragraph>
                            After experimentation, a sampling duration of 1 second, with 100 samples (hz)
                            selected as the sampling rate. The monitor is set to collect 1 second of data
                            prior to performaing any analysis of the data:
                        </Typography>
                        <SyntaxHighlighter language="python" style={darcula} showLineNumbers>
                            {rmsSnippet}
                        </SyntaxHighlighter>
                        <Typography
                            variant={'h6'}
                            color={'text.secondary'}
                            fontWeight={200}
                        >
                            Analyzing the Sampled Data
                        </Typography>
                        <Typography variant={'body1'} fontWeight={200} paragraph>
                            Now that we have the data, we need to calculate the RMS of the calculated
                            data. This is done as shown below:
                        </Typography>
                        <SyntaxHighlighter language="python" style={darcula} showLineNumbers>
                            {calcRmsSnippet}
                        </SyntaxHighlighter>
                        <Typography
                            variant={'h6'}
                            color={'text.secondary'}
                            fontWeight={200}
                        >
                            Running the Monitor
                        </Typography>
                        <Typography variant={'body1'} fontWeight={200} paragraph>
                            Now we have the basic logic to detect the amplitude of sound coming from
                            a copper pipe, we need to take that information and do something useful
                            with it. Microcontrollers, in general, work by looping over the same
                            "main" program over and over forever. In this case, the ESP32 loops through
                            the RMS logic, then using that value, determines how to proceed. A
                            threshold integer value is used to determine the RMS value referring to an
                            "ON" state. The water has been determined to be "OFF" when the RMS value
                            returns to to 0.5*threshold.
                        </Typography>
                        <SyntaxHighlighter language="python" style={darcula} showLineNumbers>
                            {runForeverSnippet}
                        </SyntaxHighlighter>

                    </Box>
                    <Box>
                        <Typography
                            variant={'h6'}
                            color={'text.secondary'}
                            fontWeight={200}
                        >
                            Materials
                        </Typography>
                        <ul style={{ width: "35vw" }}>
                            <li>ESP32-PICO-KIT-V4 microcontroller</li>
                            <li>MAX4466 i2c microphone</li>
                            <li>3D-printed 1/2" copper pipe microphone mount</li>
                        </ul>

                    </Box>
                </Stack>
                <Typography
                    variant={'h6'}
                    color={'text.secondary'}
                    fontWeight={200}
                >
                    Reporting an Anomoly
                </Typography>
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
                    <Box width={"75vw"}>

                        <Typography variant={'body1'} fontWeight={200} paragraph>
                            When an anomoly is detected (the water is running or was
                            running and stopped), the user needs to know. In order to
                            facilitate this remotely, an IFTTT app was created. It
                            takes a webhook post request with data and sends a push
                            notification to the user's phone. To post to this webhook,
                            the following method was developed:
                        </Typography>
                        <SyntaxHighlighter language="python" style={darcula} showLineNumbers>
                            {postSnippet}
                        </SyntaxHighlighter>
                    </Box>

                    <Box sx={{ width: "30vw" }}>
                        <img src={push_notification} style={{ width: "100%" }} />
                    </Box>
                </Stack>

                <Box sx={{ margin: "1rem 0" }}>
                    <Typography
                        variant={'h6'}
                        color={'text.secondary'}
                        fontWeight={200}
                    >
                        Status of Project
                    </Typography>
                    <Typography variant={'body1'} fontWeight={200} paragraph>
                        The water monitor was used successfully during the summer months
                        to effortlessly keep the lawn green and vibrant.
                    </Typography>
                    <Typography variant={"h5"}>
                        <a
                            href="https://github.com/jsmillie7/water-monitor.git"
                            target="_blank"
                        >
                            View the Project on GitHub
                        </a>
                    </Typography>
                </Box>
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
                <Gallery>
                    <GalleryRow images={[prototype_img, cad, push_notification, mount, on_pipe]} spacing={spacing} />
                    {/* <GalleryRow images={[on_pipe, mount]} spacing={spacing} end /> */}
                </Gallery>
            </Box>
            <ProjectsReturnButton />
        </Box>
    );
}
