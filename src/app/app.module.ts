import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { CounterComponent } from './counter/counter/counter.component';

//import { HeroComponent } from './heroes/Hero/hero.component';
//import { ListsComponent } from './heroes/lists/lists.component';
import { HeroesModule } from './heroes/heroes.module';
import { CounterModule} from './counter/counter.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    CounterModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
