






const conseguirValorInput = () =>{
    let inputValue  = document.getElementById("iname").value; 
    document.getElementById("tutexto").innerHTML = inputValue; 
    localStorage.setItem('user', inputValue);

  }




const productosContainer = document.querySelector('#contenedor');
const carritoContenedor = document.querySelector ('#carrito_contenedor');
const carritoContador = document.querySelector ('#contador');
const precioTotal = document.querySelector ('#precioTotal');
const btnVaciar = document.querySelector ('#vaciarCarrito');
let carrito 
const carritoLS = JSON.parse (localStorage.getItem('carrito'));
let stock = []
const btnChangeColor = document.querySelector ('#changeColor');



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
        title: `Has eliminado todo tu carrito`,
        showConfirmButton: false,
        timer: 3000
        
      })


    renderCarrito()
    controlCantidad()
    totalCarrito()
}
btnVaciar.addEventListener('click', vaciarCarrito)


function carritoLsOkey () {
    carrito = carritoLS
    
    renderCarrito()
    controlCantidad()
    totalCarrito() 
}

// OPERADOR AVANZADO

carritoLS ? carritoLsOkey () : carrito = []


// 


const BOTONES = document.querySelectorAll(".btn-add");

for(const boton of BOTONES){
    boton.addEventListener("click", function(){
        boton.style.backgroundColor = "blue";
    })
}
 

let addPhoto = document.querySelector(".input__selector")
addPhoto.accept = "image/jpeg"


let ingreso = document.querySelector("#nombre")
ingreso.minLength = 2;


function changeBackgroundColor () {
    let body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = 'black';
}



particlesJS (
    {
        "particles": {
            "number": {
              "value": 50,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#000000"
            },
            "shape": {
              "type": "edge",
              "stroke": {
                "width": 0,
                "color": "#c0721a"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 5,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 4,
              "direction": "top",
              "random": false,
              "straight": false,
              "out_mode": "bounce",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
})

btnChangeColor.addEventListener('click',()=>{
  document.body.classList.toggle('dark');
});

