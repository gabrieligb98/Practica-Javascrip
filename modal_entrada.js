const cerrarModal = document.querySelector('#cerrar__modal');
const modal = document.querySelector('.modal');

cerrarModal.addEventListener('click', ()=>{
   
    modal.classList.remove('modal--show')
    
})

document.getElementById('iname').addEventListener('keypress',(e)=>{
    if (e.key === 'Enter') {
        modal.classList.remove('modal--show');
        conseguirValorInput()
    }
})