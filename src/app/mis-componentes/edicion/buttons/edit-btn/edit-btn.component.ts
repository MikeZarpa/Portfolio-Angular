import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-btn',
  templateUrl: './edit-btn.component.html',
  styleUrls: ['./edit-btn.component.css']
})

export class EditBtnComponent implements OnInit {

  @Input() visible:boolean=false;
  @Output() onClick = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  OnClick(){
    this.onClick.emit();
  }

}
