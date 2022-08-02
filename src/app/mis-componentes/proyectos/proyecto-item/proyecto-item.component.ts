import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/mis-classes/models/proyecto';

@Component({
  selector: 'app-proyecto-item',
  templateUrl: './proyecto-item.component.html',
  styleUrls: ['./proyecto-item.component.css']
})
export class ProyectoItemComponent implements OnInit {

  @Input() proyecto!:Proyecto;
  constructor() { }

  ngOnInit(): void {
  }

}
