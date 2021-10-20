import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {
  url = 'http://localhost:3000/Tasks';
  

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(this.url + '/' + id);
  }

  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.url, task);
  }

  deleteTask(id: number): Observable<Task> {
    return this.http.delete<Task>(this.url + '/' + id);
  }

  editTask(task: Task): Observable<Task> {
    return this.http.put<Task>(this.url + '/' + task.id, task);
  }
  

  constructor(private http: HttpClient) { }
}
