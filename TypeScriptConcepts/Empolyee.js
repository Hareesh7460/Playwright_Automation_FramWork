var employeeDetails = /** @class */ (function () {
    function employeeDetails(name, id) {
        this.empName = name;
        this.empID = id;
        console.log(this.empName + ": " + this.empID);
    }
    employeeDetails.prototype.displaye = function () {
        this.empID = "Bharath";
        this.empName = "10998";
        console.log(this.empName + ": " + this.empID);
    };
    return employeeDetails;
}());
var empdt = new employeeDetails("Hareesh", "197");
empdt.displaye();
