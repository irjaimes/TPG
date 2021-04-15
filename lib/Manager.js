const Employee = require("./Employee");

// write Manager class constructor extending from Employee class
class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        //set super() to get properties from parent class
        super(name, id, email);
        
        this.role = "Manager";
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    };
};


module.exports = Manager;