const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = require('./src/generateHTML');

const employeeList = [];

// prompt inquiries for Manager data
const managerPrompt = () => {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'managerName',
                message: "What is the team manager's name?",
                validate: manaNameInput => {
                    if (manaNameInput) {
                        return true
                    }
                    else {
                        console.log("Please enter the manager's name!")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerID',
                message: "What is manager's ID Number?",
                validate: managerIDInput => {
                    if (managerIDInput > 0) {
                        return true
                    }
                    else {
                        console.log("Please enter a valid ID number!")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is the team manager's e-mail address?",
                validate: managerEmailInput => {
                    if (managerEmailInput) {
                        return true
                    }
                    else {
                        console.log("Please enter a valid e-mail address!")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: "What is the team manager's office number?",
                validate: managerOfficeNumInput => {
                    if (managerOfficeNumInput > 0) {
                        return true
                    }
                    else {
                        console.log("Please enter a valid office number!")
                        return false;
                    }
                }
            }
        ])
        .then(managerInfo => {
            const manager = new Manager(managerInfo.managerName, managerInfo.managerId, managerInfo.managerEmail, managerInfo.managerOffice)
            employeeList.push(manager)
        })
        // .then(managerInfo => {
        //     employeePrompt(managerInfo)
        // })
}


managerPrompt();