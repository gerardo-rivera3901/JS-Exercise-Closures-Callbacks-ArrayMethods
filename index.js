// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *  Counter1 implements another function inside of 'counterMaker' while Counter2 keeps it all in only one.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 *  Counter2 uses closure since it's getting its variable from the global scope.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *  Counter1 would be preferable if you wanted to possibly utilize closure in other functions within "counterMaker". Counter2 would be better if you wanted to continue using "count" in the global scope.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(points){
  let inningCalc = Math.floor(Math.random() * points);
  return inningCalc
}
console.log(inning(3))

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback1, inningNum){
  let pointCalc = callback1(inningNum)
  homeTeam = pointCalc * 2
  awayTeam = pointCalc + 2
  console.log(`"Home": ${homeTeam}`)
  console.log(`"Away": ${awayTeam}`)
}
finalScore(inning, 9)

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

const pointsArray = ["1st inning: Away=", "2nd inning: Away=", "3rd inning: Away=", "4th inning: Away=", "5th inning: Away=", "6th inning: Away=", "7th inning: Away=", "8th inning: Away=", "9th inning: Away=", "Final Score: Away=", " - Home="]

function scoreboard(callback1, inningNum) {
  let pointCalc = callback1(inningNum)
  homeTeam = pointCalc * 2
  awayTeam = pointCalc + 2
  for(i = 0; i < inningNum; i++){
    console.log(pointsArray[i] + (Math.ceil(awayTeam * i /5)) + pointsArray[10] + (Math.floor(awayTeam * i /6)))
  }
  console.log(pointsArray[9] + (Math.ceil(awayTeam * 8 /5)) + pointsArray[10] + (Math.floor(awayTeam * 8 /6)))
}
scoreboard(inning, 9)

