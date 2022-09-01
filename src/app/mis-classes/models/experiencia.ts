import { ComponentItem } from "./component-item";

interface IExperiencia{
    id:number|null;
    lugarNombre:string;
    puestoNombre:string;
    periodo:string;
    descripcion:string;
    img_logo:string;
}

export class Experiencia implements ComponentItem<Experiencia>{
    public id:number|null;
    public lugarNombre!:string;
    public puestoNombre!:string;
    public periodo!:string;
    public descripcion!:string;
    public img_logo!:string;

    constructor(experiencia?:IExperiencia){
        this.id=experiencia?.id ?? null;
        this.lugarNombre=experiencia?.lugarNombre!;
        this.puestoNombre=experiencia?.puestoNombre!;
        this.periodo=experiencia?.periodo!;
        this.descripcion=experiencia?.descripcion!;
        this.img_logo=experiencia?.img_logo!;
    };
    
    cambiarValores(item: Experiencia): void {
        this.id=item.id ?? null;
        this.lugarNombre=item.lugarNombre;
        this.puestoNombre=item.puestoNombre;
        this.periodo=item.periodo;
        this.descripcion=item.descripcion;
        this.img_logo=item.img_logo;
    }
    nuevaInstancia(): Experiencia {
        return new Experiencia({
            id:null,
            lugarNombre:"Nuevo Lugar de Experiencia",
            puestoNombre:"Nuevo Puesto Ejercido",
            periodo:"Nuevo Periodo Trabajado",
            descripcion:"Nueva descripción de las actividades.",
            img_logo:"/assets/images/placeholder-img.webp"
        });
    }
}