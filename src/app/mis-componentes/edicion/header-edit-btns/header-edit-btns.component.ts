import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-edit-btns',
  templateUrl: './header-edit-btns.component.html',
  styleUrls: ['./header-edit-btns.component.css']
})
export class HeaderEditBtnsComponent implements OnInit {

  @Input() visible=true;
  @Output() delete = new EventEmitter<string>();
  @Output() edit = new EventEmitter<string>();
  @Input() onlyEdit=false;

  constructor() { }

  ngOnInit(): void {
  }
  deleteItem(){
    this.delete.emit();
  }
  editItem(){
    this.edit.emit();
  }

}
