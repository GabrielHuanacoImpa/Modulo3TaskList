import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../service/task.service';

import {Task} from '../../Task' //interface


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  
  constructor(  
    /* inicializamos nuestro servicio */
    private taskService: TaskService
    ){}

  ngOnInit(): void {
    /* cuando se monte el componente, 
    vamos a llamar al  servicio, 
    guardamos la lista de tareas dentro de Task */
    this.taskService.getTasks().subscribe((tasks)=>(
        this.tasks = tasks)
      );
    /* el componente ya no esta manejando 
    la logica de las tareas */
    /*=> se agrego porque es asinbcronico la carga de la base de datos */
    /* metodo subscribe de los observables */
    /* Leemos de nuestro archivo de tareas
    obtenemos la lista de tareas a traves de un servicio 
    cuando se monta el componente de tarea */
  }

}
