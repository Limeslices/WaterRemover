// create web audio api context
//<i class="fas fa-sync fa-spin"></i> Extracting Water...
const button = document.querySelector('button'); 
const stay = document.querySelector('p.stay');
var html = `<i class="fas fa-sync fa-spin"></i> Extracting Water...`;


function playanimation() {
  n=button.classList;
  n.remove('ld-blur-in');
  setTimeout(function(){
    n.add('ld-blur-in');
  },100)
}


function playNote() {
  button.disabled = true
  button.innerHTML = html;
 
  // create Oscillator node
  var audio = new Audio('165.mp3');
  audio.play();

  setTimeout(
    function() {
      button.disabled = false
      button.innerHTML = `Extract Water`;
    }, duration * 1000);

}
