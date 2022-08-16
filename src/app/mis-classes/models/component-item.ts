export interface ComponentItem<t> {
    id:number|null;
    cambiarValores(item:t):void;
    nuevaInstancia():t;
}
