import { Hero } from "./hero.model";
import { Item } from "./item.model";

export interface AppState{
    heroes: Hero[];
    items: Item[];
}