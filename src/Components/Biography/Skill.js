import {
    Card,
    CardContent,
    CardActions,
    Stack,
    Typography,
    IconButton,
    Tooltip,
    Icon,
    Box,
    Divider
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
        <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            width={'300px'}
            background={'background.default'}
            border={'1.5px solid #393E46'}
            borderRadius={'5px'}
            padding={'10px'}
            sx={{
                opacity: exitOpacity,
                ':hover': {
                    opacity:  enterOpacity
                }
            }}
        >
            <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                padding={2}
            >
                <Icon sx={{ display: 'flex', width: iconSize, height: iconSize, position: 'relative', zIndex: 0, 
                // opacity: iconOpacity 
                }}>
                    <img src={skill.icon} height={iconSize} width={iconSize} />
                </Icon>
            </Box>
            <Box>
                <Typography
                    color={'text.primary'}
                    fontWeight={'600'}
                    gutterBottom
                >
                    {skill.title}
                </Typography>
            </Box>
            {/* <Divider flexItem/> */}
            <Box
                // border={'1px solid red'}
                width={'90%'}
                
                // margin={2}
            >
                <Typography color={'text.primary'} fontSize={'12px'} fontWeight={'400'} align={'center'}>
                    {skill.subtitle}
                </Typography>
            </Box>
        </Box>
    )

    return (
        <Card
            sx={{
                bgcolor: 'background.default',
                padding: '5px',
                border: 'solid #393E46 1.5px',
                width: '300px',
                alignItems: 'center',
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
            }}
            elevation={5}
            onMouseEnter={() => setIconOpacity(enterOpacity)}
            onMouseLeave={() => setIconOpacity(exitOpacity)}
        >
            <CardContent>

                <Stack
                    direction={'column'}
                    spacing={2}
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <Icon sx={{ display: 'flex', width: iconSize, height: iconSize, position: 'relative', zIndex: 0, opacity: iconOpacity }}>
                        <img src={skill.icon} height={iconSize} width={iconSize} />
                    </Icon>
                    <Typography color={'text.primary'} fontWeight={'600'} width={'max-content'}>
                        {skill.title}
                    </Typography>
                    <Typography color={'text.primary'} fontSize={'12px'} fontWeight={'400'}>
                        {skill.subtitle}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}