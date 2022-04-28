import MedicineList from '../../components/medicine_list'
import AppBar from "../../components/appbar";
import './medicines.css'
import {useSelector} from "react-redux";

const Medicines = () => {

    /* Retrieve the current medicine state and display it. */
    const medicines = useSelector((state) => {
        return state.medicine.filteredMedicineList;
    });

    return (
        <div>
            <AppBar/>
            <div id="medicines-list-padding"/>
            <MedicineList medicines={medicines}/>
        </div>
    )
}

export default Medicines;