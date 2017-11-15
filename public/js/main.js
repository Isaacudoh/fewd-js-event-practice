(function() {
  // always use const //
 const buttons = document.querySelectorAll('button')

 buttons[0].addEventListener('click', colorChange);

 function colorChange () {
   buttons[0].classList.toggle('button-danger');
 }

})()