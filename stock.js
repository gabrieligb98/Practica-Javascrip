
//  let stockAutos = []  





// Habia creado un boton del dolar que cotizaba en base al valor actual pero decidi eliminarlo
// y quedo esta funcion de como iba a ser

const valorDolar = 1.76

let totalEnUsdOficial = (autos,valorActual) => {
    //let encontrar = stockAutos.find((producto) => producto.id === id);
    //encontrar.precio = encontrar.precio *1.30 *1.35

    autos.forEach((producto) => {producto.precio = Math.round(producto.precio*valorActual)})     
}
totalEnUsdOficial(stock,valorDolar)



//          si lo hiciera mediante una funcion constructora 



// function auto(id, modelo, anio, des, estado, img ) {
//     this.id = id;
//     this.model 	 = modelo;
//     this.anio  = anio;
//     this.des = des;
//     this.estado = estado;  
//     this.img = img; 
// }   

// o mediante una clase constructora 


// class autos{
//     constructor(id, modelo, anio, des, estado, img ) {
//     this.id = id;
//     this.model 	 = modelo;
//     this.anio  = anio;
//     this.des = des;
//     this.estado = estado;  
//     this.img = img; 
// }   


// const civic = new auto("1", "civic", 1995, "coupe" , "usado" , './img/civic953.jpg');
// const accord = new auto("2", "Accord", 2002, "sedan" , "usado" , './img/./img/accord9802.png.jpg');

// console.log(civic)

