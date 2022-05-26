import { Injectable } from "@angular/core";
import { Character } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{

    private _characters: Character[] = [
        {
         name: 'Goku',
         power: 1500
       },
       {
         name: 'Vegueta',
         power: 8700
       }
     ];

     get characters(): Character[]{
         return [...this._characters]
     }

    constructor(){
        console.log('Init Service');
    }

    addNewCharacter( args: Character){
        console.log(args);
        this._characters.push(args);
      }
    
      

}