import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/mis-classes/models/proyecto';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  @Input() proyectos!:Array<Proyecto>;
  constructor() { }

  ngOnInit(): void {
  }

}
