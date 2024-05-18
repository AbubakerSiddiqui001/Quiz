#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.italic.blueBright(" \n \t Wellcome to Typescript Quiz \t \n "));
const quiz = await inquirer.prompt([
    {
        name: "question_01",
        type: "list",
        message: "Q1: What is the correct way to check if two values are not equals in Typescript ? \n",
        choices: ["a == b", "a === b", "a = b", "a !== b"]
    },
    {
        name: "question_02",
        type: "list",
        message: "Q2: Which of the following character is commonly allowed in variables name in Typescript ? \n",
        choices: ["$", "@", "#", "!"]
    },
    {
        name: "question_03",
        type: "list",
        message: "Q3: Which operators is commonly used for string concatenation in Typescript ? \n",
        choices: ["+", "*", "!", "$"]
    },
    {
        name: "question_04",
        type: "list",
        message: "Q4: In Typescript , which symbol is commonly used to terminate a statement ? \n",
        choices: [",", ".", ";", "$"]
    },
    {
        name: "question_05",
        type: "list",
        message: "Q5: Which method is Inquirer.js is used to start the prompt interface and recieve user input ? \n",
        choices: ["start()", "init()", "prompt()", "install inquirer()"]
    }
]);
let score = 0;
switch (quiz.question_01) {
    case "a !== b":
        console.log(chalk.blueBright("Q1: Correct"));
        ++score;
        break;
    default:
        console.log(chalk.redBright("Q1: Incorrect Answer"));
}
switch (quiz.question_02) {
    case "$":
        console.log(chalk.blueBright("Q2: Correct"));
        ++score;
        break;
    default:
        console.log(chalk.redBright("Q2: Incorrect Answer"));
}
switch (quiz.question_03) {
    case "+":
        console.log(chalk.blueBright("Q3: Correct"));
        ++score;
        break;
    default:
        console.log(chalk.redBright("Q3: Incorrect Answer"));
}
switch (quiz.question_04) {
    case ";":
        console.log(chalk.blueBright("Q4: Correct"));
        ++score;
        break;
    default:
        console.log(chalk.redBright("Q4: Incorrect Answer"));
}
switch (quiz.question_05) {
    case "prompt()":
        console.log(chalk.blueBright("Q5: Correct"));
        ++score;
        break;
    default:
        console.log(chalk.redBright("Q5: Incorrect Answer \n"));
}
console.log(` \n Your score is: ${chalk.yellowBright(score)} \n`);
if (score >= 3) {
    console.log(chalk.yellowBright(" \n \t Good luck"));
}
else {
    console.log(chalk.yellowBright(" \n \t I hope you will prepare well next time"));
}
