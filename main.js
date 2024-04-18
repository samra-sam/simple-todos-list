#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            message: chalk.bgYellow("Enter your new task :"),
            type: "Input"
        },
        {
            name: "addMore",
            message: chalk.bgBlueBright("Do you want to add more task : ?"),
            type: "confirm",
            default: "false" //jb bhi hum confirm krty hain tou default lazmi btana hota hai.
        }
    ]);
    todoList.push(addTask.task);
    console.log(chalk.italic(`${addTask.task} Task added in Todo-list successfully`));
    condition = addTask.addMore;
    console.log(chalk.bgGray(todoList));
}
console.log(chalk.bgCyanBright("Your updated Todo-list:", todoList));
