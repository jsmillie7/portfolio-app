import { AppBar, Button, Fade, IconButton, Toolbar, Tooltip, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate } from "react-router-dom";


export default function PortfolioAppBar() {
    const [showAppBar, setShowAppBar] = useState(false)
    const theme = useTheme();
    const navigate = useNavigate()

    useEffect(() => {
        const handleScroll = () => {
            const scrollPct = window.scrollY / window.innerHeight
            setShowAppBar(scrollPct > 0.1)
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function handleNavagate(nav) {
        navigate(nav)
        // window.history.pushState(nav)

        // window.location.href = nav
    }

    return (
        // <Fade in={showAppBar}>
            <AppBar
                position="fixed"
                sx={{
                    bgcolor: showAppBar ? "background.default" : 'transparent',
                    opacity: "95%",
                }}
                elevation={showAppBar ? 4 : 0}
            >
                <Toolbar
                    variant="dense"
                    position="sticky"
                >
                    <Typography
                        color={'text.primary'}
                        variant={'h5'}
                        component="div"
                        sx={{
                            fontFamily: 'monospace',
                            fontWeight: 450,
                            userSelect: 'none'
                        }}
                    // onClick={() => handleChange(0)}
                    >
                        js
                    </Typography>
                    <Typography
                        color={'background.light'}
                        variant={'h5'}
                        component="div"
                        sx={{
                            fontFamily: 'monospace',
                            fontWeight: 450,
                            userSelect: 'none'
                        }}
                    >
                        &nbsp;|&nbsp;
                    </Typography>
                    <Typography
                        color={'icon.default'}
                        variant={'h5'}
                        component="div"
                        sx={{
                            fontFamily: 'monospace',
                            flexGrow: 1,
                            fontWeight: 450,
                            userSelect: 'none'
                        }}
                    >
                        {/* {pages[currentPage].dispName.toLowerCase()} PAGE PLACEHOLDER */}
                    </Typography>
                    <Button
                        sx={{
                            textTransform: 'none',
                            color: theme.palette.text.primary,
                            '&:hover': {
                                color: theme.palette.text.secondary
                            }
                        }}
                        size={'small'}
                        onClick={() => handleNavagate('/')}
                    >
                        Home
                    </Button>
                    <Button
                        sx={{
                            textTransform: 'none',
                            color: theme.palette.text.primary,
                            '&:hover': {
                                color: theme.palette.text.secondary
                            }
                        }}
                        size={'small'}
                        onClick={() => handleNavagate('/projects')}
                    >
                        Projects
                    </Button>
                    <Tooltip title={'LinkedIn'} arrow>
                        <IconButton
                            sx={{
                                color: "text.primary",
                                // color: "background.light",
                                "&:hover": {
                                    color: "icon.default"
                                },
                                dropShadow: '#DCDCDC'
                            }}
                            size={'medium'}
                            href="https://www.linkedin.com/in/james-s-a03574124"
                            target="_blank"
                        >
                            <LinkedInIcon fontSize={"medium"} />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        // </Fade>
    )
}