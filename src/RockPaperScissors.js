import React, {useEffect, useState} from "react";
import rock from './rock.jpeg'
import paper from './paper.jpeg'
import scissors from './scissors.jpg'

const choices = [
{id: 1, name: 'rock', losesTo: 2},
{id: 2, name: 'paper', losesTo: 3},
{id: 3, name: 'scissors', losesTo: 1}
];


const RockPaperScissors = () => {
  const [wins, setWins] = useState(0);

  const [losses, setLosses] = useState(0);

  const [userChoice, setUserChoice] = useState(null);

  const [computerChoice, setComputerChoice] = useState(null);

  const [gameState, setGameState] = useState(null); // op[tions are win, lose, or draw


  //this means the cmputer will go through and choose a random option from our choices
useEffect(()=> {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  },[]);

  //this function resets the game but doesn't restart the wins and losses
function restartGame() {
  setGameState(null);
  setUserChoice(null);
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  setComputerChoice(randomChoice);
};

//this function resets the game and restarts the win/loss count
function resetGame(){
  setGameState(null);
  setUserChoice(null);
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  setComputerChoice(randomChoice);
  setLosses(0);
  setWins(0);
};

//this is what happens when a user chooses 
function handleUserChoice(choice){
const chosenChoice = choices.find(c => c.id === choice);
setUserChoice(chosenChoice);

//determine the winner
if (chosenChoice.losesTo == computerChoice.id) {
  setLosses(losses => losses + 1);
  restartGame();
 setGameState('lose')
} else if (computerChoice.losesTo == chosenChoice.id) {
  setWins(wins => wins + 1);
  restartGame();
  setGameState('win')
} else if (computerChoice.id == chosenChoice.id){
  restartGame();
setGameState('draw')
  };
};


return (
<div>
<style>
@import url('https://fonts.googleapis.com/css2?family=Bakbak+One&family=Staatliches&display=swap');
</style>
  {/* did it this way because saying 1 losses or wins doesn't make any sense */}
  <h2>{wins=== 1 ? 'Win' : 'Wins'}: {wins}</h2>
  <h3>{losses === 1 ? 'Loss' : 'Losses'}: {losses}</h3>
  <h1>Let's play! Choose one:</h1>
  <img onClick = {() => handleUserChoice(1)} src= {rock} alt="rock" />
  <img onClick = {() => handleUserChoice(2)} src= {paper} alt="paper" />
  <img onClick = {() => handleUserChoice(3)} src= {scissors} alt="scissors" />
  {/* this will only show if there is a gameState (win, lose, or draw) */}
  <div>
  {gameState &&
  <><h4>You {gameState}!</h4>
  <p>Play again or...</p></>
  }
  </div>
  <div className="button">
  <button onClick ={()=> resetGame()}>Reset Game</button>
  </div>
</div>
);
};



export default RockPaperScissors;