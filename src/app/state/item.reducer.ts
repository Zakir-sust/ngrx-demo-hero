import { createReducer, on } from '@ngrx/store';
import { AddItem, RemoveItem } from './item.actions';
import { Item } from '../models/item.model';
const initialState: Item[] = [];

export const ItemReducer = createReducer(
  initialState,
  on(AddItem, addItemFunction),
  on(RemoveItem, RemoveItemFunction)
);

function addItemFunction(state: Item[], Item: any) {
  let data = [...state, Item];
  return data;
}

function RemoveItemFunction(state: Item[], Item: any) {
  let res =  state.filter((item) => item.name != Item.name );
  return res;
}

