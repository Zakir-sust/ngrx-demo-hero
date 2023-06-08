import { Injectable } from "@angular/core";
import {createEffect, Actions, ofType } from "@ngrx/effects";
import { HeroService } from "../services/hero.service";
import { GetHeroesSuccess, GetHeroesFailure, GetHeroes, GetItems, GetItemsSuccess } from "./actions";
import { catchError, map, mergeMap, of } from "rxjs";
import { ItemService } from "../services/item.service";
import { Action } from "@ngrx/store";

@Injectable()
export class HeroesEffects{
    getHeroes$ = createEffect( ()=>
        this.actions$.pipe(
            ofType(GetHeroes),
            mergeMap(() => {
                return this.heroService.getHeroes().pipe(
                    map(( data ) => GetHeroesSuccess({heroes : data})),
                    catchError((error) =>
                        of(GetHeroesFailure())
                    )
                );
            })
        )
    );
    
    constructor( private actions$ : Actions, private heroService : HeroService){}
}

@Injectable()
export class ItemsEffect{
    getItems$ = createEffect( ()=>
        this.actions$.pipe(
            ofType(GetItems),
            mergeMap(()=>{
                return this.itemService.getItems().pipe(
                    map( (data) => GetItemsSuccess({items : data}))
                )
            })
        )
    )

    constructor(private actions$ : Actions, private itemService : ItemService){}
    
}