const lista = [];

function addItem(element){
  lista.push(element)
}

//percorro todos os itens na lista, renderizando um por um na tela.
function listItem(){
  lista.map(item => {
    document.getElementById('lista').innerHTML += item
  })
}

document.getElementById('formItem').addEventListener('submit', function(event) {
  event.preventDefault()

  var element = document.getElementById('text-item');

  //envia uma template string pra ser adicionada na lista
  addItem(`<li>${element.value}</li>`);


  //limpa a lista pra renderizar a nova na tela
  document.getElementById('lista').innerHTML = '';


  //renderiza nova lista com itens adcionados
  listItem();


  element.value = ''

})
