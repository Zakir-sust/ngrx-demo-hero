import { Action, createReducer, on } from '@ngrx/store';
import { AddHero, AddItem, RemoveHero, RemoveItem, GetHeroesSuccess, GetHeroesFailure, GetItemsSuccess } from './actions';
import { Hero } from '../models/hero.model';
import { AppState } from '../models/data.model';
import { Item } from '../models/item.model';

const initialState: AppState = {
  heroes :  [],
  items : []
};
/// Heroes
export const HeroReducer = createReducer(
  initialState,
  on(AddHero, addHeroFunction),
  on(RemoveHero, removeHeroFunction),
  on(GetHeroesSuccess, GetHeroesSuccessFunction)
);

function addHeroFunction(state: AppState, action : any) {
  return {
     heroes : [...state.heroes, action.hero],
     items : [...state.items]
  };
}

function removeHeroFunction(state: any, action: any) {
  const index = state.heroes.findIndex((item : Hero) => item.name == action.hero.name);
  if(index == -1)return state;
  return {
    ...state,
    heroes : [...state.heroes.slice(0, index), ...state.heroes.slice(index + 1)]
  }
} 


/// Items
export const ItemReducer = createReducer(
  initialState,
  on(AddItem, addItemFunction),
  on(RemoveItem, RemoveItemFunction),
  on(GetItemsSuccess, GetItemsSuccessFunction)

);

function addItemFunction(state: AppState, action : any) {
  return {
    ...state,
    items : [...state.items, action.item]
  }
}

function RemoveItemFunction(state: AppState, action : any) {
  const index = state.items.findIndex( data => data.name == action.item.name);
  if(index == -1) return state;
  return {...state,
          items : [ ...state.items.slice(0, index), ...state.items.slice(index + 1)]
  }
}


/// Heroes effects
function GetHeroesSuccessFunction(state: AppState, action: any)        ///#to-do add proper data type for items
{
    return {
        ...state,
        heroes : action.heroes
    }
}

function GetItemsSuccessFunction(state: AppState, action: any)        ///#to-do add proper data type for items
{
    return {
        ...state,
        items : action.items
    }
}