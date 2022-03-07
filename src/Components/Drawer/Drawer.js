import {getPages} from "../../pages";
import {Link, Outlet} from "react-router-dom";
import {Button, Collapse, Slide, Stack} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import {useState} from "react";


export default function AppDrawer() {
    const pages = getPages();
    let navigate = useNavigate();

    return(
        <div style={{ display: "flex" }}>
        {/*<div style={{ display: "inherit" }}>*/}
        {/*    <nav*/}
        {/*        style={{*/}
        {/*            borderRight: "solid 1px",*/}
        {/*            padding: "1rem",*/}
        {/*        }}*/}
        {/*    >*/}
                <MenuList>
                    {pages.map((page) => (
                        <DrawerItem page={page}/>
                    ))}
                </MenuList>
            {/*</nav>*/}
            <Outlet />
        </div>
    )
}

function DrawerItem(props){
    const [showText, setShowText] = useState(false)

    return (
        <MenuItem
            onMouseEnter={() => setShowText(true)}
            onMouseLeave={() => setShowText(false)}
        >
            <ListItemIcon>
                {props.page.icon}
            </ListItemIcon>
            <Collapse in={showText} orientation={"horizontal"}>
                <ListItemText>
                    {props.page.dispName}
                </ListItemText>
            </Collapse>
        </MenuItem>
    )
}