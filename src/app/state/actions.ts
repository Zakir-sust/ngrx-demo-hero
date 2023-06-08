import { createAction, props } from "@ngrx/store";
import { Item } from "../models/item.model";
import { Hero } from "../models/hero.model";

export const AddItem = createAction('[Item] add item', props<{item : Item}>());
export const RemoveItem = createAction('[Item] remove item', props<{item : Item}>());
export const GetItem = createAction('[Item] get item');
export const AddHero = createAction('[Hero] add hero', props<{hero : Hero}>());
export const RemoveHero = createAction('[Hero] remove hero', props<{hero : Hero}>());
export const GetHeroes = createAction('[Hero] Get Heroes');
export const GetHeroesSuccess = createAction('[Hero] get hero success', props<{heroes : Hero[]}>());
export const GetHeroesFailure = createAction('[Hero] get hero failure');
export const GetItems = createAction('[Item] Get Items');
export const GetItemsSuccess = createAction('[Item] get Item success', props<{items : Item[]}>());
export const GetItemsFailure = createAction('[Item] get Item failure');
