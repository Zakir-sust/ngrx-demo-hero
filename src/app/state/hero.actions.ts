import { Action, createAction, props } from '@ngrx/store';
import { Hero } from '../models/hero.model';

// export const HeroActions = createActionGroup({
//   source : "Heroes",
//   events : {
//     'Add Hero' : props<{name : string}>,
//     'Remove Hero' : props<{name : string}>()
//   }
// })

// export const HeroApiActions = createActionGroup({
//   source : "Heroes Api",
//   events : {
//     'Retrieve Hero List' : props<{heroes : ReadonlyArray<Hero>}>()
//   }
// })
// export class AddHero implements Action {
//     type ='[Hero] add hero';
//     constructor(public payload: { hero : Hero }) {}
//   }
   
export const AddHero = createAction('[Hero] add hero', props<Hero>());
export const RemoveHero = createAction('[Hero] remove hero', props<Hero>());
export const GetHero = createAction('[Hero] get hero');


