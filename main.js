let a=56;
let b=2;
let c;
function sumar(a,b){
c=a+b;
return console.log('Suma.  ',c);
}
function restar(a,b){
    c=a-b;
    return console.log('Resta:   ',c);
}
function multiplicar(a,b){
    c=a*b;
    return console.log('Multiplicación:  ', c);
}
function dividir(a,b){
    c=a/b;
    return console.log('División:   ', c);
}

function modulo(a,b){
    c=a%b;
    return console.log('Módulo:  ',c);
}

function Potencia(a,b){
    c=a**b;
    return console.log(`potencia:  `, c);
}
sumar(a,b);
restar(a,b);
multiplicar(a,b);
dividir(a,b);
modulo(a,b);
Potencia(2,12);



// Crea una función mediante un constructor de objeto.
// let saludarObjeto = new Function('return `Hola Mundo`;');
// console.log(saludarObjeto());




// Crea una función mediante expresión.
// const saludarExpresión = function (){
//     return `Hola Mundo`;
// }
// console.log(saludarExpresión());


// Crea una función mediante declaración.
// function saludarDeclaración(){
//     return `Hola Como estas`;
// }
// console.log(saludarDeclaración());

// const fAfirmativo = function (num) {
//     return `El numero ${num} es el correcto de la condicion`;
// }
// const fError = function (num) {
//     return `El numero ${num} no cumple con la condicion`;
// }
// const fEjecutar = function (callbakA, callbackE) {
//     const num = Math.trunc(Math.random() * 10);
//     return (num >= 1 && num <=5)
//         ?(console.log(callbakA(num)),true)
//         :(console.error(callbackE(num)),false);
    
// }

// console.warn(
//     (fEjecutar(fAfirmativo, fError))
//     ?`Se ejecuto el callback fAfirmativo`
//     :`Se ejecuto el callback fError`
// );



// console.warn(
//         (fEjecutar(fAfirmativo, fError))
//         ?`Se ejecuto el callback fAfirmativo`
//         :`Se ejecuto el callback fError`
//     );






// const fAfirmativo = function(num){
//     return `El numero ${num} es el cocrrecto de la condición`;

// }

// const fError=function(num){
//     return `El numero ${num} es el cocrrecto de la condición`;
// }
//  const= fEjecutar=function(callbakA, callbakE){
//     //  const num=Matn.round(Math.random()*10);
//     //  const num=Matn.floor(Math.random()*10);
//      const num=Matn.trunc(Math.random()*10);
//     //  console.log(num);
//     // return if (num>=4 && num<=8){
//     //      return callbakA(num);
//     //  }else{
//     //      console.log(callbakE(num););
//     //     //  return callbakE(num);
//     //  }

//      (num>=4 && num<=8)? (console.log(callbakA(num)), true)
//     :
//         (console.log(callbakE(num)), false)
//        //  return callbakE(num);
    
//  }



// Callbacks: Llamada hacia atrás, pasar función por parámetro; no muestra los datos de dicha función


// const saludar = function () {
//     return `Hola Mundo`;
// }

// const ejecutar = function(callback) {
//     return callback();
// }
// console.log(ejecutar(saludar));


// const saludar= function(){
// return `Dios tiene el Control`;
// }

// const ejecutar=function(Callback) {
// return Callback();
// }
// console.log(ejecutar(saludar));

// const saludar= function(){
//     return `Dios tiene el Control`;
//     }
    
//     const ejecutar=function(rellamado) {
//     return rellamado();
//     }
//     console.log(ejecutar(saludar));
// Funciones anónimas
// function saludar() {
//     return `Hola Mundo`;
// }
// const saludar2 = function () {
//     return `Hola Mundo`;
// }

// console.log(saludar3);
// const saludar3 = new Function('return "Hola Mundo";');

// console.log(saludar);
// console.log(saludar2);






// Crea una función mediante un constructor de objeto.
// let saludarObjeto = new Function('return `Hola Mundo`;');
// console.log(saludarObjeto());




// Crea una función mediante expresión.
// const saludarExpresión = function (){
//     return `Hola Mundo`;
// }
// console.log(saludarExpresión());




// Crea una función mediante declaración.
// function saludarDeclaración(){
//     return `Hola Como estas`;
// }
// console.log(saludarDeclaración());