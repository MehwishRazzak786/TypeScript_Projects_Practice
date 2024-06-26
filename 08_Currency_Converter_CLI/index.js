#! /usr/bin/env node
import inquirer from "inquirer";
console.log(`\nWelcome to Currency Converter CLI App!\n`);
// make an object of currencies and their value based on any one currency list
// our based currency is USD
let currency = {
    USD: 1, // base currency
    PKR: 279.72,
    Saudi_Riyal: 3.75,
    Indian_Rupee: 83.36,
    Euro: 0.93
};
// you can add more as you want
let myLoop = true;
while (myLoop) {
    let userInput = await inquirer.prompt([
        {
            type: 'list',
            name: 'from',
            message: 'Select a currency you want to convert from: ',
            choices: ['USD', 'PKR', 'Saudi_Riyal', 'Indian_Rupee', 'Euro']
        },
        {
            type: 'list',
            name: 'to',
            message: 'Select a currency you want to convert into: ',
            choices: ['USD', 'PKR', 'Saudi_Riyal', 'Indian_Rupee', 'Euro']
        },
        {
            type: 'number',
            name: 'amount',
            message: 'Enter amount you want to convert: '
        }
    ]);
    // destructuring
    let { from, to, amount } = userInput;
    // getting a amount/value of from and to currencies
    let fromAmount = currency[from];
    let ToAmount = currency[to];
    // now convert user's currency into base currency which is USD in our case
    let baseCurrency = amount / fromAmount;
    let convertedAmount = baseCurrency * ToAmount;
    // now we want limit the digit after decimal
    let finalOutput = convertedAmount.toFixed(2);
    // console.log(finalOutput);
    console.log(`${from} amount ${amount} converted to ${to} = ${finalOutput}\n`);
    // now we want to ask user if he wants more conversions...
    let convertAgain = await inquirer.prompt({
        type: 'confirm',
        name: 'more',
        message: 'Do you want more conversions?',
        default: false
    });
    if (!convertAgain.more) {
        myLoop = false;
        console.log(`\nThank you for using my Currency Converter CLI App!\n `);
    }
}
