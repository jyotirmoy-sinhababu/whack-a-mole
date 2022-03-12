const holes = document.querySelectorAll('.hole');
const mole = document.querySelector('.mole');
const timer = document.querySelector('#timer');
let score = document.querySelector('#scores');
let btn = document.querySelector('.btn');

let result = 0;
let currentTime = 12;

// to generate random position,where mole will appear

function randomHole() {
  holes.forEach((hole) => {
    hole.classList.remove('mole');
  });
  let randomHole = holes[Math.floor(Math.random() * 9)];
  randomHole.classList.add('mole');
}
//to move the mole

function moveMole() {
  setInterval(randomHole, 1000);
}

//mole hit count

holes.forEach((hole) => {
  hole.addEventListener('mousedown', () => {
    if (hole.classList.contains('mole')) {
      result++;
      score.innerText = result;
    }
  });
});

btn.addEventListener('click', () => {
  moveMole();
  countDownTimer();
});

//countDown
function countDown() {
  currentTime--;
  timer.textContent = currentTime;
  if (currentTime == 0) {
    alert('GAME OVER! Your score is' + result);
    score.innerText = 0;
    currentTime = 12;
    countDown();
  }
}

function countDownTimer() {
  let countDownTimer = setInterval(countDown, 1000);
}
