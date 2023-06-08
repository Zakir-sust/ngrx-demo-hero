import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroReducer } from './state/app.reducer';
import {MatButtonModule} from '@angular/material/button';
import { ItemReducer } from './state/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HeroesEffects, ItemsEffect } from './state/effects';
import { HeroService } from './services/hero.service';
import { ItemService } from './services/item.service';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ abc: HeroReducer, def: ItemReducer }),
    EffectsModule.forRoot([HeroesEffects, ItemsEffect]),
    MatFormFieldModule,
    MatButtonModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [HeroService, ItemService]
})
export class AppModule {}
