//          mas adelante quiero agregar la forma de colocar el nombre pero sin el prompt

// let usuario = document.getElementById("nombre_usuario")
// usuario.innerHTML = prompt("Ingrese su nombre de usuario")

// let usuario
// const usuarioLs = localStorage.getItem('user')

// if (usuarioLs) {
//     usuario =  usuarioLs
// }else {
//         const nombreUsuario = document.getElementById("#iname")
//         localStorage.setItem('user', nombreUsuario);
// }






const conseguirValorInput = () =>{
    let inputValue  = document.getElementById("iname").value; 
    document.getElementById("tutexto").innerHTML = inputValue; 
    localStorage.setItem('user', inputValue);

    // let personal = localStorage.getItem('usuarios'); 
    // let guardarValor = []
    // let user = null;
    // class usuarios {
    //     constructor(usuario,carrito){
    //         this.usuario = usuario;
    //         this.carrito = carrito;  
    //     }
    // }
    
    // if (personal == "") {
    //     const user = new usuarios ("admin",localStorage.getItem('carrito'));
    //     guardarValor.push(user);
    //     localStorage.setItem('usuarios',JSON.stringify(guardarValor));
    // } else {
    //     guardarValor = localStorage.getItem('usuarios');
    // }
    
    // for ( cliente of guardarValor){
    //     if ( inputValue == cliente.usuarios){
    //         localStorage.setItem('user',JSON.stringify(cliente));
    //     }else {
    //         user = new usuarios (inputValue,localStorage.getItem('carrito'));
    //         guardarValor.push(user);
    //     }
    //     console.log(user)
    // }
    
    // localStorage.setItem('usuarios', JSON.stringify(guardarValor));
    

  }


// const title = document.querySelector("#nombre_usuario");
// title.innerHTML = `${ usuario }`;
// const cleanLs = () =>{
//     localStorage.removeItem('user');
//     window.location.reload();
// }
// document.querySelector("#recarga").addEventListener('click', cleanLs)




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

let stock = []



    //        Agregar tarjetas o card a la pagina
    

//                  Funciones 
fetch('/data.json')
    .then( (res) => res.json())
    .then( (data) => {
        stock = data
        stock.forEach((items) => {
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
    })







//   funcion de intinerar en mi stock de autos y agregarlos a la bolsa de compra


const addCar = (id) => {
    const bolsa = stock.find ((producto) => producto.id === id);
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
    const item = stock.find((id)=>stock.id === id)
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




// if (carritoLS){
//     carrito = carritoLS
    
//     renderCarrito()
//     controlCantidad()
//     totalCarrito()  
// }else {
//     carrito = []
// }

function carritoLsOkey () {
    carrito = carritoLS
    
    renderCarrito()
    controlCantidad()
    totalCarrito() 
}

// OPERADOR AVANZADO

carritoLS ? carritoLsOkey () : carrito = []





const BOTONES = document.querySelectorAll(".btn-add");

for(const boton of BOTONES){
    boton.addEventListener("click", function(){
        boton.style.backgroundColor = "blue";
    })
}

// .addEventListener("click", function(){   
//     this.style.backgroundColor = "red";    
// })
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