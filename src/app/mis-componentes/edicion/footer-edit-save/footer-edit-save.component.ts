import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-footer-edit-save',
  templateUrl: './footer-edit-save.component.html',
  styleUrls: ['./footer-edit-save.component.css']
})
export class FooterEditSaveComponent implements OnInit {

  @Input() visible=true;
  @Input() visibleSave=true;
  @Input() onlySaveAndCancel=false;
  @Output() newItem= new EventEmitter<string>();
  @Output() guardar= new EventEmitter<string>();
  @Output() cancelar= new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  cancelarEvent(){
    this.cancelar.emit();
  }
  guardarEvent(){
    this.guardar.emit();
  }
  newItemEvent(){
    this.newItem.emit();
  }

}
