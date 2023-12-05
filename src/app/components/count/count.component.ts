import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent {
  @Input() count: number = 0;
  @Output() changed = new EventEmitter<string>();
  @Output() changed2 = new EventEmitter<string>();
  
  inc(value=1) {
    this.count+=value
  }

  dec(value=1) {
    this.count-=value
  }

  addNewItem(value: string) {
    console.log("emitting",value)
    this.changed.emit(value);
  }

  addNewItem2(value: string) {
    console.log("emitting",value)
    this.changed2.emit(value);
  }
}
