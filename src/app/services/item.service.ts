import { Injectable } from "@angular/core";
import { Item } from "../models/item.model";
import { Observable, delay, of } from "rxjs";


@Injectable()
export class ItemService{
    getItems() : Observable<Item[]> {
        const items = [
            { name : "Orchid", price : 5000},
            { name : "Skadi", price : 5500}
        ];
        return of(items).pipe(delay(1000));
    }
}