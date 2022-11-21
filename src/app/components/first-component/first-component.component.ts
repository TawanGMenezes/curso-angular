import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name: string = 'Tawan'
  age: number = 27
  job: string = 'Dev'
  hobbies = ['Jogar','Ir a praia','Estudar']
  moto = {
    marca: 'Yamaha',
    modelo: 'K1',
    ano: '2015'
  }

  constructor() { }
  ngOninit(): void { }
}
