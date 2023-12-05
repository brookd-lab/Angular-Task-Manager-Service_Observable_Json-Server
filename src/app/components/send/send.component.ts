import { Component } from '@angular/core';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent {
  get(value: string) {
    console.log("received " + value + " from emitter")
  }

  get2(value: string) {
    console.log("received 2nd " + value + " from emitter")
  }
}
