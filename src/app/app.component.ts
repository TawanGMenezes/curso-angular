import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName: string = 'Joaquim';
  userData = {
    profissao: 'DEV',
    experiencia: 5,
    local_trab: 'Trax_Trader',
  };

  title = 'curso-angular';
}
