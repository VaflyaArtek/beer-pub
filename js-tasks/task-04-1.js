// https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
//Messi Goals

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    result = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
    return result;
  }

//https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
//Make negative


  function makeNegative(num) {
    let negativeNum;

    if (num > 0) {
      negativeNum = -num
     }
    else {
      negativeNum = num
    }

    return negativeNum;
  }

//https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
//Game Move

 function move (position, roll) {
    let dice = roll * 2;
    return dice + position;
  }

//https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
//Personalized Message

function greet (name, owner) {
    return name === owner ? "Hello boss" : "Hello guest"
  }

//https://www.codewars.com/kata/keep-hydrated-1/train/javascript
//Keep Hydrated

function litres(time) {
    return Math.floor(time / 2);
  }

//https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
//Opposites Attract

const lovefunc = (flower1, flower2) => (flower1 + flower2) % 2 === 1;