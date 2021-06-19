// create web audio api context
//<i class="fas fa-sync fa-spin"></i> Extracting Water...
const button = document.querySelector('button'); 
const stay = document.querySelector('p.stay');
var html = `<i class="fas fa-sync fa-spin"></i> Extracting Water...`;

var audioCtx = new(window.AudioContext || window.webkitAudioContext)();

function playanimation() {
  n=button.classList;
  n.remove('ld-blur-in');
  setTimeout(function(){
    n.add('ld-blur-in');
  },100)
}


function afterNote(frequency, duration) {
  // create Oscillator node
  var oscillator = audioCtx.createOscillator();

  oscillator.type = 'sine';
  oscillator.frequency.value = frequency; // value in hertz
  oscillator.connect(audioCtx.destination);
  oscillator.start();

  setTimeout(
    function() {
      oscillator.stop();
      
    }, duration * 1000);

}

function playNote(frequency, duration) {
  button.disabled = true
  button.innerHTML = html;
 
  // create Oscillator node
  var oscillator = audioCtx.createOscillator();

  oscillator.type = 'sine';
  oscillator.frequency.value = frequency; // value in hertz
  oscillator.connect(audioCtx.destination);
  oscillator.start();

  setTimeout(
    function() {
      oscillator.stop();
      afterNote(1080, .2)
      button.disabled = false
      button.innerHTML = `Extract Water`;
    }, duration * 1000);

}


function playMelody() {
  if (notes.length > 0) {
    note = notes.pop();
    playNote(note[0], 1000 * 256 / (note[1] * tempo));
  }
}



notes = [
  [659, 4],
  [659, 4],
  [659, 4],
  [523, 8],
  [0, 16],
  [783, 16],
  [659, 4],
  [523, 8],
  [0, 16],
  [783, 16],
  [659, 4],
  [0, 4],
  [987, 4],
  [987, 4],
  [987, 4],
  [1046, 8],
  [0, 16],
  [783, 16],
  [622, 4],
  [523, 8],
  [0, 16],
  [783, 16],
  [659, 4]
];

notes.reverse();
tempo = 100;

//playMelody();