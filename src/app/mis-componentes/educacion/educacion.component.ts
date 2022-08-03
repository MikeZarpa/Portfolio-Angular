import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from 'src/app/mis-classes/models/educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  @Input() educaciones:Array<Educacion>=[];
  constructor() { }

  ngOnInit(): void {
  }

}
