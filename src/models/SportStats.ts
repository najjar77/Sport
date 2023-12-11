export interface SportStats {
    name: string;
    sportArt: string; // Assuming this is a string field for some kind of art related to sport.
    saunaArt: string; // Assuming this is a string field for some kind of art related to sauna.
    bcaa: boolean; // Checkbox for BCAA supplement.
    bcaaGr: number; // The grams of BCAA, assuming a numeric field.
    creatin: boolean; // Checkbox for Creatin supplement.
    creatinGr: number; // The grams of Creatin, assuming a numeric field.
    sauna: string; // This seems to be a dropdown or selectable field related to sauna.
    eaa: boolean; // Checkbox for EAA supplement.
    eaaGr: number; // The grams of EAA, assuming a numeric field.
    protein: boolean; // Checkbox for Protein supplement.
    proteinGr: number; // The grams of Protein, assuming a numeric field.
    notes: string; // A field for notes.
    feedback: string; // The feedback could be a string, if it's a text; or it could be an enum if there are set responses.
}