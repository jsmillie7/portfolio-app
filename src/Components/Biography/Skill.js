import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

export default function Skill() {

    return (
        <Card
            sx={{
                bgcolor: 'background.default',
                // margin: '20px',
                padding: '5px',
                // flex: 1,
                border: 'solid #ede4d3 1px',
                // width: 'max-content',
                width: 'min-content',
                // justifyContent: 'center',
                alignItems: 'center',
                justifyContent: "center", 
                display: "flex", 
                flexDirection: "column"
            }}
        >
            {/* <CardMedia> */}
                
            {/* </CardMedia> */}
            <CardContent>
                <Stack direction={'row'} spacing={2}>
                <SchoolOutlinedIcon sx={{width: '40px', height: '40px', color: "icon.default"}} />
                <div>
                <Typography color={'text.primary'} fontWeight={'600'} width={'max-content'}>
                    Bachelor of Arts, Physics
                </Typography>
                <Typography color={'text.primary'} fontSize={'12px'} fontWeight={'400'}>
                    University of Colorado, Boulder
                </Typography>
                </div>
                </Stack>
            </CardContent>
        </Card>
    )
}