import { Component } from '@angular/core';

@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html'
})
export class HeroComponent{
    Name: string = 'Wolverine';
    Age: number = 250;

    get UpperName(): string {
        return this.Name.toUpperCase();
    }

    getName(): string{
        return `${this.Name} - ${this.Age}`;
    }

    changeName(): void{
        let inputName = prompt('Insert a SuperHero name');
        this.Name = inputName ? inputName : 'undefined'
    }

    changeAge(): void{
        let inputAge = prompt('Insert a number');
        this.Age = inputAge ? parseInt(inputAge) : 0;
    }

}