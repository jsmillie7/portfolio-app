import { Box, Typography } from "@mui/material";


export default function ProjectTitle({ title, subtitle }) {

    return (
        <Box>
            <Box
                display={'flex'}
                flexDirection={{
                    xs: 'column',
                    sm: 'row',
                    md: 'row',
                    lg: 'row',
                    xl: 'row'
                }}
            >
                <Typography
                    variant={'body1'}
                    color={'text.secondary'}
                    fontWeight={200}
                    sx={{
                        typography: {
                            xs: 'h2',
                            sm: 'h2',
                            md: 'h2',
                            lg: 'h2',
                            xl: 'h2'
                        }
                    }}
                >
                    Project:&nbsp;
                </Typography>
                <Typography
                    color={'text.primary'}
                    sx={{
                        typography: {
                            xs: 'h2',
                            sm: 'h2',
                            md: 'h2',
                            lg: 'h2',
                            xl: 'h2'
                        }
                    }}
                    fontWeight={400}
                    gutterBottom
                >
                    {title}
                </Typography>
            </Box>
            <Typography variant={'h5'} fontWeight={200} sx={{display: !!subtitle ? '' : 'none'}}>
                {subtitle}
            </Typography>
        </Box>
    );
}