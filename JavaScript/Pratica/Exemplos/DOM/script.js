const element = document.querySelector('h1');

// textContent
element.textContent = 'Olá dev';

// innerText
element.innerText = 'Olá dev inner Text';

// innerHTML
element.innerHTML = '<small>Olá</small> Devs';

// value
const elementInput = document.querySelector('input');

elementInput.value = 'Populado...'

// Atributos

//setar atributo
element.setAttribute('id','header')

//pegar valor do atributo
element.getAttribute('id')

//remover atributo
element.removeAttribute('id')