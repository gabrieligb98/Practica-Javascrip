let usuario = document.getElementById("nombre_de_usuario")

usuario.innerHTML = prompt("Ingrese su nombre de usuario")


const  productosContainer = document.querySelector('#contenedor')


stockAutos.forEach((items) =>{
    const div = document.createElement('div');
    div.classList.add('producto');

    div.innerHTML = `
                <img src=${items.img} alt ="civic">
                <h3><b>Modelo: </b>${items.modelo}</h3>
                <p>${items.des}</p>
                <p><b>Año: </b>${items.anio}</p>
                <p class="precioProducto">Precio: $ ${items.precio}</p>
                <p> Estado: <b>${items.estado}</b></p>
                <button class="btn-add">Agregar <i class="fas fa-shopping-cart"></i></button>
            `

        contenedor.append(div)
})



