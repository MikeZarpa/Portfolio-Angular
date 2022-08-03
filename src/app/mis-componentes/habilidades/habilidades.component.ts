import { Component, OnInit,Input } from '@angular/core';
import { Habilidad } from 'src/app/mis-classes/models/habilidad';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  @Input() habilidades:Array<Habilidad>=[];
  constructor() { }

  ngOnInit(): void {
  }

}
