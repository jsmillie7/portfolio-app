import { AppBar, Button, Fade, IconButton, Toolbar, Tooltip, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function PortfolioAppBar() {
    const [showAppBar, setShowAppBar] = useState(false)
    const theme = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPct = window.scrollY / window.innerHeight
            setShowAppBar(scrollPct > 0.03)
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Fade in={showAppBar}>
            <AppBar
                position="fixed"
                sx={{
                    bgcolor: "background.default",
                    opacity: "95%",
                }}
                elevation={4}
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
                    >
                        Projects
                    </Button>
                    <Tooltip title={'LinkedIn'} arrow>
                        <IconButton
                            sx={{
                                color: "background.light",
                                "&:hover": {
                                    color: "icon.default"
                                }
                            }}
                            size={'large'}
                            href="https://www.linkedin.com/in/james-s-a03574124"
                            target="_blank"
                        >
                            <LinkedInIcon fontSize={"large"} />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </Fade>
    )
}