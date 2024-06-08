#! /usr/bin/env node

import inquirer from "inquirer";


console.log(`\nWelcome to Mini Calculator Application\n `);
let myLoop = true;

while(myLoop) {

    let userInput = await inquirer.prompt([
        {
            type: 'number',
            name: 'num1',
            message: 'Enter your first number: '
        },
        {
            type: 'number',
            name: 'num2',
            message: 'Enter your second number: '
        },
        {
            type: 'list',
            name: 'operator',
            message: 'Select the operator',
            choices: ['Addition','Subtraction','Multiplication','Division']
        }

    ]);

    let {num1, num2, operator} = userInput;

    if(operator === 'Addition') add();
    if(operator === 'Subtraction') sub();
    if(operator === 'Multiplication') multiply();
    if(operator === 'Division') divide();

    function add(){
        console.log(`\n${num1} + ${num2} = ${num1 + num2}`);
    }

    function sub(){
        console.log(`\n${num1} - ${num2} = ${num1 - num2}`);
    }

    function multiply(){
        console.log(`\n${num1} X ${num2} = ${num1 * num2}`);
    }

    function divide(){
        console.log(`\n${num1} / ${num2} = ${num1 / num2}`);
    }

    // for more calculations

    let calculateAgain = await inquirer.prompt({
        type: 'confirm',
        name: 'more',
        message: 'Do you want more calculations?',
        default: false
    });

    if(!calculateAgain.more){
        myLoop = false;
        console.log(`\nThank You for using Mini Calculator!`);
        
    }
}
