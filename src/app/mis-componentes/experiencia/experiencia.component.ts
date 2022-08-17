import { Component, Input, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/mis-classes/models/experiencia';
import { ControlDeEdicion } from 'src/app/mis-classes/paraEdicion/control-de-edicion';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent extends ControlDeEdicion<Experiencia> implements OnInit {
  constructor() {
    super()
    this.itemGenerator=new Experiencia();
   }

  ngOnInit(): void {
  }

}
