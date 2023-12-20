import { Box, Button, Typography } from "@mui/material";
import pathSvg from './images/path.svg';
import { createContext, useContext, useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { AppContext } from "../../App";


const EventContext = createContext();

export default function Event({
    icon,
    title,
    location,
    children
}) {
    const { smallWindow } = useContext(AppContext);

    return (
        <EventContext.Provider value={{ smallWindow }}>
            <Box
                id={'event-container'}
                border={'1px solid #393E46'}
                borderRadius={'5px'}
                padding={'1rem'}
                width={smallWindow ? '90vw' : '70vw'}
                height={smallWindow ? '75vh' : '70vh'}
                className={smallWindow ? 'experience snap-item col' : 'experience snap-item row'}
                flexShrink={0}
            >
                <Box
                    id={'event-title-panel'}
                    borderRight={smallWindow ? '' : '1px solid #393E46'}
                    borderBottom={smallWindow ? '1px solid #393E46' : ''}
                    width={smallWindow ? '100%' : '35%'}
                    paddingRight={smallWindow ? 0 : '1rem'}
                    paddingBottom={smallWindow ? '1rem' : 0}
                    className={smallWindow ? 'row' : 'col'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    gap={smallWindow ? '0.5rem' : '2rem'}
                >
                    <Box
                        id={'event-title-panel-logo'}
                        flex={smallWindow ? 0.3 : 0}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <img
                            src={icon}
                            alt=''
                            height={'100%'}
                            style={{
                                maxWidth: smallWindow ? '100%' : '80%',
                                opacity: '70%'
                            }}
                        />
                    </Box>
                    <Box
                        id={'event-title-panel-text'}
                        flex={smallWindow ? 1 : 0}
                    >
                        <Typography
                            align={'center'}
                            variant={smallWindow ? 'h6' : 'h5'}
                        >
                            {title}
                        </Typography>
                        <Typography
                            align={'center'}
                            variant={smallWindow ? 'body1' : 'h6'}
                        >
                            {location}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    id={'event-details-panel'}
                    marginLeft={smallWindow ? '' : '1rem'}
                    marginTop={smallWindow ? '1rem' : ''}
                    flex={1}
                    className={'col'}
                    justifyContent={'space-between'}
                    alignItems={'flex-start'}
                    gap={'1rem'}
                    overflow={'auto'}
                >
                    {children}
                </Box>
            </Box>
        </EventContext.Provider>
    );
}

export function EventSeparator() {

    return (
        <Box
            height={'100px'}
            width={'100px'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            flexShrink={0}
        >
            <img src={pathSvg} width={'100px'} />
        </Box>
    );
}

export function EventSection({ title, subtitle, children }) {
    const { smallWindow } = useContext(EventContext);

    return (
        <Box className="col">
            <Typography variant={smallWindow ? 'h6' : 'h5'}>
                {title}
            </Typography>
            <Typography variant={smallWindow ? 'body2' : 'body1'} sx={{ display: !!subtitle ? '' : 'none' }}>
                {subtitle}
            </Typography>
            {children}
        </Box>
    );
}

export function EventBody({ children }) {
    return (
        <Box
            className={"col"}
            justifyContent={'flex-start'}
            height={'100%'}
            width={'100%'}
            overflow={'auto'}
            // gap={'1rem'}
        >
            {children}
        </Box>
    );
}

export function EventTimeline({ title, subtitle, last, children }) {
    last = !!last || false;

    return (
        <Box
            id={'timeline-container'}
            className="row"
            // padding={2}
        >
            <Box
                id={'timeline-connectors'}
                className={'col'}
                // alignItems={'center'}
                // padding={''}
            >
                <Box id={'circle'} />
                <Box id={'line'} flex={1} display={last ? 'none' : ''}/>
            </Box>
            <Box id={'timeline-body'} >
                <EventSection
                    title={title}
                    subtitle={subtitle}
                >
                    {children}
                </EventSection>
            </Box>
        </Box>
    );
}