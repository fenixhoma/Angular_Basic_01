import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html'
})
export class ListsComponent {

    heroes: string[] = ['Deadpool','Mr.Fantastic','Dr. DOOM','Venom', 'Groot']

    heroRemoved: string = '';

    deleteHero(){
      const heroRemoved = this.heroes.shift() || '';
      this.heroRemoved = heroRemoved;
  }
}
