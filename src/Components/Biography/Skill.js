import { 
    Card, 
    CardContent, 
    CardActions, 
    Stack, 
    Typography, 
    IconButton, 
    Tooltip
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Skill(props) {
    const skill = props.skill

    return (
        <Card
            sx={{
                bgcolor: 'background.default',
                // margin: '20px',
                padding: '5px',
                // flex: 1,
                // border: 'solid #ede4d3 1px',
                border: 'solid #393E46 1.5px',
                // width: 'max-content',
                // width: 'min-content',
                width: '300px',
                // justifyContent: 'center',
                alignItems: 'center',
                justifyContent: "center", 
                display: "flex", 
                flexDirection: "column"
            }}
            elevation={5}
        >
            {/* <CardMedia> */}
                
            {/* </CardMedia> */}
            <CardContent>
                <Stack 
                    direction={'row'} 
                    spacing={2} 
                    justifyContent="flex-start"
                    alignItems="center"
                >
                {skill.icon}
                <div>
                <Typography color={'text.primary'} fontWeight={'600'} width={'max-content'}>
                    {skill.title}
                </Typography>
                <Typography color={'text.primary'} fontSize={'12px'} fontWeight={'400'}>
                    {skill.subtitle}
                </Typography>
                </div>
                </Stack>
            </CardContent>
            <CardActions>
                <Tooltip
                    title={'Expand'}
                >
                <IconButton 
                    aria-label="expand"
                    color={'primary'}
                >
                    <KeyboardArrowDownIcon />
                </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    )
}