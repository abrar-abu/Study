/*
3. Write a typescript program which contains one function named as Maximum. That function accepts
array of numbers and returns the second largest number from array.
Input 	:	23	89	6	29	56	45	77	32
Output :
Second Maximum number is 77
*/
function Maximum() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var i = null;
    var largest = arr[0];
    var secondLargest = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }
        else if (arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    console.log("Maximum number is " + secondLargest);
}
Maximum(23, 89, 6, 29, 56, 45, 77, 32);
Maximum(1, 2, 3);
Maximum(11, 21, 51, 101);
Maximum(1, 2, -3);
Maximum(0, 21 / 2, 518, -101);
