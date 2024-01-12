import { Box, Typography } from '@mui/material';
import Hero from '../../shared/hero';
import { useContext } from 'react';
import { AppContext } from '../../../App';
import dash from './images/transcribe_dashboard.png';
import Technology, { PortfolioIcon } from '../Common/Technology';
import nodeLogo from '../../Biography/assets/node.svg';
import typescriptLogo from '../../Biography/assets/typescript.svg';
import reactLogo from '../../Biography/assets/react.svg';
import awsLogo from '../../Biography/assets/aws.svg';
import electronLogo from '../../Biography/assets/electron.svg';
import ProjectTitle from '../Common/ProjectTitle';
import ProjectBody from '../Common/ProbjectBody';
import ProjectsReturnButton from '../Common/ProjectsReturnBtn';
import oldUi from './images/old_ui_3.png';
import settingsUi from './images/transcribe_settings.png';
import './transcribe.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FileIF, awsBaseClass, cloudformationYaml, ffmpegSnippet } from './codeSnippets';

export default function Transcribe() {
    const { smallWindow } = useContext(AppContext);

    return (
        <Box>
            <Hero
                backgroundSize={smallWindow ? 'contain' : 'cover'}
                BoxProps={{
                    background: 'linear-gradient(#222831 50%, #B55400 125%)',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    sx={{
                        width: {
                            xs: '100vw',
                            sm: '100vw',
                            md: '90vw',
                            lg: '90vw',
                            xl: '90vw'
                        },
                        maxHeight: '85vh',

                    }}
                >
                    <img src={dash} style={{ maxHeight: '100%', maxWidth: '100%' }} />
                </Box>
            </Hero>
            <ProjectBody>
                <ProjectTitle
                    title={'transcribe'}
                    subtitle={'A cross-platform desktop application for transcribing audio files using the AWS cloud'}
                />
                <Technology
                    icons={[
                        <PortfolioIcon icon={nodeLogo} title={'node.js'} />,
                        <PortfolioIcon icon={reactLogo} title={'react'} />,
                        <PortfolioIcon icon={typescriptLogo} title={'typescript'} />,
                        <PortfolioIcon icon={awsLogo} title={'aws'} />,
                        <PortfolioIcon icon={electronLogo} title={'electron'} />,
                    ]}
                />
                <Box paddingTop={2}>
                    <Typography variant="h5" paragraph gutterBottom>
                        Motivation
                    </Typography>
                    <Box
                        display={'flex'}
                        flexDirection={smallWindow ? 'column' : 'row'}
                    >
                        <Box width={smallWindow ? '100%' : '60%'}>
                            <Typography paragraph sx={{ paddingTop: 1 }} gutterBottom>
                                This project came out of a personal request from my mom. She has worked as a
                                transcriptionist for the courts as long as I can remember. She began developing
                                carpal tunnel syndrome after years of repetitive motion from typing began
                                catching up with her. This project is an ongoing work-in-progress. As a cloud
                                developer, I wanted to help her keep working while reducing the workload on her.
                                The solution: Create an application that transcribed the audio files using the AWS
                                Transcribe service.
                            </Typography>
                        </Box>
                        <Box flex={1} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                            <Box border={'1px solid #393E46'} padding={'1rem'}>
                                <Typography align='center' variant='h6'>
                                    Steps Required
                                </Typography>
                                <Typography align='center'>
                                    1. Convert audio file format<br />
                                    2. Upload to an S3 bucket<br />
                                    3. Run the AWS Transcribe service<br />
                                    4. Retrieve transcript<br />
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box paddingTop={2}>
                    <Typography variant="h5" paragraph gutterBottom>
                        Initial Design
                    </Typography>
                    <Box
                        display={'flex'}
                        flexDirection={smallWindow ? 'column' : 'row'}
                    >
                        <Box width={smallWindow ? '100%' : '40%'}>
                            <Typography paragraph sx={{ paddingTop: 1 }} gutterBottom>
                                The first version of the application was built using pure Python. The application
                                was built using jupyter lab and ipywidgets as the UI, and used the boto3 library
                                to communicate with AWS. The app was deployed using Voila. It was very basic,
                                but as a proof-of-concept, it was a success, but the user experience left much to
                                be desired.
                            </Typography>
                            <ul>
                                <li>
                                    The user had to download Python onto their system.
                                </li>
                                <li>
                                    Each step of the process had to be run manually.
                                </li>
                                <li>
                                    The app runs in serial, so it took a long time when there were multiple files.
                                </li>
                                <li>
                                    The AWS keys were hard-coded into the app code.
                                </li>
                                <li>
                                    No data retention, when a user runs again or the page is refreshed, old data is lost.
                                </li>
                            </ul>
                        </Box>
                        <Box flex={1}>
                            <img src={oldUi} width={'100%'} />
                        </Box>
                    </Box>
                </Box>
                <Box paddingTop={2}>
                    <Typography variant="h5" paragraph gutterBottom>
                        The Next Iteration
                    </Typography>
                    <Box
                        display={'flex'}
                        flexDirection={smallWindow ? 'column' : 'row'}
                    >
                        <Typography paragraph>
                            In order to address all of the issues listed above, I had to make some
                            big changes. I decided to move from Python to TypeScript. The app would
                            be written using React.js and packaged using Electron. This allows the
                            flexibility of development using the AWS JavaScript SDK. It also allows
                            me to deveolop on my Mac and make a cross-platform installer for my mom,
                            a Windows user.
                        </Typography>
                    </Box>
                </Box>
                <Box paddingTop={2}>
                    <Typography variant="h5" paragraph gutterBottom>
                        Challenges
                    </Typography>
                    <Typography variant="h6" paragraph gutterBottom>
                        Audio Conversion
                    </Typography>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                    >
                        <Box width={'100%'}>
                            <Typography paragraph>
                                Audio format conversion is required to make sure the format of the audio
                                is supported by the AWS Transcribe service. FFMPEG is a free, open-source
                                audio conversion tool. The binary executable for each supported operating
                                system was downloaded and packaged in the electron app.
                            </Typography>
                            <Typography paragraph>
                                A typescript wrapper class was written in order to run the executable from
                                inside the application.
                            </Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
                            <Box width={'80vw'} maxWidth={'1000px'}>
                                <SyntaxHighlighter language="javascript" style={darcula} showLineNumbers>
                                    {ffmpegSnippet}
                                </SyntaxHighlighter>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box paddingTop={2}>
                    <Typography variant="h6" paragraph gutterBottom>
                        Interfacing with the AWS SDK
                    </Typography>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                    >
                        <Box width={'100%'}>
                            <Typography paragraph>
                                The AWS JavaScript SDK is extremely easy to implement into a React app.
                                After installing each package using NPM, I implemented a base client class
                                which is shared amongst each AWS service clients that the app uses.
                                The base class provides a method for constructing the client configuration
                                object as well as a send method for performing API commands. Each client class
                                extends the base class.
                            </Typography>
                            <Typography paragraph>
                                A client class was made for the S3, Transcribe and STS services on AWS.
                            </Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
                            <Box width={'80vw'} maxWidth={'1000px'}>
                                <SyntaxHighlighter language="javascript" style={darcula} showLineNumbers>
                                    {awsBaseClass}
                                </SyntaxHighlighter>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box paddingTop={2}>
                    <Typography variant="h6" paragraph gutterBottom>
                        Persisting Transcription Data
                    </Typography>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                    >
                        <Box width={'100%'}>
                            <Typography paragraph>
                                Another important challenge to overcome was the persistence of transcription
                                data. It costs money to run the AWS Transcribe service, so keeping that
                                infomation around is imperative. Since Electron is a Chrome-based platform,
                                it means that it has access to IndexedDB baked in.
                            </Typography>
                            <Typography paragraph>
                                Two tables were created in the database. One called Jobs, and one called Files.
                                The concept of a "Job" is every audio file for one court proceeding. Jobs allow
                                the user to organize the files in a way that is easy to navigate. Each "File" is
                                an individual audio file. Each Job may have many Files.
                            </Typography>
                            <Typography paragraph>
                                The classes which handle the database transactions are too long to post here, but
                                the interfaces for the data structures of each File and Job objects are insightful
                                to how they structure the data:
                            </Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
                            <Box width={'80vw'} maxWidth={'1000px'}>
                                <SyntaxHighlighter language="javascript" style={darcula} showLineNumbers>
                                    {FileIF}
                                </SyntaxHighlighter>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box paddingTop={2}>
                    <Typography variant="h6" paragraph gutterBottom>
                        Settings and AWS Credentials
                    </Typography>
                    <Box
                        display={'flex'}
                        flexDirection={smallWindow ? 'column' : 'row'}
                    >
                        <Box width={smallWindow ? '100%' : '40%'}>
                            <Typography paragraph sx={{ paddingTop: 1 }} gutterBottom>
                                The first version of the app had AWS keys, region, and S3 bucket name hard
                                coded in the app. This was fixed in the new version via an app drawer UI
                                element to show and change the user settings
                            </Typography>
                            <Typography paragraph gutterBottom>
                                The UI allows the user to load keys from a CSV file. It then validates
                                the keys, and allows the user to select an AWS region and then enter
                                an S3 bucket name.
                            </Typography>
                        </Box>
                        <Box flex={1}>
                            <img src={settingsUi} width={'100%'} />
                        </Box>
                    </Box>
                </Box>

                <Box paddingTop={2}>
                    <Typography variant="h6" paragraph gutterBottom>
                        AWS Account Configuration
                    </Typography>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                    >
                        <Box width={'100%'}>
                            <Typography paragraph>
                                This is one of the manual steps that the user must perform in their own
                                AWS accounts. The user needs an IAM user with proper permissions and an
                                S3 bucket that must be created with the proper CORS policy
                                in order for the AWS SDK to be able to access it. A CloudFormation
                                template was generated in order to facilitate this in a simple manner.
                            </Typography>
                            <Typography paragraph>
                                Once the CloudFormation stack is created, the user must go in to the IAM dashboard
                                and create a set of access tokens to load into the app.
                            </Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
                            <Box width={'80vw'} maxWidth={'1000px'}>
                                <SyntaxHighlighter language="yaml" style={darcula} showLineNumbers>
                                    {cloudformationYaml}
                                </SyntaxHighlighter>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box paddingTop={2}>
                    <Typography variant="h5" paragraph gutterBottom>
                        Final Design
                    </Typography>
                    <Box
                        display={'flex'}
                        flexDirection={smallWindow ? 'column' : 'row'}
                    >
                        <Box width={smallWindow ? '100%' : '40%'}>
                            <Typography paragraph sx={{ paddingTop: 1 }} gutterBottom>
                                Once all of the challenges and UX issues were addressed, and the app
                                was polished and given out for beta testing. The app features include:
                            </Typography>
                            <ul>
                                <li>
                                    Cross-platform fully self-contained electron application and installers.
                                </li>
                                <li>
                                    One-click transcription, start to finish
                                </li>
                                <li>
                                    Multithreaded, allowing the app to transcribe multiple files at once.
                                </li>
                                <li>
                                    User-friendly settings for managing AWS credentials.
                                </li>
                                <li>
                                    Fully integrated database of transcription data
                                </li>
                            </ul>
                        </Box>
                        <Box flex={1}>
                            <img src={dash} width={'100%'} />
                        </Box>
                    </Box>
                </Box>

                <Box paddingTop={2}>
                    <Typography variant="h5" paragraph gutterBottom>
                        Future Considerations
                    </Typography>
                    <Box
                        display={'flex'}
                        flexDirection={smallWindow ? 'column' : 'row'}
                    >
                        <Box width={'100%'}>
                            <Typography paragraph sx={{ paddingTop: 1 }} gutterBottom>
                                This app is still is development. In the future, adding AWS Transcribe
                                options to allow for voice recognition, custom dictionaries, etc, will
                                make the user experience better. Adding a custom text editor so that
                                transcripts can be edited directly in the app would also be a beneficial
                                feature. Finally, expanding the target audience from just court 
                                transcriptions to the podcast and video production sectors for creating
                                captions would increase user demand significantly.
                            </Typography>
                            <Typography paragraph sx={{ paddingTop: 1 }} gutterBottom>
                                Due to the development potential of this project, I have chosen not 
                                to make all of the source code public at this time.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </ProjectBody>
            <ProjectsReturnButton />
        </Box>
    );
}