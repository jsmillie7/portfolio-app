import { Box, Button, Typography } from "@mui/material";
import pathSvg from './images/path.svg';


export default function Event({
    icon,
    title,
    location,
    children
}) {

    return (
        <Box
            border={'1px solid #393E46'}
            borderRadius={'1rem'}
            width={'70vw'}
            height={'70vh'}
            display={'flex'}
            flexDirection={'row'}
            padding={'1rem'}
            className="experience"
            flexShrink={0}
        >
            <Box
                borderRight={'1px solid #393E46'}
                width={'33%'}
                paddingRight={'1rem'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                gap={'2rem'}
            >
                <Box
                    width={'100%'}
                    // height={'30%'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <img src={icon} alt='' height={'100%'} style={{ maxWidth: '80%' }} />
                </Box>
                <Box
                    width={'100%'}
                >
                    <Typography
                        align={'center'}
                        variant={'h5'}
                    >
                        {title}
                    </Typography>
                    <Typography
                        align={'center'}
                        variant={'h6'}
                    >
                        {location}
                    </Typography>
                </Box>
            </Box>
            <Box
                marginLeft={'1rem'}
                flex={1}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'space-between'}
                alignItems={'flex-start'}
                gap={'1rem'}
            >
                {children}
            </Box>
        </Box>
    );
}

export function EventSeparator() {

    return (
        <Box
            height={'100px'}
            width={'100px'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            flexShrink={0}
        >
            <img src={pathSvg} width={'100px'} />
        </Box>
    );
}

export function EventTitle({ title, subtitle }) {

    return (
        <Box>
            <Typography variant="h5">
                {title}
            </Typography>
            <Typography variant="body1">
                {subtitle}
            </Typography>
        </Box>
    );
}