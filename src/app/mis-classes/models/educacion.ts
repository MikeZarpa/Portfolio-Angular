interface IEducacion{
    id:BigInt|null;
    lugarNombre:String;
    carreraNombre:String;
    periodo:String;
    img_logo:String|null;
}

export class Educacion {
    public id:BigInt|null;
    public lugarNombre!:String;
    public carreraNombre!:String;
    public periodo!:String;
    public img_logo:String|null;

    constructor(educacion?:IEducacion){
        this.id=educacion?.id ?? null;
        this.lugarNombre=educacion?.lugarNombre!;
        this.carreraNombre=educacion?.carreraNombre!;
        this.periodo=educacion?.periodo!;
        this.img_logo=educacion?.img_logo ?? null;
    };
}