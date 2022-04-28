import {
    Button,
    Dialog, DialogActions,
    DialogContent, DialogContentText,
    DialogTitle,
    TextField,
} from "@mui/material";
import {useState} from "react";

const AddNoteModal = (props) => {

    // textfield note state
    const [note, setNote] = useState("");

    // onChange listener
    const textfieldOnChangeListener = (event) => {
        setNote(event.target.value);
    }

    return (
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
                <DialogTitle id="alert-dialog-title">
                    Add a note.
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Add a note to your medicine using the form below.
                    </DialogContentText>
                    <div style={{height: "30px"}}/>
                    <TextField onChange={textfieldOnChangeListener} label="Type your note here..." style={{width: "400px"}}/>
                </DialogContent>
            <DialogActions>
                <Button color="black" onClick={() => props.addNote(note)}>Add</Button>
                <Button color="black" onClick={props.handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddNoteModal;