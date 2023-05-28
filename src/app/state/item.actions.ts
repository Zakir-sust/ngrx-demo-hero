import { createAction, props } from "@ngrx/store";
import { Item } from "../models/item.model";

export const AddItem = createAction('[Item] add item', props<Item>());
export const RemoveItem = createAction('[Item] remove item', props<Item>());
export const GetItem = createAction('[Item] get item');