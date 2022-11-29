import {Box, Button, Card, CardActions, CardContent, Container, Typography} from "@mui/material";
import {useContext} from "react";
import {AppContext} from "../../App";

export default function Dummy(props) {
    const {currentPage, handleChange} = useContext(AppContext)
    return (
        <Container maxWidth="sm">
        <Card
            sx={{
                bgcolor: 'background.default',
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
                            fontSize: 30,
                            fontStyle: 'bold'
                        }}
                        color={'text.secondary'}
                    >
                        {props.page.dispName}
                    </Typography>
                    <Typography variant={"subtitle1"} paragraph maxWidth={"500px"}>
                        This section describes things related to <strong>{props.page.dispName}</strong>. There are many things to 
                        be done to make this page look good. Components will be built, layout will be tweaked,
                        designs will be iterated, brewskis consumed, and the overall ui will come together to 
                        make a cohesive, user-friendly web application which truly shows off my development skills, 
                        attention to detail, and overall ability to create a great looking, well functioning 
                        web application. This is just a placeholder for the real content. Definitly replace this, Jim.
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
        </Container>
    );
}