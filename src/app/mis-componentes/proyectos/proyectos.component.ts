import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/mis-classes/models/proyecto';
import { ControlDeEdicion } from 'src/app/mis-classes/paraEdicion/control-de-edicion';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent extends ControlDeEdicion<Proyecto> implements OnInit {

  constructor() {
    super()
    this.itemGenerator=new Proyecto();
   }

  ngOnInit(): void {
  }

}
