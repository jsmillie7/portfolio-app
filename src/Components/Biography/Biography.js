import {Box, Button, Card, CardActions, CardContent, Container, Link, Typography} from "@mui/material";
import { useContext } from "react";
import { BrowserView, MobileView, isMobile } from 'react-device-detect';
import { AppContext } from "../../App";
import bioImg from './assets/bio.jpg'

export default function Biography() {
    const {currentPage, handleChange} = useContext(AppContext)

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
                Python connoisseur and software developer with experience in many languages and applications.
                I have a passion for creating clean, intuitive,
                and user-friendly experiences with an attention to detail.
                I currently support development and testing on several concurrent projects
                at <b><Link href={'https://txcorp.com'} target="_blank" rel="noopener" underline="hover">
                Tech-X Corporation</Link></b>.
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
                <img src={bioImg} width={'100%'} style={{display: 'block'}}/>
        <Card
            sx={{
                bgcolor: 'background.light',
                opacity: '90%',
                borderRadius: "0px",
                maxWidth: '45%',
                height: '100%',
                paddingLeft: isMobile ? '0' : '60px',
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
                            opacity: '100%'
                        }}
                    >
                        Hey there, I'm
                    </Typography>
                    <Typography variant={'h4'} gutterBottom color={'text.secondary'} sx={{ fontWeight: 520, opacity: '100%' }}>
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
        </Box>
    );
}


