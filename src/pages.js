import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import ArchitectureOutlinedIcon from '@mui/icons-material/ArchitectureOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import TopPanel from "./Components/TopPanel/TopPanel";
import Contact from "./Components/Contact/Contact"
import Dummy from "./Components/Dummy/Dummy";
import Biography from './Components/Biography/Biography';

let pages = [
    {
        index: 0,
        urlName: "home",
        dispName: "Home",
        icon: <HomeOutlinedIcon color={"icon"} fontSize={"medium"}/>,
        component: TopPanel
    },
    {
        index: 1,
        urlName: "biography",
        dispName: "Biography",
        icon: <PersonOutlineRoundedIcon fontSize={"medium"}/>,
        component: Biography
    },
    {
        index: 2,
        urlName: "work",
        dispName: "Work",
        icon: <WorkOutlineOutlinedIcon fontSize={"medium"}/>,
        component: Dummy
    },
    {
        index: 3,
        urlName: "software",
        dispName: "Software",
        icon: <CodeRoundedIcon fontSize={"medium"}/>,
        component: Dummy
    },
    {
        index: 4,
        urlName: "hardware",
        dispName: "Hardware",
        icon: <ArchitectureOutlinedIcon fontSize={"medium"}/>,
        component: Dummy
    },
    {
        index: 5,
        urlName: "contact",
        dispName: "Contact",
        icon: <EmailOutlinedIcon fontSize={"medium"}/>,
        component: Contact
    }
]

export function getPages() {
    return pages;
}

export function getPage(urlName) {
    return pages.find(
        (page) => page.urlName === urlName
    );
}