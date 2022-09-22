// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//locate all the hearts with a class of like-glyph
const hearts = document.querySelectorAll(".like-glyph");
//console.log(hearts);
//listen to click events on the hearts
hearts.forEach(heart => {
  //console.log(heart);
  heart.addEventListener("click", clickOnHeartHandler);
});

//do work here when a user clicks on a heart
function clickOnHeartHandler(e){
  const heart = e.target;
  console.log(heart);
  mimicServerCall()
  .then(res => {
    if (heart.innerHTML === EMPTY_HEART){
      heart.innerHTML = FULL_HEART;
      heart.classList.add("activated-heart");
      console.log(heart);
    }
    else {
      heart.innerHTML = EMPTY_HEART; //remember not to use heart.value as it will not change the content of the span element
      heart.classList.remove("activated-heart");
      console.log(heart);
    }

  })
  .catch(res => {
    console.log(res);
    const modal = document.getElementById("modal");
    modal.classList.remove("hidden");
    const p = modal.lastChild;
    p.textContent = res;
    setTimeout(() => {
      modal.classList.add("hidden");
    }, 3000);
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
