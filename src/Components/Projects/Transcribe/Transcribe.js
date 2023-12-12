import { Box, Container, Typography } from '@mui/material';
import topoImg from '../../../images/topo.png';
import { useNavigate } from 'react-router-dom';
import Hero from '../../shared/hero';
import { useContext } from 'react';
import { AppContext } from '../../../App';
import dash from './images/transcribe_dashboard_hero.png';
import Technology, { PortfolioIcon } from '../Common/Technology';
import nodeLogo from '../../Biography/assets/node.svg'
import typescriptLogo from '../../Biography/assets/typescript.svg'
import reactLogo from '../../Biography/assets/react.svg'
import awsLogo from '../../Biography/assets/aws.svg'
import electronLogo from '../../Biography/assets/electron.svg'
import ProjectTitle from '../Common/ProjectTitle';

export default function Transcribe() {
    const { isMobile } = useContext(AppContext);
    const spacing = isMobile ? 1 : 2;
    const navigate = useNavigate();

    return (
        <Box>
            <Hero
                backgroundImage={dash}
                // backgroundSize={'contain'}
                backgroundSize={isMobile ? 'contain' : 'cover'}
                BoxProps={{
                    bgcolor: 'background.light',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* <Box border={'1px solid red'} height={'100%'} width={'100%'} /> */}
            </Hero>
            <Container
                maxWidth={'lg'}
                sx={{
                    marginTop: 3,
                    height: '200vh'
                }}
            >
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
            </Container>
        </Box>
    );
}