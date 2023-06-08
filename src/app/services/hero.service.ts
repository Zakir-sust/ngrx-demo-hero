import { Injectable } from "@angular/core";
import { Hero } from "../models/hero.model";
import { Observable, of, delay } from "rxjs";


@Injectable()
export class HeroService {
    getHeroes() : Observable<Hero[]> {
        const heroes = [
            {name : "Axe", mainAttribute: "Strength"},
            {name : "Arc Warden", mainAttribute: "Agility"},
            {name : "Anti mage", mainAttribute: "Agility"}
        ];
        return of(heroes).pipe(delay(500));
    }
}

