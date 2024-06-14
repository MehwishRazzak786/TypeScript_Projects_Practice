#! /usr/bin/env node

import inquirer from "inquirer";

console.log(`\nWelcome to Letters And Words Counter App! CLI\n`);

let myLoop = true;

while(myLoop){

    const userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'para',
            message: 'Enter your paragraph to count letters and words in it: '
        },
        {
            type: 'list',
            name: 'ask',
            message: 'What do want to count in your paragraph?',
            choices: ['1. Letters', '2. Words', '3. Both Letters And Words']
        }
    ]);

    let {para, ask} = userInput;

    if(para.length === 0) emptyInput();
    if(ask === '1. Letters') letterFun();
    if(ask === '2. Words') wordsFun();
    if(ask === '3. Both Letters And Words') both();

    function emptyInput(){
        console.log(`Your input is empty! please try again with a valid input.\n`);
    } 

    function letterFun(){
        const lettersWithOutSpaces = para.replace(/\s/g, "");
        const letterCount = lettersWithOutSpaces.length;
        console.log(`\nTotal letters in your paragraph are "${letterCount}"`);
    }

    function wordsFun(){
        const wordsArray = para.split(" ");
        const wordsCount = wordsArray.length;
        console.log(`\nTotal words in your paragraph are "${wordsCount}"`);
    }

    function both(){
        letterFun();
        wordsFun();
    }

    // to control loop

    let countMore = await inquirer.prompt({
        type: 'confirm',
        name: 'more',
        message: 'Do you want to count more?',
        default: 'false'
    });

    if(!countMore.more){
        myLoop = false;
        console.log(`\nThank You for using my Letters And Words Counter App CLI...\n`);
        
    }
}
