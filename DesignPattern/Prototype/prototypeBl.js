const readline = require('readline-sync');
var Employee = function (size) { //whole function is given a name called Employee
    this.array = [];
    this.size = size;

}
Employee.prototype.getName = function () { //this getting the name of the function with name Employee
    return this.array;
}

var reqarra = function () {
    for (let i = 0; i < this.size; i++) {
        this.array[i] = readline.question("enter employee names");
    }
}
var checkifproto = function () {
    var array2 = [];
    var array3 = [];
    var employee = new Employee(4);
    reqarra.prototype = employee;
    var ra = new reqarra();
    array2 = ra.getName();

    array3 = ra.getName();
    // console.log(ra.getName());
    array3.push("yo");
    console.log(array3);

}
checkifproto();