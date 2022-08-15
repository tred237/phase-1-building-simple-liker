// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let likeList = document.querySelectorAll('.like-glyph');
likeList.forEach(element => element.addEventListener('click', clickAction));

function clickAction(element){
  mimicServerCall()
  .then(() => {
    let heart = element.target.textContent;
    if(heart === EMPTY_HEART){
      element.target.textContent = FULL_HEART;
      element.target.classList.add('activated-heart');
    } else {
      element.target.textContent = EMPTY_HEART;
      element.target.classList.remove('activated-heart');
    }
  })
  .catch(error => {
    let modal = document.querySelector('#modal');
    modal.classList.remove('hidden');
    modal.children[1].textContent = error;
  
    setTimeout(() => modal.classList.add('hidden'), 3000);
  })
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
