import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import CableRoundedIcon from '@mui/icons-material/CableRounded';
import ArchitectureOutlinedIcon from '@mui/icons-material/ArchitectureOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import LinkRoundedIcon from '@mui/icons-material/LinkRounded';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Expenses from "./Components/Expenses/Expenses";
import Dummy from "./Components/Dummy/Dummy";

let pages = [
    {
        index: 0,
        urlName: "",
        dispName: "Home",
        icon: <HomeOutlinedIcon color={"icon"} fontSize={"medium"}/>,
        component: Expenses
    },
    {
        index: 1,
        urlName: "biography",
        dispName: "Biography",
        icon: <PersonOutlineRoundedIcon fontSize={"medium"}/>,
        component: Dummy
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
        component: Dummy
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