//                       clase 1           

// let nombre = prompt("Ingrese su nombre");

// alert ("Bienvenido " + nombre);

// let apellido = prompt("Ingrese su apellido");

// alert ("Su apellido es " + apellido);

// alert ("Nombre Completo " + nombre + " " + apellido);

// let edad = parseInt(prompt("ingrese su edad"));

// alert ("Su edad es " + edad);

// let dia = parseInt(prompt("ingrese el dia de su nacimiento"));
// let mes = parseInt(prompt("Ingrese el mes de nacimiento"));
// let anio= parseInt (prompt("Ingrese el año en que usted nacio"));
// alert (`Fecha de nacimiento: ${dia} / ${mes} / ${anio}` );







//                          Clase 4 Entregable 





// for (let i = 1; i <= 10; i++)  {
//     let nombre = prompt("Ingrese su nombre");
//     let edad = Number(prompt("Ingrese su edad"));

//     //alert (`Su numero es  ${i} + Nombre  ${nombre} + " paciente de edad ${edad} años`)
//     console.log (`A usted le corresponde el N° ${i} + Nombre  ${nombre} + " paciente de edad ${edad} años`)
// }

// let interes = 1.16;
// let iva = 1.21;
// let precioProducto = Number(prompt("Ingrese el valor del producto"));
// let cuotas  = Number(prompt("Ingrese la cantidad de cuotas"));
// let valorCuota = (precioProducto / cuotas ) * interes;
// let sumarIva =  valorCuota * iva
// let total = sumarIva
//         alert ( total );


//                   Practica ejemplo

// function sumar(num1,num2) {
//     num1 + num2;
// }

// let resultado = sumar(10, 20);

// console.log(resultado);






//            Practicas                                //


                                                    //Ejercicio 1


/*console.log ("hola mundo")
function sumaNumero (){
    let num1= 10;
    let num2= 20;                                                
    console.log (num1 + num2);
}

sumaNumero() ; */          



                                                    // EJERCICIO 2


/*let num1 = Number(prompt("Ingrese un numero deseado"));;
let num2 = Number(prompt("Ingrese un numero deseado"));
let total = num1 + num2 ;

if (total === 25 ) {
    alert ("el numero ingresado es igual a 25") 
}
else if (total <= 25 ) {                                    
    alert ("el numero ingresado es menor a 25")
} else  {
    alert ("el numero es mayor a 25 ");
}*/


                                                    // EJERCICIO 3 

/*
num1 = 22 ;
num2 = 17 ;
num3 = 23;
num4 =36;


//console.log (num1 == num2);
//console.log (num1 < num3 && num4 != num4) || (num2 > num3 || !(num>num1));
//console.log (num1 > num2 || num3 > num4 );

*/




                                                    //EJERCICIO 4 //

/*
let nombre = "Gabriel";
let nombre2 = prompt (" Ingrese en donde usted cursa y verifique si esto es valido ");
let institucion = "Coderhouse";
// if (nombre =  "!Jose") {
//     alert ( "Este bloque es verdadero" );
// }

if (nombre2 == "CoderHouse"){
    alert ("Felicitaciones usted cursa en CoderHouse");
} else if (nombre2 != "CoderHouse") {
    alert ( " vuelva a recargar la pagina");
}

*/



                                                                    //EJERCICIO 5

            //   CANTIDAD DE DINERO DE LOS INTEGRANTES DEL GRUPO 

            //   Cofla = 300 pesos 
            //   Roberto = 130 pesos
            //   Pedro  = 150 pesos 

            //    Precios de los helados

            //   palito de agua  = 50 pesos
            //   palito de crema = 100 pesos
            //   Bombom helado   =  160 pesos
            //   Bombom Heladovich = 170 pesos
            //   Bombom Helardo   = 180 pesos 
            //   Potecito de helado 2 bochas con confites = 290 pesos
            //   Pote de 1/4 KG   = 290 Pesos





// let montoCofla = Number(prompt("Ingresa el monto disponible Cofla "));
// let montoRoberto = Number(prompt("Ingresa el monto disponible Pedro"));
// let montoPedro = Number(prompt("Ingresa el monto disponible Roberto"));


// if (montoCofla >= 0 && montoCofla <= 49 ){
//     alert("Cofla No tenemos un helado que tenga gusto a pobreza, lo siento")
// }
// else if (montoCofla >= 50 && montoCofla <= 100 ){
//     alert ("Cofla Tenemos disponible helados de agua y de crema por esa cantidad")
// } else if (montoCofla >=101 && montoCofla <= 160 ){
//     alert ("Cofla Te recomiendo que compres el bombom helado")
    
// }else if (montoCofla >=161 && montoCofla <= 170 ){
//     alert ("Cofla Te recomiendo que compres el bombom heladovichh")

// } else if (montoCofla >=171 && montoCofla <= 289) {
//     alert ("Cofla Por ese monto podes comprar el  Bombom Helardo")
// } else if (montoCofla >=290) {
//     alert ("Cofla Tenemos disponibles  El potecito de helado con confites y el pote de helado de 1/4 kg")
// }


// if (montoPedro >= 0 && montoPedro <= 49 ){
//     alert("Pedro No tenemos un helado que tenga gusto a pobreza, lo siento")
// }
// else if (montoPedro >= 50 && montoPedro <= 100 ){
//     alert ("Pedro Tenemos disponible helados de agua y de crema por esa cantidad")
// } else if (montoPedro >=101 && montoPedro <= 160 ){
//     alert ("Pedro Te recomiendo que compres el bombom helado")
    
// }else if (montoPedro >=161 && montoPedro <= 170 ){
//     alert ("Pedro Te recomiendo que compres el bombom heladovichh")
    
// } else if (montoPedro >=171 && montoPedro <= 289) {
//     alert ("Pedro Por ese monto podes comprar el  Bombom Helardo")
// } else if (montoPedro >=290) {
//     alert ("Pedro Tenemos disponibles  El potecito de helado con confites y el pote de helado de 1/4 kg")
// }

// if (montoRoberto >= 0 && montoRoberto <= 49 ){
//     alert("Roberto No tenemos un helado que tenga gusto a pobreza, lo siento")
// }
// else if (montoRoberto >= 50 && montoRoberto <= 100 ){
//     alert ("Roberto Tenemos disponible helados de agua y de crema por esa cantidad")
// } else if (montoRoberto >=101 && montoRoberto <= 160 ){
//     alert ("Roberto Te recomiendo que compres el bombom helado")
    
// }else if (montoRoberto >=161 && montoRoberto <= 170 ){
//     alert ("Roberto Te recomiendo que compres el bombom heladovichh")

// } else if (montoRoberto >=171 && montoRoberto <= 289) {
//     alert ("Roberto Por ese monto podes comprar el  Bombom Helardo")
// } else if (montoRoberto >=290) {
//     alert ("Roberto Tenemos disponibles  El potecito de helado con confites y el pote de helado de 1/4 kg")
// }


        // OTRA ALTERNATIVA


/*

"use strict";

const DEFINIRCOMPRA = (n) => {
    let din = prompt (`dinero de ${n}`);
    if (din >= 50 && din < 100) return (`${n}: Tenemos disponible helados de agua y de crema por esa cantidad`);
    if (din >= 101 && din < 160) return (`${n}: Te recomiendo que compres el bombom helado`);
    if (din >= 161 && din < 170) return (`${n}: Te recomiendo que compres el bombom heladovichh`);
    if (din >= 171 && din < 289) return (`${n}: Por ese monto podes comprar el  Bombom Helardo`);
    if (din >= 290) return (`${n}: Tenemos disponibles  El potecito de helado con confites y el pote de helado de 1/4 kg`);
    
    else return (`${n}: No tenemos un helado sabor pobreza, lo siento `)
}
console.log (DEFINIRCOMPRA ("Cofla"));
console.log (DEFINIRCOMPRA ("Pedro"));
console.log (DEFINIRCOMPRA ("Roberto"));
console.log (DEFINIRCOMPRA (prompt("Ingrese su nombre")));

*/


// let numero = 0 ;
// while (numero < 10) {
//     numero++;
//     numero++;
//     console.log (numero);
// }

// let i = "10"

// for ( i = 0 ; i < 6 ; i++) {
//     console.log (i) ;
// }
// console.log (i) ;




// //console.log (i);

// let hola = "hola"
// document.write ( hola);
// console.log ( hola)






//                    - TRABAJO

// let nombre = (prompt("Ingrese su nombre") )
// alert ( ` Hola ${nombre} Bienvenido a la consecionaria de autos Honda `);
// alert ( "Cual de nuestros modelo te interesa ver, tenemos disponibles civic, accord y fit ");
// let auto = (prompt ("Ingrese que modelos de los anteriormente nombrados quiere"));

// switch (auto) {
//     case "civic":
//         alert (" Genial, tenemos disponible año 94 y 2007");
//         let anio = Number (prompt(" De que año le interesa llevar?"));
//         if( anio == 94 ) {
//             alert ("tiene un valor de 600.000 pesos")
//         }
//         else if ( anio = 2007) {
//             alert ( " el modelo 2007 tiene un valor aproximado de 1.800.000")
//         } else { 
//             alert (" no tenemos ese año")
//         }
//         break
//     case "accord":
//         alert ("Accord solamente nos queda el año 2002");
//         alert ("Vale 800.000 pesos");
//         break
//     case "fit":
//         alert (" Solo tenemos modelo del ultimo año");
//         alert (" el valor es de 3.000.000 de pesos");
//         break
//     default:
//         alert (" No tenemos ese auto");
//         break
// }

// let precioCivic94 = 600000;
// let precioCivic07 = 1800000;
// let precioAccord = 800000;
// let precioFit = 3000000;
// let cuotas = (1 - 12);
// let autoElegido= Number(auto/cuotas);
// console.log (autoElegido);



// if ( auto == "civic"){
//     alert (" Genial, tenemos disponible año 94 y 2007");
        // let anio = Number (prompt(" De que año le interesa llevar?"));
        // if( anio == 94 ) {
        //     alert ("tiene un valor de 600.000 pesos")
        //                     }
        // else if ( anio = 2007) {
        //     alert ( " el modelo 2007 tiene un valor aproximado de 1.800.000")
        // } else { 
        //     alert (" no tenemos ese año")
        // }
// } else if (auto == "accord"){
//     alert ("Solamente nos queda el año 2002");
// } else if (auto == "fit"){
//     alert (" Tenemos modelo del ultimo año y un usado del 2016")
// }else { 
//     alert (" Lo siento no tenemos otro modelo disponible por el momento")
// };


//        SIMULADOR DE EDAD ( NO ME SALIO)


// let totalEdad = 24 + 27 + 38+ 15
// let totalPersonas= 4;
// let porcentajeEdad= totalEdad / totalPersonas;

// function Persona (nombre, edad) {
// this.nombre = nombre;
// this.edad = edad;
// }


// const persona1 = new Persona ( "Gabriel",  24);
// const persona2 = new Persona ( "Martin", 27);
// const persona3 = new Persona ( "Jorge", 38);
// const persona4 = new Persona ( "Maria", 15);

// totalEdad += ("persona1" + "persona2" + "persona3" + "persona4")


// Persona ();
// console.log(Persona)
// console.log(persona1);
// console.log(persona2);
// console.log(persona3);
// console.log(persona4);




// console.log (totalEdad);
// console.log (porcentajeEdad)






//




//Alert de bienvenida

let nombre = (prompt("Ingrese su nombre"));
alert ( `Hola ${nombre} Bienvenido/a a la consecionaria de autos Honda `);

//Menu y operaciones que se puedan hacer con su respectiva validacion
do{
    let menu = menuAuto();
    let operacion = operaciones(menu); 
}while (continuar() == 1);



//Menu para que usuario seleccione el auto que quiera comprar
function menuAuto(){

    let opcion;

    //Do...while para que el usuario seleccione una de las tres opciones. 
    do{
        opcion = parseInt(prompt('Seleccione el auto que desee comprar: \n 1- Civic \n 2- Accord \n 3- Fit' ));
    }while(opcion != 1 && opcion != 2 && opcion != 3); //Establecer la condicion para que el usuario eliga una opcion correcta

    //Dependiendo de la eleccion del usuario, va a retornar algo
    if(opcion == 1) {return "civic"}; 
    if(opcion == 2) {return "accord"};
    if(opcion == 3) {return "fit"};
}

//Funcion para que cada valor que retorne menuAuto() ejecute su funcion correspondiente
function operaciones(menu){
    switch(menu){
        //Si el usuario selecciono la opcion 1 en menu, se ejecuta la function civic() ya que el retorno es "civic"
        case "civic":
            civic();
            break;
        //Si el usuario selecciono la opcion 2 en menu, se ejecuta la function accord() ya que el retorno es "accord"
        case "accord":
            accord();
            break;
        //Si el usuario selecciono la opcion 3 en menu, se ejecuta la function fit() ya que el retorno es "Fit"
        case "fit":
            fit();
            break;
    }
}

//Civic
function civic(){
    let civic;
    do{
        civic = parseInt(prompt(`Solo tenemos disponible los modelos del año 94 y 2007. Seleccione el modelo que desee comprar: \n 1- 1994 \n 2- 2007`));
    } while(civic != 1 && civic != 2);

    if(civic == 1){return alert('Compraste el modelo 1994!');}
    if(civic == 2){return alert('Compraste el modelo 1994!');} 
}

//Accord
function accord(){
    let accord;

    do{
        accord = parseInt(prompt(`Solo tenemos disponible el modelo del año 2002. Desea comprarlo?: \n 1- Si \n 2- No`));
    }while(accord != 1 && accord != 2);

    if(accord == 1){return alert('Compraste el modelo 2002!');}
    if(accord == 2){return alert('No realizaste la compra');}
}

//Fit
function fit(){
    let fit;

    do{
        fit = parseInt(prompt(`Tenemos disponible el modelo del ultimo año y un usado del 2016. Seleccione el modelo que desee comprar: \n 1- Modelo del ultimo año \n 2- 2016 (Usado)`));
    }while(fit != 1 && fit != 2);

    if(fit == 1){return alert('Compraste el modelo del ultimo año!');}
    if(fit == 2){return alert('Compraste el modelo 2016!(Usado)');}
}



//Validacion por si el usuario desea seguir comprando o no
function continuar(){
    return (prompt('Quiere hacer otra accion? \n 1- Si \n 2- No'));
}

alert ("Muchas gracias por elegirnos!")