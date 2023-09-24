let userInput = document.querySelector('.container .userInput input');
let guessBtn = document.querySelector('.container .userInput button');
let lowToHigh = document.querySelector('.container .guesses .high-to-low');
let noOfGuesses = document.querySelector('.container .guesses .no-of-guesses');
let guessed_numbers = document.querySelector('.container .guesses .guessed-number-are');
let gameBox = document.querySelector('.game-box');
let gameOverBox = document.querySelector('.container .game-over-box');
let playAgainBtn = document.querySelector('.container .game-over-box button');
let resultText = document.querySelector('.container .game-over-box  h3');

let correctGuess;
let guessed_number_are = [];
let noOfChances = 3;

//Generate Random Number
let generateRandomNumber =()=>{
  let randomNumber = Math.floor(Math.random() * 20);
  correctGuess = randomNumber;
}

let guess =()=>{
  let userGuess = userInput.value;
  if(userGuess !== correctGuess){
     //No of chances decrease if guess is wrong
     noOfChances--;
     noOfGuesses.innerHTML = `No of chances: ${noOfChances}`;
     
     //Get all user Guessed number
     guessed_number_are.push(userGuess);
     guessed_numbers.innerHTML = `Guessed number are: ${guessed_number_are}`;
     
     //Check number high or low
     if(userGuess < correctGuess){
       lowToHigh.innerHTML = `Your guess is low!`;  
     }else if(userGuess > correctGuess){
       lowToHigh.innerHTML = `Your guess is high!`;  
     }
     
     //If no of chances 0 game end
     if(noOfChances == 0){
       gameBox.style.display = 'none';
       gameOverBox.style.display = 'block';
       resultText.innerHTML = `You lost the game! 🙁`;
     }
     lowToHigh.style.display = 'block';
     userInput.value = '';
  } if(userGuess == correctGuess){
      gameBox.style.display = 'none';
      gameOverBox.style.display = 'block';
      resultText.innerHTML = `You won the game! 🥳`;    
  }
}

playAgainBtn.addEventListener('click',()=>{
  noOfChances = 3;
  guessed_number_are = [];
  gameBox.style.display = 'block';
  gameOverBox.style.display = 'none';
  lowToHigh.style.display = 'none';
  noOfGuesses.innerHTML = `No of chances: 3`;
  guessed_numbers.innerHTML = `Guessed number are: -----`;
  generateRandomNumber();
})

guessBtn.addEventListener('click',()=>{
  if(userInput.value != ''){
     guess();  
  }
});
//Generate Random Number On Load
generateRandomNumber();
