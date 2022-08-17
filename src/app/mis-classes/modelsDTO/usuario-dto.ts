import { newArray } from "@angular/compiler/src/util";
import { ComponentItem } from "../models/component-item";
import { Educacion } from "../models/educacion";
import { Experiencia } from "../models/experiencia";
import { Habilidad } from "../models/habilidad";
import { Proyecto } from "../models/proyecto";
import { Usuario } from "../models/usuario";

export class UsuarioDTO extends Usuario {
    habilidades:Array<Habilidad>=[];
    experiencias:Array<Experiencia>=[];
    proyectos:Array<Proyecto>=[];
    educaciones:Array<Educacion>=[];

    constructor(){
        super();
    }
    
    //Por si queremos modificar solo el header
    inicializarUsuarioDesdeDTO(usuarioDTO:UsuarioDTO){
        this.id =usuarioDTO.id
        this.nombre=usuarioDTO.nombre
        this.titulo=usuarioDTO.titulo
        this.img_banner=usuarioDTO.img_banner
        this.img_perfil=usuarioDTO.img_perfil
        this.resumenPerfil=usuarioDTO.resumenPerfil
    }

    /*Dado que una variable en typescript, aunque se la defina como miembro de una clase, pierde sus funciones si se inicializa igualandolo a una lista de atributos con valores, con esta función inicializamos cada elemento para que conserven las funciones propias de sus clases*/
    /*Dado que la petición al servidor devuelve solo "una lista de atributos con valores", utizaremos esta función para transformarlos en clases con funciones respectivas*/
    inicializarTodoDesdeDTO(usuarioDTO:UsuarioDTO){
        this.inicializarUsuarioDesdeDTO(usuarioDTO);

        this.experiencias=this.generarArrayDesdeDTO<Experiencia>(usuarioDTO.experiencias,new Experiencia());

        this.educaciones=this.generarArrayDesdeDTO<Educacion>(usuarioDTO.educaciones,new Educacion());

        this.habilidades=this.generarArrayDesdeDTO<Habilidad>(usuarioDTO.habilidades,new Habilidad());

        this.proyectos=this.generarArrayDesdeDTO<Proyecto>(usuarioDTO.proyectos,new Proyecto());
    }

    //Esta función recibe el Array enviado por el servidor y lo devuelve como elementos de clase con sus funciones utilizables
    generarArrayDesdeDTO<t extends ComponentItem<t>>(listaDTO:Array<t>,itemGenerator:t){
        let elemento:t;
        let listElementos=new Array<t>();
        listaDTO.forEach(item => {
            elemento= itemGenerator.nuevaInstancia();
            elemento.cambiarValores(item);
            listElementos.push(elemento);
        });     
        return listElementos;
    }
}
