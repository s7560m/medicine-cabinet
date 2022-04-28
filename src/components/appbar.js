import {AppBar, Box, Button, TextField, Toolbar, Typography} from "@mui/material";
import {useNavigate, useLocation} from "react-router-dom"
import './appbar.css'
import {useDispatch} from "react-redux";
import {filterMedicine} from "../store/medicineSlice";
import {Clear, Search} from "@mui/icons-material";
import {useState} from "react";
const AppBarFunction = () => {

    // set up router hooks
    const navigate = useNavigate();
    const location = useLocation();

    // navigate to specified path
    const redirectToPath = (path) => {
        navigate(path);
    }

    // get current route name, and disable search field and buttons when pathname is /cabinet
    // const [searchFunctionality, setSearchFunctionality] = useState(true);
    const getPathName = () => {
        if (location.pathname === "/") {
            return "List of medicines.";
        } else if (location.pathname === "/cabinet") {
            return "My cabinet."
        }
    }

    // set up our dispatch hooks, and filter our medicines array by our textfield input
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState("");

    // textfield onChange listener
    const updateSearchInputState = (event) => {
        setSearchInput(event.target.value);
    }

    // search button onClick listener
    const searchForMedicine = () => {
        dispatch(filterMedicine(searchInput))
    }

    // clear button onClick listener
    const clearForm = () => {
        dispatch(filterMedicine(""))
        setSearchInput("");
    }

    return (
        <AppBar color="grey">
            <Toolbar>
                <div id="typographyContainerStyling">
                    <Typography variant="h7" noWrap id="typographyStyling">
                    {getPathName()}
                    </Typography>
                </div>
                <Box sx={{flexGrow: 1}}/>
                <div id="textFieldContainerStyling">
                    <TextField onChange={updateSearchInputState} color="black"
                               label="Search for a medicine here."
                               id="textFieldStyling"
                               variant="outlined"
                               value={searchInput}/>
                </div>
                <Button color="black" onClick={searchForMedicine}><Search/>Search</Button>
                <Button color="black" onClick={clearForm}><Clear/>Clear</Button>
                <Box sx={{flexGrow: 1}}/>
                <div>
                    <Button color="black" onClick={() => redirectToPath('/')}>List of medicines</Button>
                    <div style={{width: "10px", display: "inline-block"}}/>
                    <Button color="black" onClick={() => redirectToPath('/cabinet')}>My cabinet</Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default AppBarFunction;