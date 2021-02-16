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
            employeePrompt(managerInfo)
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
        .then(engineerInfo => {
            const engineer = new Engineer(engineerInfo.engineerName, engineerInfo.engineerID, engineerInfo.engineerEmail, engineerInfo.engineerGithub)
            // push new item to employee list array
            employeeList.push(engineer)
            // call employeePrompt
            employeePrompt()
        })
}

const internPrompt = () => {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'internName',
                message: "What is the intern's name?",
                validate: internNameInput => {
                    if (internNameInput) {
                        return true
                    }
                    else {
                        console.log("Please enter the intern's name!")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internID',
                message: "What is the intern's ID Number?",
                validate: internIDInput => {
                    if (internIDInput > 0) {
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
                name: 'internEmail',
                message: "What is the intern's email address?",
                validate: internEmailInput => {
                    if (internEmailInput) {
                        return true
                    }
                    else {
                        console.log("Please enter the intern's email address!")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "What school does the intern attend?",
                validate: internSchoolInput => {
                    if (internSchoolInput) {
                        return true
                    }
                    else {
                        console.log("Please enter the intern's school!")
                        return false;
                    }
                }
            }
        ])
        .then(internInfo => {
            const intern = new Intern(internInfo.interName, internInfo.internID, internInfo.internEmail, internInfo.internSchool)
            // push new Intern item into employeeList array
            employeeList.push(intern)
            employeePrompt()
        })
}

// prompt inquiries for new employee selection
const employeePrompt = () => {
    return inquirer.prompt(
        {
            type: 'list',
            name: 'newEmployee',
            message: "Would you like to add another employee to the team profile?",
            choices: ['Engineer', 'Intern', 'Done']
        })
        .then(promptData => {
            // if engineer is selected, initiate engineer data prompts
            if (promptData.newEmployee === 'Engineer') {
                engineerPrompt();
            }
            // if intern is selected, initiate intern data prompts
            else if (promptData.newEmployee === 'Intern') {
                internPrompt();
            }
            else {
                // if Done, console message and compile data
                console.log("Your team profile is being writen to index.html!")
                compile()
            }
        })
}
function compile() {
    console.log(employeeList);

    const teamData = { ...employeeList }
    console.log(teamData)

    const teamWebPage = generateHTML(teamData)

    // write team's data into HTML file
    fs.writeFile('./dist/index.html', teamWebPage, err => {
        if (err) throw new Error(err);
        console.log('Team Profile created! Check it out in your dist folder!')
    })
}

managerPrompt();
