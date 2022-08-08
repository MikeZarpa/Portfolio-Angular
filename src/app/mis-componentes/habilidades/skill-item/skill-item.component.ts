import { Component, Input, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/mis-classes/models/habilidad';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {

  @Input() habilidad!:Habilidad;
  constructor() { }

  ngOnInit(): void {
  }  

  styleBarProgress(){
    let styleBarProgress = {
      'width': this.habilidad.porcentaje+"%"
    };
    return styleBarProgress;
  }

}
