//          mas adelante quiero agregar la forma de colocar el nombre pero sin el prompt

// let usuario = document.getElementById("nombre_usuario")
// usuario.innerHTML = prompt("Ingrese su nombre de usuario")

let usuario
const usuarioLs = localStorage.getItem('user')

if (usuarioLs) {
    usuario =  usuarioLs
}else {
        usuario = prompt("Ingrese su Nombre de usuario");
        localStorage.setItem('user', usuario);
}

const title = document.querySelector("#nombre_usuario");
title.innerHTML = `${ usuario }`;
const cleanLs = () =>{
    localStorage.removeItem('user');
    window.location.reload();
}
document.querySelector("#recarga").addEventListener('click', cleanLs)




//  quiero ver como vincular el email con la base de datos


// let input2  = document.getElementById("mail");
// input2.onchange = () => {console.log("valor2")};
// let input1  = document.getElementById("nombre")
// input1.addEventListener('input', () => {
// console.log(input1.value)
// })


// let miFormulario      = document.getElementById("formulario");
// miFormulario.addEventListener("submit", validarFormulario);

// function validarFormulario(e){
//     e.preventDefault();
//     console.log("Formulario Enviado");    
// }



const productosContainer = document.querySelector('#contenedor');
const carritoContenedor = document.querySelector ('#carrito_contenedor');
const carritoContador = document.querySelector ('#contador');
const precioTotal = document.querySelector ('#precioTotal');
const btnVaciar = document.querySelector ('#vaciarCarrito');
let carrito 
const carritoLS = JSON.parse (localStorage.getItem('carrito'));





//        Agregar tarjetas o card a la pagina


//                  Funciones 

stockAutos.forEach((items) =>{
    const div = document.createElement('div');
    div.classList.add('producto');

    div.innerHTML = `
                <img src=${items.img} alt ="civic">
                <h3><b>Modelo: </b>${items.modelo}</h3>
                <p>${items.des}</p>
                <p>Año: <b>${items.anio}</b></p>
                <p class="precioProducto">Precio: $ ${items.precio} USD</p>
                <p> Estado: <b>${items.estado}</b></p>
                <button onClick ="addCar(${items.id})" class="btn-add">Agregar <i class="fas fa-shopping-cart"></i></button>
            `

        contenedor.append(div)
})





//   funcion de intinerar en mi stock de autos y agregarlos a la bolsa de compra


const addCar = (id) => {
    const bolsa = stockAutos.find ((producto) => producto.id === id);
    carrito.push(bolsa)
    localStorage.setItem('carrito',JSON.stringify(carrito)),
    
    
   
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Has comprado Honda ${bolsa.modelo}`,
        showConfirmButton: false,
        timer: 1500
        
      })


    renderCarrito()
    controlCantidad()
    totalCarrito()

}


const renderCarrito = () => {
    carritoContenedor.innerHTML = '';

    carrito.forEach((item) => {
        const div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        
        div.innerHTML =`
        <p>${item.modelo}</p>
        <p>$ ${item.precio}</p>
        <button onclick="REMOVECARRITO(${item.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `
        carritoContenedor.append(div) ;             
    })
}


// funcion para aumentar el contador al lado del carrito


const controlCantidad = () => {
    carritoContador.innerText = carrito.length;
}


// funcion  para llegar al total de las compras en el carrito


const totalCarrito = () => {
    let total = 0 ;
    carrito.forEach ((producto) => {
        total += producto.precio 
    })
    
    precioTotal.innerText = total
}




// funcion para borrar del carrito


const REMOVECARRITO = (id) => {  
    const item = stockAutos.find((id)=>stockAutos.id === id)
    const indice = carrito.indexOf (item)
    carrito.splice(indice,1);


    Toastify({
        text: "has removido un articulo del carro de compras",
        duration: 3000,
        destination: "",
        newWindow: true,
        close: true,
        gravity: "", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();



    localStorage.setItem('carrito',JSON.stringify(carrito)),
    
    renderCarrito()
    controlCantidad()
    totalCarrito()
}


//        borrar todo los elementos del carro  


const vaciarCarrito = () => {
    carrito.length = 0;
   
    localStorage.setItem('carrito',JSON.stringify(carrito)),


    Swal.fire({
        position: 'center',
        icon: 'error',
        title: `:( la consecionaria se lamenta tu decisión`,
        showConfirmButton: false,
        timer: 3000
        
      })


    renderCarrito()
    controlCantidad()
    totalCarrito()
}
btnVaciar.addEventListener('click', vaciarCarrito)


if (carritoLS){
    carrito = carritoLS
    
    renderCarrito()
    controlCantidad()
    totalCarrito()  
}else {
    carrito = []
}
// en este pienso aplicar el operador avanzado, pero no se me ocurre bien como.




document.querySelector(".btn-add").addEventListener("click", function(){
    this.style.backgroundColor = "red";
    
})
// no se porque me toma solo una carta y es la primera . 





// document.querySelector("".texto").addEventListener("click", validar) ; 
// const validar = () => {
//     const { value: email } = await Swal.fire({
//         title: 'Input email address',
//         input: 'email',
//         inputLabel: 'Your email address',
//         inputPlaceholder: 'Enter your email address'
//     })
    
//     if (email) {
//         Swal.fire(`Entered email: ${email}`)
//     }
// } 

// por lo que vi utiliza async tengo pensado agregarlo al formulario