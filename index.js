#! /usr/bin/env node
import inquirer from "inquirer";
// 1 ) computer will generate a random number
// 2 ) user input for guessing number
// 3 ) compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 6-1: ",
    },
]);
//agr ye condition true hi tu wo if ko print kryga
if (answers.userGuessedNumber === randomNumber) {
    console.log("congtratulations! you guessed right number.");
}
else {
    console.log("yor guessed wrong number.");
}
;
