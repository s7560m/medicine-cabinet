class MedicineObject {
    // add medicine name and note when instantiating the MedicineObject

    constructor(name, note) {
        this.name = name;

        // add default note if no note was added
        if (this.note === undefined) {
            this.note = "No note provided for this medicine."
        } else {
            this.note = note;
        }

        // add random alphanumeric ID that we can index later
        this.id = Math.random().toString(36).slice(2);

        // initialize both ratings to null
        this.sideEffectRating = null;
        this.effectivenessRating = null;
    }

    // getters
    getName = () => this.name;
    getNote = () => this.note;
    getID = () => this.id;
    getSideEffectRating = () => this.sideEffectRating;
    getEffectivenessRating = () => this.effectivenessRating;

    // setters
    setName = (name) => { this.name = name; }
    setNote = (note) => { this.note = note; }
    setSideEffectRating  = (sideEffectRating) => {this.sideEffectRating = sideEffectRating}
    setEffectivenessRating = (effectivenessRating) => {this.effectivenessRating = effectivenessRating}
}

export default MedicineObject;