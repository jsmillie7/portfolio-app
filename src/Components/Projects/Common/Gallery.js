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
            margin={"0 1rem"}
        >
            {images.map((img, idx) => (
                <Box className={'snap-item'} key={idx} sx={{height: "60vh"}}>
                    <img key={idx} src={img} style={{ height: "100%", display: 'block' }} />
                </Box>
            ))}
        </Box>
    );
}