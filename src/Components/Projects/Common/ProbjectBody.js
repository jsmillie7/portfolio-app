import { Container } from "@mui/material";

export default function ProjectBody({ children }) {

    return (
        <Container
            maxWidth={'lg'}
            sx={{
                marginTop: 3,
                // minHeight: '200vh'

            }}
        >
            {children}
        </Container>
    );
} 