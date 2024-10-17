var emp = /** @class */ (function () {
    function emp() {
    }
    return emp;
}());
var employees = [
    { id: 101, name: "John", deptId: 10, deptName: "IT", Totalsalary: 50000 },
    { id: 102, name: "Jane", deptId: 20, deptName: "HR", Totalsalary: 45000 },
    { id: 103, name: "Mike", deptId: 10, deptName: "IT", Totalsalary: 60000 },
    { id: 104, name: "Sarah", deptId: 20, deptName: "HR", Totalsalary: 55000 },
    { id: 105, name: "David", deptId: 10, deptName: "IT", Totalsalary: 65000 },
    { id: 106, name: "Mark", deptId: 20, deptName: "HR", Totalsalary: 50000 },
    { id: 107, name: "Emily", deptId: 10, deptName: "IT", Totalsalary: 60000 },
    { id: 108, name: "Jill", deptId: 20, deptName: "HR", Totalsalary: 50000 },
    { id: 109, name: "Daniel", deptId: 10, deptName: "IT", Totalsalary: 65000 },
];
function getEmployeeByDepartment(deptName) {
    var deptEmployees = employees.filter(function (e) { return e.deptName === deptName; });
    return deptEmployees;
}
function calculateTotalSalaryByDepartment(deptName) {
    var deptEmployees = getEmployeeByDepartment(deptName);
    var totalSalary = deptEmployees.reduce(function (sum, e) { return sum + e.Totalsalary; }, 0);
    return totalSalary;
}
console.log(getEmployeeByDepartment("IT"));
console.log(calculateTotalSalaryByDepartment("IT"));
