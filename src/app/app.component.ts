import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Hero } from './models/hero.model';
import { AddHero, RemoveHero, AddItem, RemoveItem, GetHeroes, GetItems } from './state/actions';
import { Item } from './models/item.model';
import { selectHero } from './state/hero.selector';
import { AppState } from './models/data.model';
import { selectItems } from './state/item.selector';

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
    this.store.dispatch(GetHeroes())
    this.store.dispatch(GetItems())
    this.store.select(selectHero).subscribe((data: Hero[]) => {
      this.heroes = data;
    })
 
    this.store.select(selectItems).subscribe((data : Item[]) => {
      this.items = data;
    })
   
  }

  onAddHero() {
    let obj : Hero = { name: this.currentHero.name, mainAttribute: this.currentHero.mainAttribute };
    this.store.dispatch(AddHero({hero : obj}));
  }

  onRemoveHero(hero: Hero){
    this.store.dispatch(RemoveHero({hero : hero}));
  }

  onAddItem() {
    let obj : Item = { name: this.currentItem.name, price: this.currentItem.price };
    this.store.dispatch(AddItem({item : obj}));
  }

  onRemoveItem(item: Item){
    this.store.dispatch(RemoveItem({item : item}));
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(0);
    this.ngUnsubscribe.complete();
  }
}
