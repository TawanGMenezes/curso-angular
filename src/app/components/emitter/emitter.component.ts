import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css'],
})
export class EmitterComponent {
  num: number = 0;
  onChangeNumber() {
    this.num = Math.floor(Math.random() * 100);
  }
}
