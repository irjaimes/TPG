const Employee = require("./Employee");

// write Manager class constructor extending from Employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //set super() to get properties from parent class
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    };
};


module.exports = Manager;