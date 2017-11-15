(function() {
  // always use const //
 const buttons = document.querySelectorAll('button')

 buttons[0].addEventListener('click', colorChange);
 buttons[1].addEventListener('click', changeText);
 buttons[2].addEventListener('click', changeTextBack);

 function colorChange () {
   // buttons[0].classList.toggle('button-danger');
   //event.target.classlist.toggle('button-danger');
   // use toggle for click events
   this.classList.toggle('button-danger');
 }

 function changeText () {
   this.innerText = 'you clicked me';
 }

 function changeTextBack (){
   buttons[1].innerText = 'button two';
 }
 
})();