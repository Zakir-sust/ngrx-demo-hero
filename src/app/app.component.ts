import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Hero } from './models/hero.model';
import { AddHero, RemoveHero } from './state/hero.actions';
import { AddItem, RemoveItem } from './state/item.actions';
import { Item } from './models/item.model';
import { selectHero } from './state/hero.selector';
import { AppState } from './models/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  heroes !: Hero[] ;
  items!: Item[];
  currentHero : Hero;
  currentItem : Item;
  private ngUnsubscribe!: Subject<any>;
  constructor(private readonly store: Store<Hero>) { 
    this.currentHero = {name : "", mainAttribute: ""}; 
    this.currentItem = {name : "", price : 1000};
  }

  ngOnInit() {

    this.store.select(selectHero).subscribe((data: Hero[]) => {
      this.heroes = data;
    })
    // this.store.select((state : any) => state.abc.heroes).subscribe((data: Hero[]) => {
    //   this.heroes = data;
    // })

    this.store.select((state : any) => state.item).subscribe((data : any) => {
      this.items = data;
    })
   
  }

  onAddHero() {
    let obj : Hero = { name: this.currentHero.name, mainAttribute: this.currentHero.mainAttribute };
    this.store.dispatch(AddHero(obj));
  }

  onRemoveHero(hero: Hero){
    this.store.dispatch(RemoveHero(hero));
  }

  onAddItem() {
    let obj : Item = { name: this.currentItem.name, price: this.currentItem.price };
    this.store.dispatch(AddItem(obj));
  }

  onRemoveItem(Item: Item){
    this.store.dispatch(RemoveItem(Item));
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(0);
    this.ngUnsubscribe.complete();
  }
}
