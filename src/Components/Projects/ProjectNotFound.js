import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function ProjectNotFound() {
    const navigate = useNavigate()

    return (
        <Box
            height={'100vh'}
            width={'100vw'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
            >
                <Typography variant="h1">
                    404
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Requested Project not Found
                </Typography>
                <Button 
                    sx={{textTransform: 'none'}} 
                    variant={'outlined'}
                    onClick={() => navigate('/projects')}
                >
                    Return  to Projects
                </Button>
            </Box>
    )
}