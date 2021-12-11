// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const colorStates = {
  "red" : "",
  "": "red"
}

let modal = document.getElementById('modal')
modal.setAttribute('class', 'hidden')
const hearts = document.querySelectorAll('.like-glyph')

hearts.forEach(function(heartsClicker){
  heartsClicker.style.cursor = "pointer";
  heartsClicker.addEventListener('click', serverHandler)
})

const fullHearts = document.querySelectorAll('.like-glyph');

function fillHeart(e) {
  const heart = e.target;
  if(heart.innerHTML === EMPTY_HEART){
    heart.innerHTML = FULL_HEART;
    heart.className = "activated-heart";}
    else { heart.innerHTML = EMPTY_HEART;
    heart.className = '';}
  }

for (const glyph of fullHearts) {
  glyph.addEventListener("click, fillHeart")
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

