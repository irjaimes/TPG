const Engineer = require("../lib/Engineer");

test("setup GitHUb account as parameter", () => {
    const testValue = "GitHubUser";
    const employee = new Engineer("John", 12345, "john@email.com", testValue);

    expect(employee.github).toBe(testValue);

    //console.log(testValue);
});

test("set getRole() to return 'Engineer'", () => {
    const testValue = "Engineer";
    const employee = new Engineer("John", 12345, "john@email.com", "GitHubUser");

    expect(employee.getRole()).toBe(testValue);
});

test("set getGithub() to return GitHub username", () => {
    const testValue = "GitHubUser";
    const employee = new Engineer("John", 12345, "john@email.com", testValue);

    expect(employee.getGithub()).toBe(testValue);
});