import './cabinet.css';
import Cabinet_list from "../../components/cabinet_list";
import {useSelector} from "react-redux";
import AppBar from "../../components/appbar";
import {Box, Typography} from "@mui/material";

// user's cabinet so they can see their medicine and add notes to them
const Cabinet = () => {

    /* Retrieve the current cabinet state and display it. */
    const cabinet = useSelector((state) => {
        return state.cabinet
    });

    const GetCabinet = () => {
        if (cabinet.length !== 0) {
            return (
                <Cabinet_list cabinet={cabinet}/>
            );
        } else {
            return (
                <Box>
                    <Typography>Cabinet is empty. Add a medicine from the medicines list.</Typography>
                </Box>
            );
        }
    }

    return <div className="cabinet">
        <AppBar/>
        <div id="cabinet-list-padding"/>
        <GetCabinet/>
    </div>


}
export default Cabinet;