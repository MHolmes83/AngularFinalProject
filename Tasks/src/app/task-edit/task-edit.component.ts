import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from '../models/task';
import { TaskDataService } from '../services/task-data.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  editTask: Task = new Task();
  
  saveTask() {
    this.taskDataService.editTask(this.editTask).subscribe(
      (_t: any) => this.router.navigate(['list'])
    );
  }

  constructor(private taskDataService: TaskDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.route.params.subscribe((param: any) => {
     this.taskDataService.getTask(+param.id).subscribe(
       (t: any) => (this.editTask = t)
     );
   })
  }

    

}
