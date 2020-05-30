const cards = document.querySelectorAll(".memory-card");


let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;  

  this.classList.add("flip");

if (!hasFlippedCard){
    hasFlippedCard = true;
    firstCard = this;

    return;
  } 

  hasFlippedCard = false;
  secondCard = this;
 
  checkForMatch();
 
   
}
function checkForMatch(){
  let isMatch =firstCard.dataset.framework ===
  secondCard.dataset.framework;

isMatch ? disableCards() : unflipCards();


}
function disableCards(){
firstCard.removeEventListener("click" , flipcard);    
secondCard.removeEventListener("click" , flipcard);    

restBoard();
}

function unflipCards(){
  lockBoard = true;

  setTimeout(() =>{
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    restBoard();
   }, 1500);
}

function restBoard(){
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null,null];
}

(function shuffle(){
  cards.forEach(card =>{
    let randomPos = Math.floor(Math.random() * 17);
    card.style.order = randomPos;
  });


} )();
cards.forEach(card => card.addEventListener("click" , flipCard));