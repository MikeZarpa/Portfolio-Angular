import { Component, OnInit,Input } from '@angular/core';
import { Habilidad } from 'src/app/mis-classes/models/habilidad';
import { ControlDeEdicion } from 'src/app/mis-classes/paraEdicion/control-de-edicion';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})

export class HabilidadesComponent extends ControlDeEdicion<Habilidad> implements OnInit {

  constructor() {
    super()
    this.itemGenerator=new Habilidad();
   }

  ngOnInit(): void {
  }

}
