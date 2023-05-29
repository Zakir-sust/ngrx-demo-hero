import { createSelector } from "@ngrx/store";
import { AppState } from "../models/data.model";


export const selectItems = createSelector(
    (state : any) => state.def, 
    (state : AppState) => state.items
);