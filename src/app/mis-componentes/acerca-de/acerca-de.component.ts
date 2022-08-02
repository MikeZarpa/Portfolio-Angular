import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/mis-classes/models/usuario';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  @Input() usuario!:Usuario;
  constructor() { }

  ngOnInit(): void {
  }

}
