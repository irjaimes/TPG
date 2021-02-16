const Intern = require("../lib/Intern");

test("set school as parameter", () => {
    const testValue = "University of Texas";
    const employee = new Intern("John", 12345, "john@email.com", testValue);

    expect(employee.school).toBe(testValue);
});

test("set getRole() to return 'Intern'", () => {
    const testValue = "Intern";
    const employee = new Intern("John", 12345, "john@email.com", "University of Texas");

    expect(employee.getRole()).toBe(testValue);
});

test("set getSchool() to return school", () => {
    const testValue = "University of Texas";
    const employee = new Intern("John", 12345, "john@email.com", testValue);
    
    expect(employee.getSchool()).toBe(testValue);
  });
