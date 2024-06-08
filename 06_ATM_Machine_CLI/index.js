#! /usr/bin/env node
import inquirer from "inquirer";
console.log(`Welcome to ATM_Machine_CLI\n`);
// generating random amount
let userBalance = Math.floor(Math.random() * 10000);
let myLoop = true;
while (myLoop) {
    const userInput = await inquirer.prompt([
        {
            type: 'number',
            name: 'userPin',
            message: 'Enter your Pin: '
        },
        {
            type: 'list',
            name: 'accountType',
            message: 'Select your Account Type!',
            choices: ['Current Account', 'Saving Account']
        },
        {
            type: 'list',
            name: 'transactionType',
            message: 'Select your transaction!',
            choices: ['Fast Cash', 'Cash Withdraw', 'Balance Inquiry']
        },
        {
            type: 'list',
            name: 'amount',
            message: 'Select the amount you want to withdraw!',
            choices: [1000, 1500, 2000, 3000, 5000, 8000, 10000],
            when(userInput) {
                return userInput.transactionType === 'Fast Cash';
            }
        },
        {
            type: 'number',
            name: 'amount',
            message: 'Enter amount you want to withdraw!',
            when(userInput) {
                return userInput.transactionType === 'Cash Withdraw';
            }
        }
    ]);
    const { userPin, transactionType, amount } = userInput;
    if (userPin && transactionType === 'Balance Inquiry') {
        console.log(`Your Current Balance is Rs.${userBalance}`);
    }
    else if (userPin) {
        if (userBalance > amount) {
            console.log(`Your account has been debited with Rs.${amount} and your remaining balance is ${userBalance -= amount}`);
        }
        else {
            console.log(`\nUnsufficient Balance`);
        }
    }
    // for more transactions
    let moreTransactions = await inquirer.prompt({
        type: 'confirm',
        name: 'more',
        message: 'Do you want more transactions?',
        default: false
    });
    if (!moreTransactions.more) {
        myLoop = false;
        console.log(`\nThank You for using ATM Machine CLI`);
    }
}
