#! /usr/bin/env node

import inquirer from "inquirer";

console.log(`Welcome to Number Guessing Game\n`);

const secretNumber = Math.floor(Math.random() * 10 +1);

let myLoop = true;
let attempts = 1;

while(myLoop){

    const userInput = await inquirer.prompt({
        type: 'number',
        name: 'userNumber',
        message: 'Enter your number!'
    });

    let {userNumber} = userInput;

    console.log(`\nYour attempt No.${attempts}`);
    

    if(userNumber === secretNumber) wonMatch();
    if(userNumber > secretNumber) greaterNum();
    if(userNumber < secretNumber) lessNum();

    function wonMatch(){
        console.log(`Congratulations! Your guessed number ${userNumber} is correct!`);
        console.log(`\nYou have attemped ${attempts} times to guess the right number. `);
        myLoop = false;
    }

    function greaterNum(){
         console.log(`Your guessed number is greater than actual number.`);
         attempts++;
         
    }

    function lessNum(){
        console.log(`Your guessed number is less than actual number!`);
        attempts++;
        

    }
}
