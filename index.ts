#! /usr/bin/env node

import inquirer from "inquirer";

const one_dollar:any = {
    USD: 1,              // United State Dollar
    EUR: 0.9,            // Euro
    SAR: 3.75,          // Saudi Riyal
    INR: 84,            // Indian Rupee
    PKR: 280            // Pakistani Rupee
}

let user_answer =await inquirer.prompt([{
    name:"from",
    message:"Enter from Currency",
    type:"list",
    choices:["USD","EUR","SAR","INR","PKR"]
},
{
    name:"to",
    message:"Enter To Currency",
    type:"list",
    choices:["USD","EUR","SAR","INR","PKR"]
},
{
    name:"amount",
    message:"Enter your Amount!",
    type:"number"
}])

let fromAmount = one_dollar[user_answer.from];
let toAmount = one_dollar[user_answer.to];
let Amount = user_answer.amount;

let baseAmount = Amount / fromAmount;   //  Converted My Amount into 1 Dollar

let convertAmount = baseAmount * toAmount;  //Then Dollar converted into 'To Currency'

console.log(`${user_answer.from}/${user_answer.to} = ${Math.floor(convertAmount)}`);