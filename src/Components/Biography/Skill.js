import { Typography, Icon, Box } from "@mui/material";
import { useState } from "react";

export default function Skill(props) {
    const skill = props.skill
    const iconSize = props.iconSize || 80
    const exitOpacity = props.exitOpacity || '50%'
    const enterOpacity = props.enterOpacity || '100%'

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
                    opacity: enterOpacity,
                }
            }}
        >
            <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                padding={2}
            >
                <Icon
                    sx={{
                        display: 'flex',
                        width: iconSize,
                        height: iconSize,
                        position: 'relative',
                        zIndex: 0,
                        userSelect: 'none',
                    }}
                >
                    <img src={skill.icon} height={iconSize} width={iconSize} style={{userSelect: 'none'}}/>
                </Icon>
            </Box>
            <Box>
                <Typography
                    color={'text.primary'}
                    fontWeight={'400'}
                    gutterBottom
                    sx={{userSelect: 'none'}}
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
                <Typography
                    color={'text.primary'}
                    fontSize={'12px'}
                    fontWeight={'200'}
                    align={'center'}
                    sx={{userSelect: 'none'}}
                >
                    {skill.subtitle}
                </Typography>
            </Box>
        </Box>
    )
}