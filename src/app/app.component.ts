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

  title = 'Portfolio';
  modoEdicion=false;

  constructor(private perfilService:PerfilService,private tokenService:TokenService){
    //Enviamos un 1 pues el portfolio consultará siempre el mismo usuarioDTO, quizá en un futuro se desarrolle una opción de cambiar "cuentas" o la posibilidad de proveer información a otros perfiles.
    this.perfilService.setIdUsuario(1);
    //Inicializador para el portfolio
    this.usuarioDTO=perfilService.obtenerUsuarioInicializado();
    //Datos de prueba para la visualización sin correr el servidor
    this.usuarioDTO.nombre="Miguel Eduardo Schneider";
    this.usuarioDTO.titulo="Programador Web FullStack";
    this.usuarioDTO.resumenPerfil="Soy un gran desarrollador";

    this.usuarioDTO.experiencias=[
      new Experiencia({id:null,lugarNombre:"Lugar Numero 1",puestoNombre:"Nombre del puesto",periodo:"Periodo de la experiencia",descripcion:"Descripción del puesto.",img_logo:""}),
      new Experiencia({id:null,lugarNombre:"Lugar Numero 2",puestoNombre:"Nombre del puesto",periodo:"Periodo de la experiencia",descripcion:"Descripción del puesto.",img_logo:""}),
      new Experiencia({id:null,lugarNombre:"Lugar Numero 3",puestoNombre:"Nombre del puesto",periodo:"Periodo de la experiencia",descripcion:"Descripción del puesto.",img_logo:""})]

    this.usuarioDTO.educaciones=[
      new Educacion({id:null,lugarNombre:"Lugar Educacion 1",carreraNombre:"Nombre de la Carrera 1",img_logo:null,periodo:"Periodo Educacion",estado:"Estado"}),
      new Educacion({id:null,lugarNombre:"Lugar Educacion 2",carreraNombre:"Nombre de la Carrera 2",img_logo:null,periodo:"Periodo Educacion",estado:"Estado"}),
      new Educacion({id:null,lugarNombre:"Lugar Educacion 3",carreraNombre:"Nombre de la Carrera 3",img_logo:null,periodo:"Periodo Educacion",estado:"Estado"}),
      new Educacion({id:null,lugarNombre:"Lugar Educacion 4",carreraNombre:"Nombre de la Carrera 4",img_logo:null,periodo:"Periodo Educacion",estado:"Estado"}),
    ];

    this.usuarioDTO.habilidades=[
      new Habilidad({id:null,nombre:"Habilidad 1 -20",porcentaje:20,tipo:"Hard"}),
      new Habilidad({id:null,nombre:"Habilidad 2 -40",porcentaje:40,tipo:"Soft"}),
      new Habilidad({id:null,nombre:"Habilidad 3 -60",porcentaje:60,tipo:"Hard"}),
      new Habilidad({id:null,nombre:"Habilidad 4 -80",porcentaje:80,tipo:"Soft"}),
      new Habilidad({id:null,nombre:"Habilidad 5 -100",porcentaje:100,tipo:"Hard"})]

    this.usuarioDTO.proyectos=[
      new Proyecto({id:null,fecha:"Fecha 1",nombre:"Proyecto 1",descripcion:"Descripción del proyecto",img_logo:null,link:"https://www.google.com"}),
      new Proyecto({id:null,fecha:"Fecha 2",nombre:"Proyecto 2",descripcion:"Descripción del proyecto",img_logo:null,link:"https://www.google.com"}),
      new Proyecto({id:null,fecha:"Fecha 3",nombre:"Proyecto 3",descripcion:"Descripción del proyecto",img_logo:null,link:"https://www.google.com"}),
      new Proyecto({id:null,fecha:"Fecha 4",nombre:"Proyecto 4",descripcion:"Descripción del proyecto",img_logo:null,link:"https://www.google.com"})]
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
