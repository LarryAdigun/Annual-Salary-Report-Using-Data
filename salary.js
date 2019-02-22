var fs = require("fs");

//step. 1 create all single and mulit-dimensinal arrays 
//push single string data/ elements into an array as a single element. 
//push array data into an array to form multi-dimensional arrays

var departmentID = [];
var departments = [];


//Multi-dimensional
var employeeId = [];
var employeeName = [];
var salaries = [];

//Process  'load department name' file
fs.readFile("dept.txt", "utf8", function(err, data) {
    if (err) throw err;

    var deptDataClean = data.replace(/INSERT INTO `departments` VALUES \n/g, "");
    var deptDataArray = deptDataClean.split("\n");

    for (var i = 0; i < deptDataArray.length; i++) {
        departmentID.push(deptDataArray[i].slice(2, 6));
        departments.push(deptDataArray[i].slice(9, -3));


//         //populate empty multi-dimensional arrays with sub arrays
//         employeeId.push([]);
//         employeeName.push([]);
//         salaries.push([])
//     }


//     // console.log(departmentID);
//     // console.log(departments);
//     // console.log(employeeId);
//     // console.log(employeeName);
//     // console.log(salaries);

// });

// fs.readFile("department.txt", "utf8", function(err, data) {
//     if (err) throw err;
//     var employeeDataClean = data.replace(/INSERT INTO `departments` VALUES \n/g, "");
//     var employeeDataArray = employeeDataClean.split("\n");
//     for (var i = 0; i < employeeDataArray.length; i++) {

//         if (employeeDataArray[i].slice(28, 32) == "9999") {
//             // console.log(employeeDataArray[i].slice(8, 12));
//             //  console.log(employeeDataArray[i].slice(1, 6))
//              employeeId[departmentID.indexOf(employeeDataArray[i].slice(8,12))].push(employeeDataArray[i].slice(1,6));
//         }


//     }

//     // console.log(employeeDataArray);
//     console.log(employeeId)

// });

fs.readFile("employee.txt", "utf8", function(err, data) {
    if (err) throw err;
    var employeeNameDataClean = data.replace(/INSERT INTO `departments` VALUES \n/g, "");
    var employeeNameDataArray = employeeNameDataClean.split("\n");
    //console.log(data);
    for (var i = 0; i < employeeNameDataArray.length; i++) {

        
            employeeName.push(employeeNameDataArray[i].slice(21, 40));
            //  console.log(employeeDataArray[i].slice(1, 6))
             //employeeId[departmentID.indexOf(employeeDataArray[i].slice(8,12))].push(employeeDataArray[i].slice(1,6));
    


  }
  console.log(employeeName)
   
   
});
