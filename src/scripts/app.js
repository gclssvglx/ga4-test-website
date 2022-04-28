window.onload = function (event) {
  var elements = document.getElementsByTagName('a');
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', handleLinkClick);
  }
}

function handleLinkClick(event) {
  event.preventDefault();
}
