let openBtn = document.querySelector('#open-btn');
let modalContainer =  document.querySelector('#modal-container')
let closeBtn =  document.querySelector('.btn-close')

//Modal Open 
openBtn.addEventListener('click', ()=>{
    modalContainer.style.display = 'block';
})

//Modal Close
closeBtn.addEventListener('click', ()=>{
    modalContainer.style.display = 'none';
})