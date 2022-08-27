const background =  document.getElementById('background');
const ears = document.getElementById('ears');

const hairButton = document.getElementById('hairButton');
const earsButton = document.getElementById('earsButton');

const hairStyles = document.getElementById('hairStyles');
const earsStyles = document.getElementById('earsStyles');

const defaultHair = document.getElementById('defaultHair'); 
const bangHair = document.getElementById('bang');

const defaultEars = document.getElementById('defaultEars');
const tiltBackwardEars = document.getElementById('tiltBackward');


function hide(ids){
    ids.forEach(id => {
      id.style.display ='none';
    });
  }

function show(ids){
    ids.forEach(id => { 
      id.style.display ='block';
  });
}



// Hair Styles

hairButton.addEventListener('click', (event) => { 
  if (hairStyles.style.display == 'inline') {
    hairStyles.style.display = 'none';
  } else {
    earsStyles.style.display = 'none';
    hairStyles.style.display = 'inline';
  }
});

bangHair.addEventListener('click', (event) => {hair.setAttribute('src', 'assets/hair/bang.png')});
defaultHair.addEventListener('click', (event) => {hair.setAttribute('src', 'assets/hair/default.png')});


// Ear styles

earsButton.addEventListener('click', (event) => { 
  if (earsStyles.style.display == 'inline') {
    earsStyles.style.display = 'none';
  } else {
    hairStyles.style.display = 'none';
    earsStyles.style.display = 'inline';
  }
});

defaultEars.addEventListener('click', (event) => {ears.setAttribute('src', 'assets/ears/default.png')});
tiltBackwardEars.addEventListener('click', (event) => {ears.setAttribute('src', 'assets/ears/tilt-backward.png')});

