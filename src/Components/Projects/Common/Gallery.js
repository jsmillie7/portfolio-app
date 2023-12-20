import { Box } from "@mui/material";
import { useEffect, useRef } from "react";

export default function Gallery({ children }) {

    return (
        <Box
            width={'100%'}
            className={"col"}
            gap={'1rem'}
        >
            {children}
        </Box>

    );
}


export function GalleryRow({ images, end }) {
    const galleryRowRef = useRef();
    end = end || false;

    useEffect(() => {
        if (!end) return;
        setTimeout(() => {
            const maxLeft = galleryRowRef.current.scrollWidth - galleryRowRef.current.clientWidth;
            galleryRowRef.current.scrollTo({ left: maxLeft });
        }, 500);
    }, [galleryRowRef.current]);

    return (
        <Box
            width={'100%'}
            overflow={'auto'}
            ref={galleryRowRef}
            className={'row no-scrollbar snap-container'}
            gap={'1rem'}
        >
            {images.map((img, idx) => (
                <Box className={'snap-item'} key={idx}>
                    <img key={idx} src={img} style={{ width: '60vw', display: 'block' }} />
                </Box>
            ))}
        </Box>
    );
}