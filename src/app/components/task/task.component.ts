import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
 text: string = "";
 @Output() changed = new EventEmitter<string>();

 add(text: string) {
  this.text = "";
  this.changed.emit(text);
 }
}
