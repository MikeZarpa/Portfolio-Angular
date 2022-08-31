import { ComponentItem } from "./component-item";

interface IEducacion{
    id:number|null;
    lugarNombre:string;
    carreraNombre:string;
    periodo:string;
    img_logo:string|null;
    estado:string;
}

export class Educacion implements ComponentItem<Educacion> {
    public id:number|null;
    public lugarNombre!:string;
    public carreraNombre!:string;
    public periodo!:string;
    public img_logo:string|null;
    public estado!:string;

    constructor(educacion?:IEducacion){
        this.id=educacion?.id ?? null;
        this.lugarNombre=educacion?.lugarNombre!;
        this.carreraNombre=educacion?.carreraNombre!;
        this.periodo=educacion?.periodo!;
        this.img_logo=educacion?.img_logo ?? null;
        this.estado=educacion?.estado!;
    };
    cambiarValores(item: Educacion): void {
        this.id=item.id;
        this.lugarNombre=item.lugarNombre;
        this.carreraNombre=item.carreraNombre;
        this.periodo=item.periodo;
        this.img_logo=item.img_logo;
        this.estado=item.estado;
    }
    nuevaInstancia(): Educacion {
        return new Educacion({
            id:null,
            lugarNombre:"Nueva Institución Educativa",
            carreraNombre:"Nuevo Título",
            periodo:"Nuevo Periodo de cursada.",
            img_logo:null,
            estado:"Estado del Estudio."
            });
    }

}