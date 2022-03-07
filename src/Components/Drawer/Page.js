import {useParams} from "react-router-dom";
import {getPage} from "../../pages";
import {Typography} from "@mui/material";

export default function Page() {
    let params = useParams();
    let pageData = getPage(params.pageUrl);

    return(
        <Typography>
            {pageData.dispName}
        </Typography>
    )

}