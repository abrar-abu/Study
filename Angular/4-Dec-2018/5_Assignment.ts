/*
5. Write a typescript program which contains one function named as Fibonacci. That function accept
one number from user and print Fibonacci series till that number.
Input  : 21
Output : 1  1  2  3  5  8  13  21
*/
function fibonaci(num: number):void
{
    for(var num1=0,num2=1,res=num1+num2;num>=num1;num1=num2,num2=res,res=num1+num2) {
       		console.log(num1);
    }
}
fibonaci(21)
fibonaci(55)
fibonaci(20)