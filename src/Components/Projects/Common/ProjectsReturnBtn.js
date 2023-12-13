import { Box, Button } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router-dom";


export default function ProjectsReturnButton() {
    const navigate = useNavigate();

    return (
        <Box height={'25vh'} p={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Button
                startIcon={<ArrowBackIosIcon />}
                onClick={() => navigate('/projects')}
                variant={'contained'}
            >
                Return to Projects
            </Button>
        </Box>
    );
}