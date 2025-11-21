function studentDetails(studentName, studentRollNumber) {
    console.log(studentName, studentRollNumber);
}
studentDetails("hareesh", "1917");
// Arrow function
var details = function (sName, sNumber) {
    return sName + " " + sNumber;
};
function userdetials(par1, par2) {
}
console.log(userdetials("9110784175", "1917"));
// rest Prameters
var companydetails = function (loc) {
    var others = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        others[_i - 1] = arguments[_i];
    }
    return loc + " " + others;
};
console.log(companydetails("Techouts", "Hyderabad", "Vyshanvi cuy"));
