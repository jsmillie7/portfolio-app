import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../App";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


export default function SectionTitle({ title }) {
    const { smallWindow } = useContext(AppContext)

    return (
        <Box
            id={'section-title'}
            className={'row'}
            alignItems={'center'}
            paddingTop={4}
            paddingBottom={2}
            marginX={smallWindow ? '' : '10vw'}
        >
            <KeyboardArrowRightIcon fontSize={'large'} />
            <Typography variant={smallWindow ? 'h5' : 'h4'} fontWeight={300}>
                {title}
            </Typography>
        </Box>
    );
}