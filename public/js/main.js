(function() {
  // always use const //
 const buttons = document.querySelectorAll('button')

 buttons[0].addEventListener('click', colorChange);

 function colorChange () {
   // buttons[0].classList.toggle('button-danger');
   //event.target.classlist.toggle('button-danger');
   this.classList.toggle('button-danger');
 }

})()