import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/ITask';
import { TaskService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Array<ITask> = [];
  

  constructor(private taskService: TaskService) {
    
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => (this.tasks = tasks));
  }

  text: string = "";

  add(text: string) {
    var task:ITask = {
      id: this.tasks[this.tasks.length-1].id + 1,
      name: text,
      completed: false
    }
    this.taskService.addTask(task).subscribe(tasks => (this.tasks.push(task)));
  }

  remove(index: number) {
    var task = this.tasks[index]
    console.log(`removing: ${task}`)
    this.tasks.splice(index, 1);
    this.taskService.removeTask(task).subscribe();
  }

  complete(index: number) {
    var task = this.tasks[index]
    task.completed = !task.completed
    console.log(`completing: ${task.name}`)
    this.taskService.completeTask(task).subscribe();
  }
}

