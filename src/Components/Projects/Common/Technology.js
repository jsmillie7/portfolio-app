import { Box, Divider, Grid, Icon, Stack, Typography } from "@mui/material";
import topoImg from '../../../images/topo.png';


export default function Technology({ icons }) {

    return (
        <Box
            width={{
                xs: 'fit-content',
                sm: 'fit-content',
                md: 'fit-content',
                lg: 'fit-content',
                xl: 'fit-content'
            }}
            bgcolor={'background.default'}
            padding={1}
            borderRadius={2}
            border={'1px solid grey'}
            marginY={3}
            sx={{
                backgroundImage: `url(${topoImg})`,
            }}
        >
            <Divider>
                <Typography variant={'h6'} fontFamily={'Space Mono'}>Technology</Typography>
            </Divider>
            <Grid
                container
                spacing={4}
                sx={{ padding: 2 }}
            >
                {icons.map(icon => (
                    <Grid
                        item
                        xs
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {icon}
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}


export function PortfolioIcon({ icon, size, title }) {
    size = size || '50px'

    return (
        <Stack
            sx={{alignItems: 'center'}}
        >
            <Icon
                sx={{
                    width: size,
                    height: size,
                    zIndex: 0,
                    marginBottom: 0.5,
                    opacity: 0.7,
                    ':hover': { opacity: 1 }
                }}
            >
                <img src={icon} height={size} width={size} />
            </Icon>
            <Typography
                fontFamily={'Space Mono'}
                variant={'caption'}
                align={'center'}
                sx={{ userSelect: 'none' }}
            >
                {title}
            </Typography>
        </Stack>
    )
}