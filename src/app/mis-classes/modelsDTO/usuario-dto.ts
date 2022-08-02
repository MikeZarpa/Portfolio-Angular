import { Educacion } from "../models/educacion";
import { Experiencia } from "../models/experiencia";
import { Habilidad } from "../models/habilidad";
import { Proyecto } from "../models/proyecto";

export class UsuarioDTO {
    id!:String;
    nombre!:String;
    titulo!:String;
    img_banner!:String|null;
    img_perfil!:String|null;
    resumenPerfil!:String;

    habilidades!:Array<Habilidad>;
    experiencias!:Array<Experiencia>;
    proyectos!:Array<Proyecto>;
    educaciones!:Array<Educacion>;
}
