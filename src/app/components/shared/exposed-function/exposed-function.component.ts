import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exposed-function',
  templateUrl: './exposed-function.component.html',
  styleUrls: ['./exposed-function.component.scss']
})
export class ExposedFunctionComponent implements OnInit {
  posXvalue = 50;
  posYvalue = 50;
  constructor() { }

  ngOnInit() {
  }

  onTarget(type) {
    const payload = {
      posX: this.posXvalue,
      posY: this.posYvalue
    }
    switch (type) {
      case 'init':
          window['od'].init();
          break;
      case 'shutdown':
          window['od'].shutdown();
          break;
      case 'show':
          window['od'].show();
          break;
      case 'hide':
          window['od'].hide();
          break;
      case 'open':
          window['od'].open();
          break;
      case 'close':
          window['od'].close();
          break;
      case 'update':
          window['od'].update(payload);
          break;
      default:
        console.log('Invalid Function called');
    }
  }

}
