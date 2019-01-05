/*
4. Write a typescript program which contains one function named as ChkPrime. That function should
accept one number and it should return true if the given number is prime and otherwise return false.
Input 	: 11
Output  :
It is prime number
*/
function isPrime(num) {
    var count = 0;
    for (var i = 2; i < (num / 2); i++) {
        if (num % i == 0)
            count++;
    }
    if (count == 0)
        return "It is prime number";
    return "It is not a prime number";
}
console.log(isPrime(12));
