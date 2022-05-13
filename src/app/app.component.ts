import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Contador App';

  base  : number = 5;  
  numero: number = 10;

  acumular(valor: number){
      this.numero += valor;
  }
}
