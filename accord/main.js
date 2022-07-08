// Var

const accord = document.getElementsByClassName('content-container')


for (let i = 0; i < accord.length; i++) {
  accord[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

