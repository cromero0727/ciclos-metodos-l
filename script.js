// INSTRUCCION 1 

let numero = prompt("Ingrese un numero del 1 al 100");
for (let i = 0; i <= numero; i++) {
    console.log(i)
};


// INSTRUCCION 2


let respuesta = "";

do {
    respuesta = prompt("¿De que color es el caballo blanco de NApoleón?");
} while (!(respuesta === "blanco"));

let promedioMatematica = Number(prompt("¿Cual es tu promedio en Matematicas?"));
let promedioFisica = Number(prompt("¿Cual es tu promedio en Fisica?"));
let promedioCiencias = Number(prompt("¿Cual es tu promedio en Ciencias?"));

let promedioTodos = [
    promedioMatematica,
    promedioFisica,
    promedioCiencias
];

const promedio = prom => Math.round(prom.reduce((uno, dos) => uno + dos) / prom.length);

alert(`${"Su promedio es de "}${promedio(promedioTodos)}`);