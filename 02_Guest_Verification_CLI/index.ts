#! /usr/bin/env node

import inquirer from "inquirer";

console.log(`\nWelcome To Guest Verification Center\n`);

let myLoop = true;

let myInvitedGuestsList = ['adeeba','hadia','maham','hibba','alishba','aleena','ayat','mehwish'];

while(myLoop){

    let userInput = await inquirer.prompt({
        type: 'input',
        name: 'userName',
        message: 'Please Enter Your Name: '
    });

    let guestName = userInput.userName;
    // let {userName} = userInput; // destructuring
    //  console.log(guestName);
    let lowerGuestName = guestName.toLowerCase();

    if(myInvitedGuestsList.includes(lowerGuestName)){
        console.log(`Welcome Miss. ${guestName}! please, make yourself comfortable...`);

        myLoop = false;
    }else{
        console.log(`Sorry, Miss. ${guestName}. Your name is not on the guest list for today.\n`);

        let askNameAgain = await inquirer.prompt({
            type: 'confirm',
            name: 'otherName',
            message: 'Do you have another name you go by? If so, we can check again!',
            default: 'false'
        });

        if(!askNameAgain.otherName){
            myLoop = false;
            console.log(`\nWe appologize, but you are not on the guest list. Please contact the event organizer.\n`);
            
        }
        
    }
    
}
