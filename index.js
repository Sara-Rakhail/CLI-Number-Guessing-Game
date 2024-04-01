#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to Rakhail Codes-Building a CLI Number Guessing Game");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNnumber",
        type: "number",
        message: "Enter your guess number(Number Limit from 1 TO 5):",
    },
]);
if (answer.userGuessedNnumber === randomNumber) {
    console.log("Conratulations! You Guess a Correct Number");
}
else {
    console.log("Sorry! You Guess a Wrong Number");
}
