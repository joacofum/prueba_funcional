/*const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n*2);

console.log(doubled)*/
//tsc nombrearchivo .ts

//funcional
let cantidad = [10, 20, 30];
let iva: number = 40;

let primerFuncion: number = calcularTotalFactura(cantidad, iva);
let segundaFuncion: number = calcularTotalFacturaSinPasarIVA(cantidad);


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
