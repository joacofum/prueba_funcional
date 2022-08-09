
/*const numbers = [1, 2, 3, 4];
const dobles = [];

numbers.forEach(element => {
    dobles.push(element)
});

console.log(dobles);*/

//Escribir una función que calcule el total de una factura tras aplicarle el IVA. 
//La función debe recibir la cantidad sin IVA y el porcentaje de IVA a aplicar, y devolver el total de la factura. 
//Si se invoca la función sin pasarle el porcentaje de IVA, deberá aplicar un 21%.

let cantidad = [10, 20, 30];
let iva = 40;

let primerFuncion = calcularTotalFactura(cantidad, iva);
let segundaFuncion = calcularTotalFacturaSinPasarIVA(cantidad);

console.log(primerFuncion);
console.log(segundaFuncion);


function calcularTotalFactura(cantidad, iva){
    let total = cantidad.reduce((acumulador, numero) => acumulador + numero);
    let ivaFactura = total * iva/100;
    return total + ivaFactura;

}

function calcularTotalFacturaSinPasarIVA(cantidad){
    let total = cantidad.reduce((acumulador, numero) => acumulador + numero);
    let ivaFactura = total * 21/100;
    return total + ivaFactura;
}
