(function() {
  // always use const //
  const buttons = document.querySelectorAll('button')

  buttons[0].addEventListener('click', function () {
    buttons[0].classList.toggle('button-danger')
  })

})()