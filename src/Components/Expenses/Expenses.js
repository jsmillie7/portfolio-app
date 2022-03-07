import {Box, Button, Card, CardActions, CardContent, Link, Typography} from "@mui/material";

export default function Expenses() {
    return (
        <Card
            sx={{
                bgcolor: 'background.default',
                height: '100%'
            }}
            elevation={5}
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
                        Hey, I'm
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
                        Python connoisseur and full-stack developer who is interested in creating clean, intuitive,
                        and user-friendly experiences.
                        I currently support development and testing to several concurrent projects
                        at <b><Link href={'https://txcorp.com'} target="_blank" rel="noopener" underline="hover">
                        Tech-X Corporation</Link></b>.
                    </Typography>
                </Box>

            </CardContent>
            <CardActions>
                <Button
                    variant={'contained'}
                    color={'secondary'}
                >
                    Find out more
                </Button>
            </CardActions>
        </Card>
    );
}