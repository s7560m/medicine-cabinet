const {createSlice} = require("@reduxjs/toolkit");

/* declare cabinet slice that will store all our cabinet info */
const cabinetSlice = createSlice({
    name: "cabinet",
    initialState: [], // has all the different MedicalObjects
    reducers: {
        addToCabinet(state, action) {
            state.push(action.payload);

        },
        removeFromCabinet(state, action) {
            // map state array into just the IDs and then determine whether the queried ID exists. Delete from array if it does
            const id = action.payload;
            const index = state.map(medicineObject => medicineObject.getID()).indexOf(id);
            if (index > -1) {
                state.splice(index, 1);
            }
        },
        addNoteToCabinet(state, action) {
            const id = action.payload.id;
            const note = action.payload.note;
            const index = state.map(medicineObject => medicineObject.getID()).indexOf(id);
            if (index > -1) {
                state[index].setNote(note);
            }
        },
        addRatingToCabinet(state, action) {
            const ratingType = action.payload.type;
            const id = action.payload.id;
            const rating = action.payload.rating;
            const index = state.map(medicineObject => medicineObject.getID()).indexOf(id);
            if (index > -1) {

                // check rating type
                if (ratingType === "effectiveness") {
                    state[index].setEffectivenessRating(rating);
                } else if (ratingType === "side effect") {
                    state[index].setSideEffectRating(rating);
                }
            }
            console.log(state.map(a => a))
        }
    }
})

export const {addToCabinet, removeFromCabinet, addNoteToCabinet, addRatingToCabinet} = cabinetSlice.actions;
export default cabinetSlice.reducer;