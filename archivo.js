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



const AUTOS =  [
    {nombre:"civic", precio :400000 },
    {nombre:"accord", precio :500000},
    {nombre:"fit", precio :800000}
];

AUTOS.push (`Civic 00`, 600000);
AUTOS.push (`Nsx 1990`,1000000);
AUTOS.push (`Prelude`,700000);

console.log ( AUTOS[0]); 
console.log ( AUTOS.length);
console.log ( AUTOS.includes('Civic 00') );
console.log ( AUTOS.includes('ONIX') );

for (const automoviles of AUTOS){
    console.log (AUTOS);  
}

AUTOS.forEach((x)=>{
    console.log(x)
})

const encontrarAuto = AUTOS.find (el => el.nombre==="civic");
const encontrarAuto1 = AUTOS.find (el => el.precio==="ford");  // no se va a encontrar nada
const encontrarAuto2 = AUTOS.find (el => el.precio>700000);

console.log (encontrarAuto)
console.log (encontrarAuto1)
console.log (encontrarAuto2)


const filtro = AUTOS.filter(el => el.nombre === "civic" );
const filtro1 =AUTOS.filter(e => e.precio < 900000 );  // lo que si no entenderia es porque no muestra los autos que agrege con push

console.log(filtro);
console.log(filtro1);



