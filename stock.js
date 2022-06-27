
let stockAutos = [
    {id: 1, modelo: "Civic", anio:1995, des:"Coupe", precio:1780, estado: "Usado" , img: './img/civic953.jpg'},
    {id: 2, modelo: "Accord", anio:2002, des:"Sedan", precio:2250, estado: "Usado" , img: './img/accord9802.png'},
    {id: 3, modelo: "NSX", anio:1990, des:"Coupe", precio:13350 , estado: "Usado" , img: './img/honda_nsx3.jpg'},
    {id: 4, modelo: "Fit", anio:2016, des:"Sedan", precio:3555, estado: "Usado" , img: './img/fit16.jpg'},
    {id: 5, modelo: "Fit", anio:2021, des:"Sedan", precio:11150, estado: "Nuevo" , img: './img/fit21.jpg'},
    {id: 6, modelo: "Pilot", anio:2007, des:"4x4", precio:10450, estado: "Usado" , img: './img/honda_pilot.jpg'},
    {id: 7, modelo: "Integra", anio:1992, des:"Coupe", precio:6450, estado: "Usado" , img: './img/integra.jpg'},
    {id: 8, modelo: "Prelude", anio:1993, des: "Coupe", precio:7780, estado: "Usado", img: './img/prelude.png'},
    {id: 9, modelo: "S2000", anio:2000, des: "Coupe", precio:12450, estado: "Usado", img: './img/hs2000.jpg'},
]  

const valorDolar = 1.76
let totalEnUsdOficial = (autos,valorActual) => {
    //let encontrar = stockAutos.find((producto) => producto.id === id);
    //encontrar.precio = encontrar.precio *1.30 *1.35

    autos.forEach((producto) => {producto.precio = Math.round(producto.precio*valorActual)})     
}
totalEnUsdOficial(stockAutos,valorDolar)


