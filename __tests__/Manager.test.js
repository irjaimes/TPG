const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("set manager office number as argument", () => {
    const testValue = 713;
    const employee = new Manager("John", 12345, "john@email.com", testValue);

    expect(employee.officeNumber).toBe(testValue);
});

test("set getRole() to return 'Manager' role", () => {
    const testValue = "Manager";
    const employee = new Manager("John", 12345, "john@email.com", 713);
    
    expect(employee.getRole()).toBe(testValue);
    
});

test("set getOffice() to return office number", () => {
    const testValue = 713;
    const employee = new Manager("John", 12345, "john@email.com", testValue);

    expect(employee.getOfficeNumber()).toBe(testValue);
});