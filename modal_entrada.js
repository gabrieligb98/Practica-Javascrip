const cerrarModal = document.querySelector('#cerrar__modal');
const modal = document.querySelector('.modal');

cerrarModal.addEventListener('click', ()=>{
   
    modal.classList.remove('modal--show')
    
})