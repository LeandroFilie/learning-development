const openModalButton = document.getElementById('openModal');
const closeModalButton = document.querySelectorAll('.close-modal')
const modal = document.getElementById('modal');

function closeModalClass(){
  modal.classList.add('invisible')
  modal.classList.remove('animated-show')
}

function closeModal(event){
  const typeEvent = event.type;
  if(typeEvent === 'keydown'){
    if(event.key === 'Escape'){
      closeModalClass()
    }
  }
  else if(typeEvent === 'click'){
    closeModalClass()
  }

}

function openModal(){
  modal.classList.remove('invisible')
  modal.classList.add('animated-show')

  document.addEventListener('keydown', closeModal)

  closeModalButton.forEach(button => button.addEventListener('click',closeModal))
}

openModalButton.addEventListener('click',openModal)






