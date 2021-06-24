const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li');

hamburger.addEventListener('click', () => {
    navlinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle('fade');
    });
})

// create web audio api context
//<i class="fas fa-sync fa-spin"></i> Extracting Water...
const button = document.querySelector('button.btn'); 
var html = `<i class="fas fa-sync fa-spin"></i> Ejecting Water...`;
var bar = new ldBar(
  '.ldBar', /* Element or Selector for target element */
  {
    "stroke": 'data:ldbar/res,gradient(0,1, #0576ff, #24f8ff)',
    "stroke-width": 1,
    "preset": "circle",
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
      button.innerHTML = `Fix My Speakers`;
      button.style.filter = "hue-rotate(0deg)"
      loadingb.style.display = 'none'
      bar.value = 0;
    }, 30 * 1000);

}

function hider() {
  if (navbutton.attr('aria-expanded') === "true") {
    bottom.style.display = 'none';
  } else {
    bottom.style.display = 'block';
  }
}
