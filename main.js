const changeButton = document.querySelector('.toggle');
function changeMode() {
  document.body.classList.toggle('changemode');
}

changeButton.addEventListener('click', changeMode);