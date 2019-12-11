function addItem(textItem){
  var item = document.createElement('LI');
  var text = document.createTextNode(textItem)

  item.appendChild(text)

  document.getElementById('lista').appendChild(item);

}

document.getElementById('formItem').addEventListener('submit', function(event) {
  event.preventDefault()

  var element = document.getElementById('text-item');

  addItem(element.value);

  element.value = ''

})
