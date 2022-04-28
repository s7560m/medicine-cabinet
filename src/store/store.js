import { configureStore } from '@reduxjs/toolkit'
import cabinetSlice from './cabinetSlice'
import medicineSlice from './medicineSlice'

// store our "slices" of states in redux's store
export default configureStore({
    reducer: {
        cabinet: cabinetSlice,
        medicine: medicineSlice
    }
})