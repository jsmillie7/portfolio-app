import { Typography, Icon, Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import './skill.css'

export default function Skill(props) {
    const { smallWindow } = useContext(AppContext);
    const [iconSize, setIconSize] = useState('');

    const skill = props.skill;
    // const iconSize = props.iconSize || 80
    const exitOpacity = props.exitOpacity || '50%';
    const enterOpacity = props.enterOpacity || '100%';
    const width = props.width || '300px';

    useEffect(() => {
        setIconSize(smallWindow ? '50vw' : 80);
    }, [smallWindow]);


    return (
        <Box
            id={'skill-container'}
            className={'col skill-container'}
            background={'background.default'}
        >
            <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                padding={2}
            >
                <img
                    src={skill.icon}
                    height={iconSize}
                    width={iconSize}
                    className={'skill-icon'}
                />
            </Box>
            <Box id={'skill-title'}>
                <Typography
                    color={'text.primary'}
                    fontWeight={'400'}
                    gutterBottom
                    sx={{ userSelect: 'none' }}
                >
                    {skill.title}
                </Typography>
            </Box>
            <Box
                id={'skill-subtitle'}
                width={'90%'}
                sx={{ display: smallWindow ? 'none' : '' }}
            >
                <Typography
                    color={'text.primary'}
                    fontSize={'12px'}
                    fontWeight={'200'}
                    align={'center'}
                    sx={{ userSelect: 'none' }}
                >
                    {skill.subtitle}
                </Typography>
            </Box>
        </Box>
    );
}