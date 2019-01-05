/*
1. Write a typescript program which contains one function named as Maximum. That function accepts
three parameters and it should returns largest value from three input parameters.
Input  : 23 89 6
Output :
Maximum number is 89
*/
function Maximum(num1:number,num2:number,num3:number):number
{
	var max: number = 0;
	if((num1>num2||num1>=num2) && (num1>num3||num1>=num3))
	{
		max = num1;
	}
	else if((num2>num1||num2>=num1) && (num2>num3||num2>=num3))
	{
		max = num2;
	}
	else if((num3>num2||num3>=num2) && (num3>num1||num3>=num1))
	{
		max = num3;
	}
	return max;
}

var result:number=0;
//result = Maximum(20,10,2);
result = Maximum(20,30,-1);				//fails for equal values and 
console.log("Maximum Number is : " + result);