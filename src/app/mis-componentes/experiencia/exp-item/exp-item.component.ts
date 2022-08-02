import { Component, Input, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/mis-classes/models/experiencia';

@Component({
  selector: 'app-exp-item',
  templateUrl: './exp-item.component.html',
  styleUrls: ['./exp-item.component.css']
})
export class ExpItemComponent implements OnInit {

  @Input() experiencia!:Experiencia;

  constructor() { }

  ngOnInit(): void {
  }

}
