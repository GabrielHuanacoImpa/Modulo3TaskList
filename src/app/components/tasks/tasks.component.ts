import { Component, OnInit } from '@angular/core';

import {Task} from '../../Task' //interface
import {TASKS} from '../../mock-tasks'; //lista de tareas



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
