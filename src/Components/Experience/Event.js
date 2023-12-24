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
                id={'experience'}
                className={`snap-item ${smallWindow ? 'col' : 'row'}`}
            >
                <Box
                    id={'event-title-panel'}
                    className={smallWindow ? 'row' : 'col'}
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
                                maxWidth: smallWindow ? '100%' : '70%',
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
        <Box className="col" id={'event-section'}>
            <Typography variant={smallWindow ? 'h6' : 'h5'}>
                {title}
            </Typography>
            <Typography variant={smallWindow ? 'body2' : 'body1'} sx={{ display: !!subtitle ? '' : 'none' }}>
                {subtitle}
            </Typography>
            <Box id={'event-section-children'} className="col">
                {children}
            </Box>
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
            gap={'1rem'}
        >
            {children}
        </Box>
    );
}

export function EventTimelineBody({ children }) {
    return (
        <Box
            className={"col"}
            id={'timeline-body'}
        >
            {children}
        </Box>
    );
}

export function EventTimeline({ title, subtitle, first, last, children }) {
    first = !!first || false;
    last = !!last || false;

    return (
        <Box
            id={'timeline-container'}
            className="row"
        >
            <Box
                id={'timeline-connectors'}
                className={'col'}
            >
                <Box id={first ? 'noline' : 'line'} height={'0.5rem'} />
                <Box id={'circle'} />
                <Box id={'line'} flex={last ? 0 : 1} display={last ? 'none' : ''} />
            </Box>
            <Box
                id={'timeline-body-section'}
            >
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