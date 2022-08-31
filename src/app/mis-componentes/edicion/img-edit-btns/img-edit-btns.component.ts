import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-img-edit-btns',
  templateUrl: './img-edit-btns.component.html',
  styleUrls: ['./img-edit-btns.component.css']
})
export class ImgEditBtnsComponent implements OnInit {

  @Input() mostrarControles=false;
  @Input() ocultarBotones = false;
  @Input() mostrarSpinner = false;
  @Output() inputChange = new EventEmitter<any>()
  @Output() cargar = new EventEmitter<void>()
  @Output() cancelar = new EventEmitter<void>()
  constructor() { }

  ngOnInit(): void {
  }

  onChange(event:any){
    this.inputChange.emit(event);
  }
  onCargar(){
    this.cargar.emit();
  }
  onCancelar(){
    this.cancelar.emit();
  }

}
