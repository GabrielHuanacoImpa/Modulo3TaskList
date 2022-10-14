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

  deleteTask(task: Task){
    /*console.log("deleteTask");*/
    this.taskService.deleteTask(task)
      .subscribe(
        ()=>(
        this.tasks = this.tasks.filter( (t) => {
        /*console.log("task delete");*/
        return t.id !== task.id
        })
      ))
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;
    /*console.log(task.reminder)*/
    this.taskService.updateTaskReminder(task).subscribe();
    /*la logica lo manejamos en comppnenete y 
    se lo pasamos al servicio para que aga la terea*/
    /*el servicio habla con la base de datos
    la logica lo manejamos en el componenete*/
  }

  addTask(task: Task){
    //console.log(task); 
    // recibimos los datos de la tarea
    // esta tarea que recibimos aca deberiamos 
    // pasarla a un servicio que nos permita guardarla en la base de datos
    /* devuelve la tarea, la tarea se creo en un formulario
      pero la lista de tarea lo estoy manejando en otro 
      componente por eso debo agregar esta tarea no agregada
      debo agregarla al array de tareas, esta tarea que recien 
      esta insertada en la base de datos
    */

    this.taskService.addTask(task).subscribe((task)=>(
        this.tasks.push(task)
    ))
    //agrego la nueva tarea y se inserta en la base de datos

  }
}
