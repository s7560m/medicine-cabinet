import {Add, Medication} from "@mui/icons-material";
import {Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Snackbar} from "@mui/material";
import {useDispatch} from "react-redux";
import {addToCabinet} from '../store/cabinetSlice'
import {useState} from "react";

const Medicine_list = (props) => {

    // set up snackbar state
    const [showSnackbar, setShowSnackbar] = useState(false);

    /* onClick event listener to pass medicine info to state. */
    const dispatch = useDispatch();
    const addMedicineToState = (medicine) => {
        dispatch(addToCabinet(medicine));
        setShowSnackbar(true);

        // wait two seconds, then hide snackbar
        setTimeout(() => {
            setShowSnackbar(false);
        }, 2000);
    }

    /* Iterate over list of medicine names and print out each one.
       Also add an add button that will add the medicine to the cabinet's state */
    const listOfMedicines = props.medicines;
    let list = [];
    listOfMedicines.forEach(medicine => {
        list.push(
            <ListItem>
                <ListItemIcon><Medication/></ListItemIcon>
                <ListItemText>{medicine.getName()}</ListItemText>
                <IconButton onClick={() => addMedicineToState(medicine)} edge="end" aria-label="delete">
                    <Add/>
                </IconButton>
            </ListItem>,
            <Divider component="li" />
        );
    })
    const medicineListStyle = {
        paddingBottom: '20px',
        textAlign: 'left',
        width: '70vw',
        margin: 'auto'
    }

    return (
        <div>
            <List style={medicineListStyle}>
                {list}
            </List>
            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                open={showSnackbar}
                message="Added medicine to cabinet."
            />
        </div>
    )
}

export default Medicine_list;