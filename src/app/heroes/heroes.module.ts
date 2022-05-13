import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroComponent } from "./Hero/hero.component";
import { ListsComponent } from './lists/lists.component';

@NgModule({
    declarations:[
        HeroComponent,
        ListsComponent
    ],
    exports:[
        ListsComponent
    ],
    imports:[
        CommonModule,

    ]
})

export class HeroesModule {}