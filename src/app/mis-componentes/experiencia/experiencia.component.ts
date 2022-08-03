import { Component, Input, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/mis-classes/models/experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  @Input() experiencias:Array<Experiencia>=[];
  constructor() { }

  ngOnInit(): void {
  }

}
