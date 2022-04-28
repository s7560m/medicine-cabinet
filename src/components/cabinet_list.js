import {
    Button,
    Card,
    CardActions,
    CardContent, Rating,
    Typography
} from '@mui/material';
import {Delete, Edit} from '@mui/icons-material'
import {useDispatch} from "react-redux";
import {addNoteToCabinet, addRatingToCabinet, removeFromCabinet} from "../store/cabinetSlice";
import AddNoteModal from "./addNoteModal";
import {useState} from "react";

// converts MedicineObjects into renderable list of medicines
const Cabinet_list = (props) => {

    const dispatch = useDispatch();

    // Delete medicine from cabinet store based on the ID. "Delete" button onClick listener
    const deleteMedicine = (id) => {
        dispatch(removeFromCabinet(id))
    }

    // Add note to medicine from cabinet store based on the ID. "Add Note" button onClick listener
    const addNoteToMedicine = (note) => {
        // retrieve the ID from the state
        const id = openDialog.id;
        const payload = {id: id, note: note}
        setOpenDialog(prevState => { return {...prevState, state: false}});
        dispatch(addNoteToCabinet(payload))
    }



    // Add rating to medicine from cabinet store based on the ID. onChange listener for both <Ratings/>
    const [tempRating, setTempRating] = useState(null);
    const addRating = (id, rating, type) => {
        const payload = {id: id, rating: rating, type: type}
        dispatch(addRatingToCabinet(payload));

        // update screen afterward
        setTempRating(rating);
    }

    // return a unique name for each rating component
    const unique_name = () => Math.random().toString(36).slice(2);

    // handle dialog states
    const [openDialog, setOpenDialog] = useState({state: false, id: ''});
    const handleClose = () => {
        setOpenDialog(prevState => {
            return {...prevState, state: false}
        });
    };

    // render cabinet
    let list = [];
    props.cabinet.forEach(medicine => {

        list.push(
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{medicine.getName()}</Typography>
                    <Typography variant="body1" color="text.primary">Note: {medicine.getNote()}</Typography>
                    <div style={{height: "20px"}}/>
                    <Typography variant="body2" color="text.secondary">Side effect rating: {medicine.getSideEffectRating()}</Typography>
                    <Rating
                        name={unique_name()}
                        value={medicine.getSideEffectRating()}
                        onChange={(event, newValue) => {
                            addRating(medicine.getID(), newValue, "side effect");
                        }}
                    />
                    <div style={{height: "20px"}}/>
                    <Typography variant="body2" color="text.secondary">Effectiveness rating: {medicine.getEffectivenessRating()}</Typography>
                    <Rating
                        name={unique_name()}
                        value={medicine.getEffectivenessRating()}
                        onChange={(event, newValue) => {
                            addRating(medicine.getID(), newValue, "effectiveness");
                        }}
                    />
                </CardContent>
                <CardActions>
                    <Button size="small" color="black" onClick={() => deleteMedicine(medicine.getID())}><Delete/>Delete</Button>
                    <Button size="small" color="black" onClick={() => setOpenDialog({state: true, id: medicine.getID()})}><Edit/>Add Note</Button>
                </CardActions>
            </Card>,
            <div style={{height: "20px"}}/>
        )
    })

    const medicineListStyle = {
        paddingBottom: '20px',
        textAlign: 'left',
    }

    return (
        <div style={medicineListStyle}>
            <AddNoteModal open={openDialog.state} handleClose={handleClose} addNote={addNoteToMedicine}/>
            {list}
        </div>
    )
};

export default Cabinet_list;