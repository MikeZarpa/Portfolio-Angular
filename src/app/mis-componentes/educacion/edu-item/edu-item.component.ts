import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from 'src/app/mis-classes/models/educacion';

@Component({
  selector: 'app-edu-item',
  templateUrl: './edu-item.component.html',
  styleUrls: ['./edu-item.component.css']
})
export class EduItemComponent implements OnInit {

  @Input() educacion!:Educacion;
  constructor() { }

  ngOnInit(): void {
  }

}
