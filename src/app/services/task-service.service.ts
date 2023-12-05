import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ITask } from '../ITask';

const headers = { "content-type": "application/json" };


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  // tasks: Array<ITask> = [
  //   { name: "task 1", completed: false },
  //   { name: "task 2", completed: true },
  //   { name: "task 3", completed: true },
  //   { name: "task 4", completed: false },
  // ];
  tasks: Array<ITask> = []
  
  url:string = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {
   }

  getTasks(): Observable<Array<ITask>> {
    return this.http.get<Array<ITask>>(`${this.url}`);
    //return this.tasks;
  }

  // adds the todo to the list
  addTask(task: ITask): Observable<ITask> {
    return this.http.post<ITask>(this.url, task, { headers: headers });
  }

   // deletes the selected todo
   removeTask(task: ITask): Observable<ITask> {
    return this.http.delete<ITask>(this.url + `/${task.id}`, { headers: headers });
  }

    // updates the status of todo
    completeTask(task: ITask): Observable<ITask> {
      return this.http.put<ITask>(this.url + `/${task.id}`, task, { headers: headers });
    }
  }
