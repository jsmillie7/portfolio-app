import {Box, Card, CardContent, Container, Grid, Stack, Typography} from "@mui/material";
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import bioImg from './assets/bio.jpg'
import Skill from './Skill'

export default function Biography() {

    function aboutMe () {
        return (
            <Typography
                paragraph
                sx={{
                    fontSize: 16,
                    fontWeight: 'light',
                    opacity: '100%'
                }}
            >
                Python connoisseur, software and web developer with a passion for creating clean, intuitive,
                and efficient software solutions using object-oriented code. I enjoy creating user-friendly experiences with an attention to detail.
            </Typography>
        )
    }

    return (
            <Box
                sx={{
                    bgcolor: 'Background.default',
                    minHeight: '100vh',
                    width: '100%',
                    // border: 'solid white 5px',
                }}
            >
                <Box
                sx={{
                    position: 'relative',
                    bgcolor: 'Background.default',
                    width: '100%',
                }}
            >
                <img src={bioImg} width={'100%'} style={{display: 'block'}} alt={'James Smillie at Banff National Park'}/>
                <Box
                    sx={{
                        bgcolor: 'background.light',
                        opacity: '85%',
                        width: '50%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0
                    }}
                />
                <Card
                    sx={{
                        bgcolor: 'transparent',
                        opacity: '100%',
                        borderRadius: "0px",
                        width: '50%',
                        height: '100%',
                        paddingLeft: isMobile ? '0' : '60px',
                        paddingRight: isMobile ? '0' : '20px',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        overflow: 'auto'
                    }}
                    elevation={0}
                >
                    <CardContent>
                        <Box>
                            <Typography
                                variant={'body1'}
                                sx={{
                                    fontFamily: 'Monospace',
                                    fontSize: 16,
                                }}
                            >
                                Hey there, I'm
                            </Typography>
                            <Typography variant={'h4'} gutterBottom color={'text.secondary'} sx={{ fontWeight: 520}}>
                                James Smillie.
                            </Typography>
                            <BrowserView>
                                {aboutMe()}
                            </BrowserView>
                        </Box>

                    </CardContent>
            </Card>
        </Box>
            <MobileView>
                <Box 
                    sx={{
                        bgcolor: 'background.light', 
                        paddingTop: '20px', 
                        paddingBottom: '20px', 
                        paddingX: '20px'}}>
                    {aboutMe()}
                </Box>
            </MobileView>
            <Container 
                maxWidth={'lg'} 
                sx={{
                    alignItems: 'center',
                    justifyContent: 'stretch',
                    // display: 'flex',
                    marginY: '30px',
                    // border: 'solid white 2px',
                }}
            >
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={3}
                    >
                        <Grid item xs={'auto'}>
                            <Skill />
                        </Grid>
                        <Grid item xs={'auto'}>
                            <Skill />
                        </Grid>
                        <Grid item xs={'auto'}>
                            <Skill />
                        </Grid>
                    </Grid>
            </Container>
            
        </Box>
    );
}


