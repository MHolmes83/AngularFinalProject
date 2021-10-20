import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskDataService } from '../services/task-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  
  tasks!: Task[];

  getTasks(): void {
    this.taskDataService.getTasks().subscribe((task: Task[]) => (this.tasks = task));
  }
  
  deleteTask(id: number): void {
    this.taskDataService.deleteTask(id).subscribe((task: any) => this.getTasks())
  }

  constructor(private taskDataService: TaskDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.getTasks();
  }

}
