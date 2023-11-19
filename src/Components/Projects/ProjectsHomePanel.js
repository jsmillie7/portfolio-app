import { Box, Button, Container, Divider, Stack, Typography } from "@mui/material";
import dashboardImg from '../../images/cloudsim.png'
import geoMtnImg from '../../images/mtn.jpg'
import { ProjectsGrid } from "./Projects";


export default function ProjectsHomePanel() {

    return (
        <Box paddingY={2}>
            <Container maxWidth={'lg'}>
                <Typography
                    align="center"
                    variant="h4"
                    // gutterBottom
                    fontWeight={'200'}
                    sx={{padding: 4}}
                >
                    Projects
                </Typography>
                <ProjectsGrid />
                <Divider sx={{marginY: 2}}>
                    <Button
                        size={'large'}
                    >
                        View All Projects
                    </Button>
                </Divider>
            </Container>
        </Box>
    )
}

function ProjectPreview({ title, description, image, reverse }) {
    reverse = reverse || false
    description = description || 'No Description Provided'

    return (
        <Box
            width={'100%'}
            display={'flex'}
            flexDirection={reverse ? 'row-reverse' : 'row'}
            bgcolor={'primary.main'}

            sx={{
                outline: '1px dashed #ede4d3',
                opacity: '75%',
                ':hover': {
                    // bgcolor: '#9B6A47',
                    opacity: '100%'
                    // outline: '1px dashed white'
                }
            }}
        >
            <Box
                // width={'70%'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                padding={4}
                flex={1}
            >
                <Typography
                    variant={'h4'}
                    fontWeight={200}
                >
                    {title}
                </Typography>
                <Typography
                    variant={'body1'}
                    fontWeight={200}
                >
                    {description}
                </Typography>

            </Box>
            <Box height={'150px'} >
                <img src={image} height={'100%'} style={{ display: 'block' }} />
            </Box>

        </Box>
    )
}