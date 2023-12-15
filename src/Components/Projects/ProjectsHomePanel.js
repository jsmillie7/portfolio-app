import { Box, Button, Container, Divider, Stack, Typography, useTheme } from "@mui/material";
import { ProjectsGrid } from "./Projects";
import { useNavigate } from "react-router-dom";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useContext } from "react";
import { AppContext } from "../../App";



export default function ProjectsHomePanel() {
    const navigate = useNavigate()
    const theme = useTheme();
    const {isMobile} = useContext(AppContext);

    return (
        <Box paddingY={2}>
            <Container maxWidth={'lg'}>
                <Box
                    display={'flex'}
                    flexDirection={'row'}
                    alignItems={'center'}
                    paddingY={2}
                    paddingLeft={isMobile ? 0 : 2}
                >
                    <KeyboardArrowRightIcon fontSize={'large'} />
                    <Typography
                        variant="h4"
                        fontWeight={'200'}
                    >
                        Projects
                    </Typography>
                </Box>

                <ProjectsGrid maxProjects={4} />
                <Divider sx={{ marginY: 2 }}>
                    <Button
                        size={'large'}
                        onClick={() => navigate('/projects')}
                        sx={{ color: theme.palette.text.primary }}
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