#! /usr/bin/env node

import inquirer from "inquirer";

console.log(`\nWelcome to Table Generator CLI\n`);

let myTable = true;

// our full code will be within while loop
while (myTable){

    let myInput = await inquirer.prompt({
        type: 'number',
        name: 'num',
        message: 'Enter Your Number: '
    })
    let myNumber = myInput.num;
    //console.log(myNumber);

    if (myNumber){
        console.log(`Here is the table of ${myNumber}\n`);

        for(let i = 1; i <= 10; i++){
            console.log(`${myNumber} x ${i} = ${myNumber * i}`);
        }
    }else{
        console.log(`Enter a input in numerical form`);
    }
    
    // Asking user if he wants to print table again

    let againPrint = await inquirer.prompt({
        type: 'confirm',
        name: 'askUser',
        message: 'Do you want to print another Table?',
        default: false
    });

    if (againPrint.askUser === false){
        myTable = false;
        console.log(`\n Thank You for using this Table Generator!\n`);
        
    }
        
    }
    

