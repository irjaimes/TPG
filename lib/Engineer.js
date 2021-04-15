const Employee = require("./Employee");

// write Engineer class constructor extending from Employee class
class Engineer extends Employee {
    constructor(name, id, email, github) {

        super(name, id, email);

        this.role = "Engineer";
        this.github = github;
    }
    getGithub() {
        return this.github;
    }

};

module.exports = Engineer;