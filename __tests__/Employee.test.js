const Employee = require('../lib/Employee');

test("create Employee parent class", () => {
    const employee = new Employee();

    expect(typeof (employee)).toBe("object");
    
    //console.log(employee);
});

test("set employee name as argument", () => {
    const name = "John";
    const employee = new Employee(name);

    expect(employee.name).toBe(name);

    //console.log(employee);
});

test("set employee id as argument", () => {
    const testValue = 12345;
    const employee = new Employee("John", testValue);

    expect(employee.id).toBe(testValue);

    //console.log(employee);
});

test("set employee email as argument", () => {
    const testValue = "john@email.com";
    const employee = new Employee("John", 12345, testValue);

    expect(employee.email).toBe(testValue);

    //console.log(employee);
});

