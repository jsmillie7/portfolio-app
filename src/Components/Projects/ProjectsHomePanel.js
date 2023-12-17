import { Box, Button, Container, Divider, Stack, Typography, useTheme } from "@mui/material";
import { ProjectsGrid } from "./Projects";
import { useNavigate } from "react-router-dom";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useContext } from "react";
import { AppContext } from "../../App";
import SectionTitle from "../shared/SectionTitle";



export default function ProjectsHomePanel() {
    const navigate = useNavigate();
    const theme = useTheme();
    const { smallWindow } = useContext(AppContext);

    return (
        <Box>
            <SectionTitle title={'Projects'} />
            <Box width={'100%'} display={'flex'} justifyContent={'center'}>
                <Box width={smallWindow ? '90vw' : '70vw'}>
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
                </Box>
            </Box>
        </Box>
    );
}
