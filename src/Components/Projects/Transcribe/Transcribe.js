import { Box, Container, Typography } from '@mui/material';
import topoImg from '../../../images/topo.png';
import { useNavigate } from 'react-router-dom';
import Hero from '../../shared/hero';
import { useContext } from 'react';
import { AppContext } from '../../../App';
// import dash from './images/transcribe_dashboard_hero.png';
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
import './transcribe.css';

export default function Transcribe() {
    const { isMobile } = useContext(AppContext);
    const spacing = isMobile ? 1 : 2;
    const navigate = useNavigate();

    return (
        <Box>
            <Hero
                // backgroundImage={dash}

                // backgroundSize={'contain'}
                backgroundSize={isMobile ? 'contain' : 'cover'}
                BoxProps={{

                    background: 'linear-gradient(#222831 50%, #B55400 125%)',
                    // bgcolor: 'background.light',
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
                    <img src={dash} style={{maxHeight: '100%', maxWidth: '100%'}}/>
                </Box>
                {/* <Box border={'1px solid red'} height={'100%'} width={'100%'} /> */}
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
            </ProjectBody>
            <ProjectsReturnButton />
        </Box>
    );
}