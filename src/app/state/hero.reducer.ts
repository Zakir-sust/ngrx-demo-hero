import { Action, createReducer, on } from '@ngrx/store';
import { AddHero, RemoveHero } from './hero.actions';
import { Hero } from '../models/hero.model';
import { AppState } from '../models/data.model';
import { Item } from '../models/item.model';

const initialState: AppState = {
  heroes :  [],
  items : []
};

export const HeroReducer = createReducer(
  initialState,
  on(AddHero, addHeroFunction),
  on(RemoveHero, removeHeroFunction)
);

function addHeroFunction(state: AppState, hero : any) {
  return {
     heroes : [...state.heroes, {name : hero.name, mainAttribute : hero.mainAttribute}],
     items : [...state.items]
  };
}


function removeHeroFunction(state: any, hero : Hero) {
  const index = state.heroes.findIndex((item : Hero) => item.name == hero.name);
  if(index == -1)return state;
  return {
    ...state,
    heroes : [...state.heroes.slice(0, index), ...state.heroes.slice(index + 1)]
  }
} 

