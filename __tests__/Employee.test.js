const Employee = require('../lib/Employee');

test("create Employee parent class", () => {
    const employee = new Employee();

    expect(typeof (employee)).toBe("object");

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

test("get name from getName function", () => {
    const testValue = "John";
    const employee = new Employee(testValue);

    expect(employee.getName()).toBe(testValue);
});

test("get email from getEmail function", () => {
    const testValue = "john@email.com";
    const employee = new Employee("John", 12345, testValue);

    expect(employee.getEmail()).toBe(testValue);
});

test("Can get id via getId()", () => {
    const testValue = 12345;
    const employee = new Employee("John", testValue);

    expect(employee.getId()).toBe(testValue);
});

test("set getRole() to return 'Employee'", () => {
    const testValue = "Employee";
    const employee = new Employee("John", 12345, "john@email.com");

    expect(employee.getRole()).toBe(testValue);
  });