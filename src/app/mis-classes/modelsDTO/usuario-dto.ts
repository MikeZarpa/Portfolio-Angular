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
}
