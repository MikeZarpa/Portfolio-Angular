interface IHabilidad{
    id:BigInt;
    nombre:String;
    porcentaje:number;
    tipo:String;
}

export class Habilidad {
    public id:BigInt|null;
    public nombre!:String;
    public porcentaje!:number;
    public tipo!:String;

    constructor(habilidad?:IHabilidad){
        this.id=habilidad?.id ?? null;
        this.nombre=habilidad?.nombre!;
        this.porcentaje=habilidad?.porcentaje!;
        this.tipo=habilidad?.tipo!;
    };
}
