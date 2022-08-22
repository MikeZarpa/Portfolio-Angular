import { Injectable } from '@angular/core';
import { Usuario } from '../../mis-classes/models/usuario';
import { concatMap, Observable } from 'rxjs';
import { ConsultaService } from './subServices/consulta.service';
import { DeleteService } from './subServices/delete.service';
import { UsuarioDTO } from 'src/app/mis-classes/modelsDTO/usuario-dto';
import { SaveService } from './subServices/save.service';
import { Habilidad } from 'src/app/mis-classes/models/habilidad';
import { Experiencia } from 'src/app/mis-classes/models/experiencia';
import { Proyecto } from 'src/app/mis-classes/models/proyecto';
import { Educacion } from 'src/app/mis-classes/models/educacion';
import { DatosDeConexion } from '../datos-de-conexion';

@Injectable({
  providedIn: 'root'
})
export class PerfilService extends DatosDeConexion {

  private idUsuario!:number;
  private usuarioDTO:UsuarioDTO=new UsuarioDTO();

  constructor(private consultaServi:ConsultaService, private deleteServi:DeleteService,private saveServi:SaveService) {
    super();
    consultaServi.setUrlConexion(this.urlConexionBase)
    deleteServi.setUrlConexion(this.urlConexionBase);
    saveServi.setUrlConexion(this.urlConexionBase);
    this.setHeader()    
  }

  public setHeader(){
    this.consultaServi.setHeader();
    this.deleteServi.setHeader();
    this.saveServi.setHeader();
  }
  public setIdUsuario(idUsuario:number):void{
    this.idUsuario=idUsuario;
    this.saveServi.setIdUsuario(this.idUsuario);
  }
  public obtenerUsuario():Observable<UsuarioDTO>{
    return this.consultaServi.getUsuario(this.idUsuario);
  }
  //Inicializar para que conserven las propiedades
  public obtenerUsuarioInicializado():UsuarioDTO{
    this.obtenerUsuario().subscribe(res=>{console.log(res);
    this.usuarioDTO.inicializarTodoDesdeDTO(res);});
    return this.usuarioDTO;
  }


  //Guardar cambios o crear nuevos elementos

  public saveUsuario(usuario:Usuario):void{
    this.saveServi.saveUsuario(usuario);
  }
  public saveHabilidad(habilidades:Habilidad[]):void{
    this.saveServi.saveHabilidad(habilidades);
  }
  public saveExperiencia(experiencias:Experiencia[]):void{
    this.saveServi.saveExperiencia(experiencias);
  }
  public saveProyecto(proyectos:Proyecto[]):void{
    this.saveServi.saveProyecto(proyectos);
  }
  public saveEducacion(educaciones:Educacion[]):void{
    this.saveServi.saveEducacion(educaciones);
  }

  //Borra elementos apartir de una lista de ids, puede ser una lista unitaria...
  public borrarHabilidad(listaId:Array<number>):void{
    this.deleteServi.deleteHabilidad(listaId);
  }
  public borrarExperiencia(listaId:Array<number>):void{
    this.deleteServi.deleteExperiencia(listaId);
  }
  public borrarProyecto(listaId:Array<number>):void{
    this.deleteServi.deleteProyecto(listaId);
  }
  public borrarEducacion(listaId:Array<number>):void{
    this.deleteServi.deleteEducacion(listaId);
  }
}
