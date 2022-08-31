import { ComponentItem } from "./component-item";

export interface IHabilidad{
    id:number|null;
    nombre:string;
    porcentaje:number;
    tipo:string;
}

export class Habilidad implements ComponentItem<Habilidad>{
    public id:number|null;
    public nombre!:string;
    public porcentaje!:number;
    public tipo!:string;

    constructor(habilidad?:IHabilidad){
        this.id=habilidad?.id ?? null;
        this.nombre=habilidad?.nombre!;
        this.porcentaje=habilidad?.porcentaje!;
        this.tipo=habilidad?.tipo!;
    };

    cambiarValores(habilidad:Habilidad){
        this.id=habilidad.id
        this.nombre=habilidad.nombre
        this.porcentaje=habilidad.porcentaje
        this.tipo=habilidad.tipo
    }
    nuevaInstancia(): Habilidad {
        return new Habilidad({
            id:null,
            nombre:"Nombre de Habilidad",
            porcentaje:1,
            tipo:"Soft"
        });
    }
}
