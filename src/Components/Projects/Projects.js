import { Box, Typography } from "@mui/material";
import Hero from "../shared/hero";
import topoImg from '../../images/topo.png'


export default function Projects() {

    return (
        <Box>
            <Hero backgroundImage={topoImg} scale={2}>
                <Typography>
                    Projects
                </Typography>
            </Hero>
            <Box
                height={'100vh'}
                width={'100vw'}
            >
                TThis is where projects go
            </Box>
        </Box>
    )
}