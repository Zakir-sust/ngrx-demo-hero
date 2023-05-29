import { createReducer, on } from '@ngrx/store';
import { AddItem, RemoveItem } from './item.actions';
import { Item } from '../models/item.model';
import { AppState } from '../models/data.model';
const initialState: AppState = {
  heroes : [],
  items : []
}

export const ItemReducer = createReducer(
  initialState,
  on(AddItem, addItemFunction),
  on(RemoveItem, RemoveItemFunction)
);

function addItemFunction(state: AppState, item: any) {
  return {
    ...state,
    items : [...state.items, item]
  }
}

function RemoveItemFunction(state: AppState, item: any) {
  const index = state.items.findIndex( data => data.name == item.name);
  if(index == -1) return state;
  return {...state,
          items : [ ...state.items.slice(0, index), ...state.items.slice(index + 1)]
  }
}

