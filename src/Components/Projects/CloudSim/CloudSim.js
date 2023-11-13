import { Box, Typography } from '@mui/material'
import CsDashboard from '../../../images/cloudsim.png'
import Hero from '../../shared/hero'
import { useContext } from 'react'
import { AppContext } from '../../../App'

export default function CloudSim() {
    const { isMobile } = useContext(AppContext)

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
            <Box
                height={'100vh'}
                width={'100vw'}
                p={2}
            >
                <Typography variant='h4' align='center'>CloudSim</Typography>
            </Box>
            {/* </Hero> */}
        </Box>
    )
}