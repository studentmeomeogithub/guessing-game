#!/usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "YourGussednumberis",
        type: "number",
        message: "Please guess a number between 1 to 5:",
    },
]);
if (answer.YourGussednumberis === randomnumber) {
    console.log("congratulation! you gussed right number");
}
else {
    console.log("you gussed a wrong number");
}
console.log(answer);
