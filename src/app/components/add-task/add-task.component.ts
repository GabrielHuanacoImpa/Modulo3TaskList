//import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service'; 
import { Task } from '../../Task'

import {NgForm} from '@angular/forms'

//import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  //para hacer que se borre formulario cuando se guardo
  //myForm: FormGroup;
  /*emitimos, para pasar al componente de tarea la nueva tarea */
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  
  text: string = "";
  day: string = "";
  reminder: boolean = false;
  

  showAddTask: boolean = false;
  subscription?: Subscription;

  // triangulacion que hacemos atraves de un servicio para
  // controlar el estado de la variable de showAdddTas

  constructor(
    private uiService: UiService
  ) { 
    //podemos escuchar lo que pasa en otros componentes
    this.subscription = this.uiService.onToggle()
    .subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {
    /*
    myForm=new FormGroup({
      text:new String(""),
      day: string = "",
      reminder: boolean = false,
    })
    */
    //resestForm()
  }

  onSubmit(){
    /*console.log("onsumit");*/
    /*validacion que avisa cuando no se agrego nada*/
    if (this.text.length === 0) {
      alert("Please add a task!");
      return
    }
    /*creamos nueva tarea como objeto*/
    const {text,day,reminder} = this
    const newTask = {text,day,reminder};
    /*prodriamos agregar mas validaciones*/
    this.onAddTask.emit(newTask); // emitimos la funcion hacia afuera  }

  //TODO emit event : es emitir evento

  }
  //Formularios basados ​​en plantillas no es Formas reactivas.
  completeMyForm(myForm: NgForm){
    myForm.reset()
    // nos permite limpiar formulario cuando ya se guardo los datos

}


}