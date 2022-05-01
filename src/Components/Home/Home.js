import {Box, Button, Card, CardActions, CardContent, Link, Typography} from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../App";

export default function Home() {
    const {currentPage, handleChange} = useContext(AppContext)

    return (
        <Card
            sx={{
                bgcolor: 'background.default',
            }}
            elevation={0}
        >
            <CardContent>
                <Box>
                    <Typography
                        variant={'body1'}
                        sx={{
                            fontFamily: 'Monospace',
                            fontSize: 16
                        }}
                    >
                        Hey there, I'm
                    </Typography>
                    <Typography variant={'h4'} gutterBottom color={'text.secondary'} sx={{ fontWeight: 520 }}>
                        James Smillie.
                    </Typography>
                    <Typography
                        maxWidth={"500px"}
                        paragraph
                        sx={{
                            fontSize: 16,
                            fontWeight: 'light'
                    }}
                    >
                        Python connoisseur and software developer with experience in many languages and applications.
                        I have a passion for creating clean, intuitive,
                        and user-friendly experiences with an attention to detail.
                        I currently support development and testing on several concurrent projects
                        at <b><Link href={'https://txcorp.com'} target="_blank" rel="noopener" underline="hover">
                        Tech-X Corporation</Link></b>.
                    </Typography>
                </Box>

            </CardContent>
            <CardActions>
                <Button
                    variant={'contained'}
                    color={'secondary'}
                    onClick={() => handleChange(currentPage+1)}
                >
                    Find out more
                </Button>
            </CardActions>
        </Card>
    );
}