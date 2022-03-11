import {Box, Button, Card, CardActions, CardContent, Link, Typography} from "@mui/material";
import {useContext} from "react";
import {AppContext} from "../../App";

export default function Dummy() {
    const {pages, currentPage} = useContext(AppContext)
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
                            fontSize: 30
                        }}
                    >
                        {pages[currentPage].dispName}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions>
                <Button
                    variant={'contained'}
                    color={'secondary'}
                >
                    button
                </Button>
            </CardActions>
        </Card>
    );
}