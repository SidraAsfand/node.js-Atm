#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let mybalance = 25000; //Dollar
let mypinNum = 42345;
//get pinNum from user
let myAns = await inquirer.prompt([
    {
        name: "pinNum",
        message: "Enter Your PinNumber",
        type: "number"
    }
]);
//using condition for next step
if (myAns.pinNum === mypinNum) {
    console.log(chalk.bgGreenBright.bold("valid pin number"));
    let Operations = await inquirer.prompt([
        {
            name: "Operation",
            message: "select any  one",
            type: "list",
            choices: ["withdraw", "checkBalance", "fastCash", "Exit"]
        }
    ]);
    //if user Select Withdraw
    if (Operations.Operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "Amount",
                message: "Enter Amount",
                type: "number"
            }
        ]);
        if (amountAns.Amount <= mybalance) {
            mybalance -= amountAns.Amount;
            console.log(`your current balance is :" ${mybalance}`);
        }
        else {
            console.log("insuffiecient balance");
        }
    }
    //if user Select Withdraw
    else if (Operations.Operation === "checkBalance") {
        console.log(`your current amount is: ${mybalance}`);
    }
    //if user Select Withdraw
    else if (Operations.Operation === "fastCash") {
        let cashCount = await inquirer.prompt([
            {
                name: "Cash",
                message: "Choose the desire  amount you want  to WithDraw!",
                type: "list",
                choices: ["50000", "10000", "15000", "20000", "25000"]
            }
        ]);
        if (cashCount.Cash <= mybalance) {
            mybalance -= cashCount.Cash;
            console.log(`Your Transaction  ${cashCount.Cash}  Successsful!! \n your remaining Balance is: ${mybalance}`);
        }
    }
    else if (Operations.Operation === "Exit") {
        console.log(chalk.bgBlue.italic("you're exit !"));
    }
}
//if user select invalid pinNumber
else {
    console.log("invalid pin number please enter correct pin number:");
}
