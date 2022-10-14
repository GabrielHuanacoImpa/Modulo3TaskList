import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import{ HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { Router, RouterModule, Routes } from '@angular/router';// demas

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksItemComponent } from './components/tasks-item/tasks-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  {path: '', component: TasksComponent},
  {path: 'about', component: AboutComponent}
]
/*
  importamos el roumodule de angular
  si llegamos al path vacio, vamos a montar el 
  componenete TaskComponenet.
  si entramoss a nuestro dominio.

  el header y close task aparece cuando entramos a about.
  esta situacion ocurre porque el app-header esta fuera de
  routeroutlet, cambvia el bodi y no el header
*/
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TasksItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}), 
    /*
    los routers sson archivos aparte
     cuando son aplicaciones grandes,
     tenemos un monton de rutas,
     para que incialice en root.
     con esto ya tenemos las rutas implementadas


    */
  ],
  /* debemos permitir el modulo HttpClientModule 
  para luego acceder desde el componente*/
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
