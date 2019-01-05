/*
2. Write a typescript program which contains one function named as Summation. That function
accepts array of numbers and returns the summation of each number from array.
Input :	23	6	7	4	5	7
Output :
Addition is 52
*/
function Summation() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var i = null;
    var sum = 0;
    for (i = 1; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log("Summation is " + sum);
}
Summation(1, 2, 3);
Summation(11, 21, 51, 101);
Summation(1, 2, -3);
Summation(0, 21 / 2, 518, -101);
