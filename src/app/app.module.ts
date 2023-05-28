import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroReducer } from './state/hero.reducer';
import {MatButtonModule} from '@angular/material/button';
import { ItemReducer } from './state/item.reducer';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ abc: HeroReducer, def: ItemReducer }),
    MatFormFieldModule,
    MatButtonModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
