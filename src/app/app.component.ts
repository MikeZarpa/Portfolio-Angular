import { Component } from '@angular/core';
import { Educacion } from './mis-classes/models/educacion';
import { Experiencia } from './mis-classes/models/experiencia';
import { Habilidad } from './mis-classes/models/habilidad';
import { Proyecto } from './mis-classes/models/proyecto';
import { Usuario } from './mis-classes/models/usuario';
import { UsuarioDTO } from './mis-classes/modelsDTO/usuario-dto';
import { PerfilService } from './mis-servicios/PerfilService/perfil.service';
import { TokenService } from './mis-servicios/TokenService/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  usuarioDTO:UsuarioDTO=new UsuarioDTO();
  terminoLaCarga:boolean=false;
  title = 'Portfolio';
  modoEdicion=false;

  constructor(private perfilService:PerfilService,private tokenService:TokenService){
    //Enviamos un 1 pues el portfolio consultará siempre el mismo usuarioDTO, quizá en un futuro se desarrolle una opción de cambiar "cuentas" o la posibilidad de proveer información a otros perfiles.
    this.perfilService.setIdUsuario(1);
    //Inicializador para el portfolio
    this.usuarioDTO=perfilService.obtenerUsuarioInicializado();
    this.perfilService.obtenerUsuario().subscribe(res => {this.terminoLaCarga=true;})
  }
  ngOnInit(): void {
    this.modoEdicion=this.tokenService.isLogged();
  }

  //////////Para Eventos
  //Habilidades
  saveHabilidades(habilidades:Array<Habilidad>){
    this.perfilService.saveHabilidad(habilidades);
  }
  deleteHabilidades(ids:Array<number>){
    this.perfilService.borrarHabilidad(ids);
  }
  resetHabilidades(){
    this.perfilService.obtenerUsuario().subscribe(res=>{this.usuarioDTO.habilidades=this.usuarioDTO.generarArrayDesdeDTO<Habilidad>(res.habilidades,new Habilidad);});
  }

  //Experiencias
  saveExperiencias(experiencias:Array<Experiencia>){
    this.perfilService.saveExperiencia(experiencias);
  }
  deleteExperiencias(ids:Array<number>){
    this.perfilService.borrarExperiencia(ids);
  }
  resetExperiencias(){
    this.perfilService.obtenerUsuario().subscribe(res=>{this.usuarioDTO.experiencias=this.usuarioDTO.generarArrayDesdeDTO<Experiencia>(res.experiencias, new Experiencia());});
  }

  //Proyectos
  saveProyectos(proyectos:Array<Proyecto>){
    this.perfilService.saveProyecto(proyectos);
  }
  deleteProyectos(ids:Array<number>){
    this.perfilService.borrarProyecto(ids);
  }
  resetProyectos(){
    this.perfilService.obtenerUsuario().subscribe(res=>{this.usuarioDTO.proyectos=this.usuarioDTO.generarArrayDesdeDTO<Proyecto>(res.proyectos,new Proyecto());});
  }
  
  //Educacions
  saveEducaciones(educaciones:Array<Educacion>){
    this.perfilService.saveEducacion(educaciones);
  }
  deleteEducaciones(ids:Array<number>){
    this.perfilService.borrarEducacion(ids);
  }
  resetEducaciones(){
    this.perfilService.obtenerUsuario().subscribe(res=>{this.usuarioDTO.educaciones=this.usuarioDTO.generarArrayDesdeDTO<Educacion>(res.educaciones,new Educacion());});
  }
  
  //Usuario - Header
  saveUsuario(usuarioDTO:Usuario){
    this.perfilService.saveUsuario(usuarioDTO);
  }
  resetUsuario(){
    this.usuarioDTO.inicializarUsuarioDesdeDTO(this.perfilService.obtenerUsuarioInicializado());
  }
}
