import { createSelector, createFeatureSelector } from "@ngrx/store";
import { Hero } from "../models/hero.model";
import { AppState } from "../models/data.model";

export const selectHero = createSelector(
    (state : any) => state.abc,
    (state : AppState) => state.heroes,
);