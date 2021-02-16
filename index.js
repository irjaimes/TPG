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
                validate: managerNameInput => {
                    if (managerNameInput) {
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
            // push new item to employee list array
            employeeList.push(manager)
        })
        .then(managerInfo => {
            // call employeePrompt and pass manager info as parameter
            //employeePrompt(managerInfo)
        })
}

// prompt inquiries for engineer data
const engineerPrompt = () => {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'engineerName',
                message: "What is the engineer's name?",
                validate: engineerNameInput => {
                    if (engineerNameInput) {
                        return true
                    }
                    else {
                        console.log("Please enter the engineer's name!")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerID',
                message: "What is the engineer's ID Number?",
                validate: engineerIDInput => {
                    if (engineerIDInput > 0) {
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
                name: 'engineerEmail',
                message: "What is the engineer's email address?",
                validate: engiEmailInput => {
                    if (engiEmailInput) {
                        return true
                    }
                    else {
                        console.log("Please enter the engineer's email address!")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: "What is the engineer's GitHub username?",
                validate: engineerGBInput => {
                    if (engineerGBInput) {
                        return true
                    }
                    else {
                        console.log("Please enter the engineer's GitHub username!")
                        return false;
                    }
                }
            }
        ])
        .then(engineerData => {
            const engineer = new Engineer(engineerData.engineerName, engineerData.engineerID, engineerData.engineerEmail, engineerData.engineerGithub)
            // push new item to employee list array
            employeeList.push(engineer)
            // call employeePrompt
            //     employeePrompt()
        })
}


//managerPrompt();

engineerPrompt();