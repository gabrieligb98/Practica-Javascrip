// 
let nombre = "Jorge"

/*

let nombre
nombre = "Gabriel"

*/

let apellido
apellido ="Jazinto"
const EDAD= 10



//console.log (nombre +" "+ apellido)
//console.log (EDAD)
//alert ( "el nombre es: " )


//let color = "Blue, red, green"

//console.log (color + nombre)

/*let name = prompt("escribe tu nobmre") ;
alert (name)*/



/*
let numero1 = 1;
let numero2 = 5;
let numero3 = 10;

if (numero1 == 5) {
        console.log ("si el numeor es 1 vas a ver este mensaje");
} else {
    console.log ("el numero no tiene valor 1 ")
}
*/




/*

let nombreUsuario = prompt("Ingresar nombre de usuario")

if (nombreUsuario == "") {
    alert("no ingresaste nombre de usuario");
} 
else {
    alert("nombre de usuario ingresado " + nombreUsuario);
}

*/





let precio = parseFloat (prompt("Ingrese el Precio")); 

if (precio < 30) {
    alert("el precio es menor a 30");
}
else if (precio > 150) {
    alert (" el precio es mayor a 150");
}
else{ 
    alert ("no sabemos el precio");
}



let name = prompt("ingrese su nombre") 
let age = 23

function saludar () {
    console.log("Bienvenidos al foro " + name + age);
}

saludar ();


// let ingresarNumero = parseInt(prompt("Ingresar Numero"));     MULTIPLICADOR


// for (let i = 1; i <= 10; i++) {
//     let resultado = ingresarNumero * i ;
//     alert(ingresarNumero +" X "+ i +" = "+ resultado);
// }