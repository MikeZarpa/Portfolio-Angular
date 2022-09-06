import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/mis-classes/models/usuario';
import { DatosLogin } from 'src/app/mis-classes/modelsDTO/datos-login';
import { EdicionItemConImagen } from 'src/app/mis-classes/paraEdicion/edicion-item-con-imagen';
import { ImageStorageService } from 'src/app/mis-servicios/ImageStorageService/image-storage.service';
import { TokenService } from 'src/app/mis-servicios/TokenService/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends EdicionItemConImagen<Usuario> implements OnInit {

  mostrarLogin:boolean=false;
  constructor(imgStorage:ImageStorageService,private tokenServi:TokenService,private route:Router) {
    super(imgStorage);
    this.itemGenerator = new Usuario();
  }
  override ngOnInit(): void {
    //Para que no intente activar el modoEdicion al iniciar
  }

  onLogin(){
    this.mostrarLogin=!this.mostrarLogin;
  }
  
  onLogout(){
    this.tokenServi.logout();
    this.route.navigate(["/"]);
  }

  override cargarUrlImg(url: string): void {
    super.cargarUrlImg(url);
    this.item.img_banner=url;
  }

  hayCambiosQueGuardar():boolean{
    if(this.editando) 
    return JSON.stringify(this.item.img_banner)!=JSON.stringify(this.itemTemp.img_banner);
    return false; 
    
  }

  desactivarGuardar(){
    return !(this.sePuedeGuardar() && this.hayCambiosQueGuardar())
  }
  saveUsuario(){
    this.save.emit(this.item);
    this.editando=false;
  }
  mostrarMenu(){
    const navBar = document.getElementById("navBar");
    navBar?.classList.toggle("entrada-lateral");
  }
}
