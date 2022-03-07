import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import CableRoundedIcon from '@mui/icons-material/CableRounded';
import LinkRoundedIcon from '@mui/icons-material/LinkRounded';

let pages = [
    {
        urlName: "",
        dispName: "Home",
        icon: <HomeRoundedIcon color={"icon"} fontSize={"medium"}/>
    },
    {
        urlName: "biography",
        dispName: "Biography",
        icon: <PersonOutlineRoundedIcon fontSize={"medium"}/>
    },
    {
        urlName: "work",
        dispName: "Work",
        icon: <WorkOutlineRoundedIcon fontSize={"medium"}/>
    },
    {
        urlName: "software",
        dispName: "Software",
        icon: <CodeRoundedIcon fontSize={"medium"}/>
    },
    {
        urlName: "hardware",
        dispName: "Hardware",
        icon: <CableRoundedIcon fontSize={"medium"}/>,
    },
    {
        urlName: "contact",
        dispName: "Contact",
        icon: <LinkRoundedIcon fontSize={"medium"}/>
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