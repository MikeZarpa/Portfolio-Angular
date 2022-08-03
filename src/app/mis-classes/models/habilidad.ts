interface IHabilidad{
    id:number;
    nombre:string;
    porcentaje:number;
    tipo:string;
}

export class Habilidad {
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
}
