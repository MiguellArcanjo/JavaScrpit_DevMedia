import EntradaDados from 'readline-sync';

console.log("COnversor de Milhas para Quilômetros: \n");

let mi = EntradaDados.question("Informe o valor em Milhas: ");

let km = mi / 0.62137;

console.log(mi+"mi equivale a "+km+"km");