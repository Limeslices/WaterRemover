// create web audio api context
//<i class="fas fa-sync fa-spin"></i> Extracting Water...
const button = document.querySelector('button.ld'); 
const stay = document.querySelector('p.stay');
const navbutton = document.querySelector('button#navbutt');
const bottom = document.querySelector('a#more');
var html = `<i class="fas fa-sync fa-spin"></i> Ejecting Water...`;
var bar = new ldBar(
  '.ldBar', /* Element or Selector for target element */
  {
    "stroke": 'rgb(170,225,233)',
    "stroke-width": 10,
    "preset": "line",
    "value": 0,
    "duration": 33
    
   } /* check Reference for supported options */
);

const loadingb = document.querySelector('div.ldBar')
loadingb.style.display = "none"

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
  loadingb.style.display = 'block'
  // create Oscillator node
  var audio = new Audio('165.mp3');
  var ding = new Audio('ding.mp3');
  audio.play();
  bar.set(
    100,     /* target value. */
    true   /* enable animation. default is true */
  );
  setTimeout(
    function() {
      ding.play();
      button.disabled = false
      button.innerHTML = `Eject Water`;
      
    }, 30 * 1000);

}

function hider() {
  if (navbutton.attr('aria-expanded') === "true") {
    bottom.style.display = 'none';
  } else {
    bottom.style.display = 'block';
  }
}