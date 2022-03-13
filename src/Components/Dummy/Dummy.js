import {Box, Button, Card, CardActions, CardContent, Link, Typography} from "@mui/material";
import { borderRadius } from "@mui/system";
import {useContext} from "react";
import {AppContext} from "../../App";

export default function Dummy(props) {
    const {pages, currentPage, handleChange} = useContext(AppContext)
    return (
        <Card
            sx={{
                bgcolor: 'background.default',
                // height: '100%',
                // width: '100vw',
                borderRadius: 0
            }}
            elevation={0}
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
                        {props.page.dispName}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions>
                <Button
                    variant={'contained'}
                    color={'secondary'}
                    onClick={() => handleChange(currentPage+1)}
                >
                    next section
                </Button>
            </CardActions>
        </Card>
    );
}