import { 
    Card, 
    CardContent, 
    CardActions, 
    Stack, 
    Typography, 
    IconButton, 
    Tooltip,
    Icon
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import buffsLogo from './assets/buffs.svg'
import { useState } from "react";

export default function Skill(props) {
    const skill = props.skill
    const iconSize = 80
    const exitOpacity = '50%'
    const enterOpacity = '100%'
    const [iconOpacity, setIconOpacity] = useState(exitOpacity)

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
                flexDirection: "column",
                // backgroundImage:  skill.icon
            }}
            elevation={5}
            onMouseEnter={() => setIconOpacity(enterOpacity)}
            onMouseLeave={() => setIconOpacity(exitOpacity)}
        >
            {/* <CardMedia> */}
                
            {/* </CardMedia> */}
            <CardContent>
                
                <Stack 
                    direction={'column'} 
                    spacing={2} 
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <Icon sx={{display: 'flex', width: iconSize, height: iconSize, position: 'relative', zIndex: 0, opacity: iconOpacity}}>
                        <img src={skill.icon} height={iconSize} width={iconSize}/>
                    </Icon>
                {/* {skill.icon} */}
                {/* <div> */}
                <Typography color={'text.primary'} fontWeight={'600'} width={'max-content'}>
                    {skill.title}
                </Typography>
                <Typography color={'text.primary'} fontSize={'12px'} fontWeight={'400'}>
                    {skill.subtitle}
                </Typography>
                {/* </div> */}
                </Stack>
            </CardContent>
            <CardActions>
                {/* <Tooltip
                    title={'Expand'}
                >
                <IconButton 
                    aria-label="expand"
                    color={'primary'}
                >
                    <KeyboardArrowDownIcon />
                </IconButton>
                </Tooltip> */}
            </CardActions>
        </Card>
    )
}