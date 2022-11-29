import { Box, Card, CardContent, Container, Typography, TextField, Stack, Button, FormControl, Snackbar } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { SendOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";


export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [showSnack, setShowSnack] = useState(false)

    function printData () {
        setShowSnack(true)
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Message: " + message);
        console.log("Emailing is not hooked up! Not doing anything!");
        setName('')
        setEmail('')
        setMessage('')
    }

    useEffect(() => {
        let timer = null;
        if (showSnack) {
            timer = setTimeout(() => {
                setShowSnack(false);
            }, 5000)
        }
    }, [showSnack])

    // const timer = setTimeout(() => {
    //     setShowSnack(false)
    // }, 500)

    return(
        <Container maxWidth="sm">
            <Card
                sx={{
                    bgcolor: 'background.default',
                    borderRadius: 0,
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
                            <MailOutlineIcon fontSize="large"/> Contact me
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
            <Box
                sx={{
                    height: '80vh'
                }}
            >
                <Stack
                    direction={"column"}
                    spacing={2}
                >
                    <Typography>
                    Need help with a project? I am interested in freelance development 
                    opportunities. Drop me a line! 
                    </Typography>
                <TextField 
                    id="name"
                    required
                    label={"name"}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <TextField 
                    id="email"
                    required
                    label={"email"}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField 
                    id="message"
                    required
                    label={"message"}
                    multiline
                    rows={6}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <Button
                    variant={"outlined"}
                    startIcon={<SendOutlined />}
                    onClick={printData}
                >
                    Message Me
                </Button>
                </Stack>

                {/* TODO: Make this into a modal dialog which slides up from button and covers the form! */}
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    open={showSnack}
                    message={"Not sent, emailing not hooked up yet!"}
                />
                    
            </Box>
        </Container>
    )
}