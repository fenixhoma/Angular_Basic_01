import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
})
export class AddItemComponent  {

  
  
  @Input() character : Character = {
    name: '',
    power: 0
  }

  //@Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();
  constructor(private dbzService: DbzService){
  }

  addCharacter(){
    if ( this.character.name.trim().length === 0 ){
      return;
    }

    this.dbzService.addNewCharacter( this.character)
    //this.onNewCharacter.emit( this.character );

    this.character = {
      name: '',
      power: 0
    };
    
  }

}
