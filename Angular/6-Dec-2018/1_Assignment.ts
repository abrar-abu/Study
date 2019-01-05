/*
1. Write a typescript program which contains one function named as Maximum. That function accepts
array of numbers and returns the largest number from array.
Input 	:	23	89	6	29	56	45	77	32
Output  :
Maximum number is 89
*/
function Maximum(...arr:number[]) 
{  
    var i = null;
    var max = arr[0];   
    for(i = 1; i<arr.length; i++) 
    { 
    	if(arr[i]>max)
    	{
    		max=arr[i]
    	}
    }  
	console.log("Maximum number is " + max); 
} 
Maximum(23,89,6,29,56,45,77,32)
Maximum(1,2,3);
Maximum(11,21,51,101);
Maximum(1,2,-3);
Maximum(0,21/2,518,-101);