import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from 'src/app/mis-classes/models/educacion';
import { ControlDeEdicion } from 'src/app/mis-classes/paraEdicion/control-de-edicion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent extends ControlDeEdicion<Educacion> implements OnInit {

  constructor() {
    super()
    this.itemGenerator=new Educacion();
   }

  ngOnInit(): void {
  }

}
