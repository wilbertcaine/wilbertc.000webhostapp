const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let n = 0;
var countDownDate;
var stop=false;
var start=false;
var distance;
var now;

function s(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

(function shuffle() {
  var a = [];
  var i;
  for (i = 0; i < 12; i++) {
    a.push(i);
  }
  s(a);
  for (i = 0; i < 12; i += 2) {
    var x = (Math.floor((Math.random() * 10) + 1)).toString();
    var v;
    switch (Math.floor(Math.random() * 4)) {
      case 0:
        v = "_of_clubs";
        break;
      case 1:
        v = "_of_diamonds";
        break;
      case 2:
        v = "_of_hearts";
        break;
      case 3:
        v = "_of_spades";
        break;
    }

    x = x + v;
    x = "img/" + x + ".svg";
    document.getElementById(2 * a[i]).dataset.d = x;
    document.getElementById(2 * a[i + 1]).dataset.d = x;
    document.getElementById(2 * a[i] + 1).alt = x;
    document.getElementById(2 * a[i + 1] + 1).alt = x;
    document.getElementById(2 * a[i] + 1).src = x;
    document.getElementById(2 * a[i + 1] + 1).src = x;
  }
}());

function flipCard() {
  if (!start)
    countDownDate = new Date().getTime();
  start=true;
  if (lockBoard)return;
  if (this === firstCard) return;
  this.classList.add('flip');
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.d === secondCard.dataset.d;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
  n++;
  if (n == 6) stop=true;
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

cards.forEach(card => card.addEventListener('click', flipCard));

var x = setInterval(function() {
  var m="m ";
  var s="s ";
  if (!stop)
    now = new Date().getTime();
  distance = now-countDownDate;
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var miliseconds = Math.floor((distance % (1000)));
  if (seconds<10)
    m+="0";
  if (miliseconds<10)
    s+="0";
  if (miliseconds<100)
    s+="0";
  if (start)
    document.getElementById("stopwatch").innerHTML = minutes + m + seconds + s +miliseconds+"ms";
  else
    document.getElementById("stopwatch").innerHTML = "0m 00s 000ms";
}, 1);