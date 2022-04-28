import MedicineObject from "../models/MedicineObject";

const {createSlice} = require("@reduxjs/toolkit");

// random array of medicines that we populate with MedicineObjects
let medicineNames = ["claritin", "benadryl", "benelyn", "buckleys", "vicks", "otrivin", "melatonin"]
    .map(name => new MedicineObject(name))

/* declare medicine slice that will store all our cabinet info */
const medicineSlice = createSlice({
    name: "cabinet",
    initialState: {
        medicineList: medicineNames, // list of all the medicines available
        filteredMedicineList: medicineNames, // copy medicine list initially bc this will eventually get filtered
        filteredSuccess: false // true if filteredMedicine does not return an empty array
    },
    reducers: {

        // we want to filter out the medicine list based on the user's search and return it in the UI
        filterMedicine(state, action) {
            state.filteredMedicineList = state.medicineList.filter(medicine => {
                return medicine.getName().includes(action.payload)
            });

            // updated filteredSuccess flag
            state.filteredSuccess = state.filteredMedicineList.length !== 0;

            console.log(state.filteredMedicineList);
        },

        // ONLY should be called when this is true
        resetFilteredSuccessFlag(state) {
            state.filteredSuccess = false;
        }


    }
})

export const {filterMedicine} = medicineSlice.actions;
export default medicineSlice.reducer;