import { Component, OnInit } from '@angular/core';
//poder escuchar cuando hacemos click al boton, para pasarselo al otro componenete
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';
// importamos para saber en que ruta estamos
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  title:string = 'My Task List';
  showAddTask:boolean = false; // se ve boton close
  subscription?: Subscription;

  constructor(
    private uiService:UiService,
    private router:Router
  ) { 
    this.subscription = this.uiService.onToggle()
      .subscribe(value => this.showAddTask = value);
      //cuando presiono boton cambia el valor y color de add a close
  }

  ngOnInit(): void {
  }
  toggleAddTask(){
    //console.log("toggleAddTask!");
    // cambia el valor del toogle del show
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string){
    return this.router.url === route
    // devuelve verdadero si el url es igual al router
    // de este componente
  }
}
