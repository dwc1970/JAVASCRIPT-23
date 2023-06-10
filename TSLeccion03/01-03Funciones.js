
// LOS EJERCICIOS DE ESTA CLASE VAN DEL 10 AL 1 

//10 - Paso por referencia
let k = 10;
function cambiarValor(a){
    a = 20;
}
cambiarValor(k);
console.log(k);

const persona={
    nombre: 'Dario',
    apellido: 'Carrizo'
}

function cambiarValor(p1){
    p1.nombre = 'Ruben'
    p1.apellido ='Lopez'
}

cambiarValorObjeto(persona);
console.log(persona);

//9- Paso por valor 
// Tipos Primitivos 
let k = 10;
function cambiarValor(a){
    a = 20;
}
cambiarValor(k);
console.log(k);

// 8- Concepto hoisting
// Funcion tipo expresion ** 
let sumar = function(a = 4 + b = 8){
    console.log(arguments[0]); //Muestra el parametro de a:
    console.log(arguments[1]); //Muestra el parametro de b:
   
    return a + b arguments[2];;
}
resultado= sumar(3, 2, 9);
console.log(resultado);

let respuesta = SumarTodo (5, 4, 13, 10, 9);
console.log(respuesta);
function SumarTodo{
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma = arguments[i]; //arguments es para arreglos
    }
    return suma;
}
// 7- Argumentos y parámetros
//toString
var miFuncionTexto = miFuncionDos.toString(); // Convierte la funcion a texto
console.log(miFuncionTexto);

//Funcione Flecha
const SumarFuncionFlecha = (a + b) => a + b ;
resultado = SumarFuncionFlecha(3, 7); // Asignamos el valor de la variable
console.log(resultado);

let sumar = function(a = 4 + b = 8){
    console.log(arguments[0]); //Muestra el parametro de a:
    console.log(arguments[1]); //Muestra el parametro de b:
   
    return a + b arguments[2];;
}
resultado= sumar(3, 2, 9);
console.log(resultado);

// 6- Funciones flecha
(function(a, b ){
    console.log('Ejecuntando la funcion: '+ (a + b));
})(9, 6);

console.log(typeof miFuncion);
function miFuncionDos(a, b){
    console.log(arguments.length);
}
miFuncionDos(5, 7);

//toString
var miFuncionTexto = miFuncionDos.toString();
console.log(miFuncionTexto);

//Funcione Flecha
const SumarFuncionFlecha = (a + b) => a + b ;
resultado = SumarFuncionFlecha(3, 7);
console.log(resultado);


// 5- Tipos de datos en una función
(function(a, b ){
    console.log('Ejecuntando la funcion: '+ (a + b));
})(9, 6);

console.log(typeof miFuncion);
function miFuncionDos(a, b){
    console.log(arguments.length);
}
miFuncionDos(5, 7);

//toString
var miFuncionTexto = miFuncionDos.toString();
console.log(miFuncionTexto);

// 4-Funciones de tipo self y invoking
//Funciones de tipo sel y invoking
(function(a, b ){
    console.log('Ejecuntando la funcion: '+ (a + b));
})(9, 6);

// 3- Funciones de tipo Expresion 
miFuncion(8, 2); // Esto se le conoce coo hosting

function miFuncion(a,b){
   // console.log("Sumamos: "+ (a +b)); Sumamos: 10, Sumamos: 9, Sumamos: 13
    return a+b;
}

//Lamando la funcion 
miFuncion(5, 4);

let resultado = miFuncion(6, 7);
console.log(resultado)

//Declaramos una funcion de tipo Expresion o anonima 
let x = function(a, b){return a + b}; // Necesita cierre con punto y coma 
resultado = x(5, 6); // al llamarla se pone la variable y parentesis
console.log(resultado); 11

// 2- Palabra Return
miFuncion(8, 2); // Esto se le conoce coo hosting

function miFuncion(a,b){
   // console.log("Sumamos: "+ (a +b)); Sumamos: 10, Sumamos: 9, Sumamos: 13
    return a+b;
}

//Lamando la funcion 
miFuncion(5, 4);

let resultado = miFuncion(6, 7);
console.log(resultado); undefined 

// 1- Introduccion Funciones 
miFuncion(8, 2); // Esto se le conoce coo hosting

function miFuncion(a,b){
    console.log("Sumamos: "+ (a +b)); Sumamos: 9
}

//Lamando la funcion 
miFuncion(5, 4);

