import { Box, Stack } from "@mui/material";
import { getPages } from "../../pages";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../App";


export default function Home() {
    const pages = getPages();

    return (
        <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch"
            spacing={0}
            width={'100%'}
        >
            {pages.map((page, idx) => <ObservedContainer page={page} key={idx} />)}
        </Stack>
    )
}


function ObservedContainer(props) {
    const { allPages, setCurrentPage, currentPage } = useContext(AppContext)
    const PageComponent = props.page.component
    const pageRef = useRef()
    const [inView, setInView] = useState(false)
    const visible = useRef(null)
    visible.current = false
    const isTop = useRef(null)
    isTop.current = false

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting !== visible.current) {
                    if (entry.isIntersecting) {
                        console.log(props.page.dispName, ' entered screen')
                        allPages.current.push(props.page.index)
                        let topPage = Math.min(...allPages.current)
                        if (topPage === 0) {
                            setCurrentPage(topPage)
                        }
                    } else {
                        console.log(props.page.dispName, ' exited screen')
                        allPages.current = allPages.current.filter(e => e !== props.page.index);
                        console.log('All Pages = ', JSON.stringify(allPages.current))
                        let topPage = Math.min(...allPages.current)
                        if (topPage !== Infinity) {
                            setCurrentPage(topPage)
                        }
                    }
                    visible.current = entry.isIntersecting
                }
            },
            {
                threshold: 0.2
            }
        );
        if (pageRef.current) {
            observer.observe(pageRef.current);
        }
        return () => {
            observer.unobserve(pageRef.current);
        };
    })

    return (
        <Box
            sx={{
                alignItems: 'stretch',
                justifyContent: 'center',
                display: 'flex',
                position: 'relative',
                flexDirection: 'column'
            }}
            ref={pageRef}
            maxWidth={'100vw'}
        >
            <div style={{ position: 'absolute', top: props.page.index === 0 ? '0px' : '-60px' }} id={props.page.urlName} />
            <PageComponent page={props.page} />
        </Box>
    )
}