export interface ComponentItem<t> {
    id:number|null;
    cambiarValores(item:t):void;
    nuevaInstancia():t;

    /*La función cambiarValores es importante para realizar cambios en nuestros objetos sin cambiar su dirección de memoria. Recordemos que Javascript y Typescript al asignar valores que son "objetos" lo hace por referencia.

    Ejemplo:
        x = {num1:100,num2:200}
        y = x
        y.num1=50
        console.log(x) //La salida es {num1:50,num2:200}

    A efectos de poder localizar un objeto en un array (donde fue agregado previamente) utilizando una comparación directa, se opta por editar los valores del objeto de esta forma (utilizando una función como cambiarValores).

    Ejemplo:
        x = {num1:100,num2:200}
        y = {num1:100,num2:200}
        list = new Array()
        list.push(x)
        console.log(list[0]==x) //true
        x=y
        console.log(list[0]==x) //false
   */
}
