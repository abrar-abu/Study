/*
4. Write a typescript program which contains one arrow function named as ChkArmstrong. That
function accepts one numbers and check whether number is Armstrong number or not.
Input 	:	153
Output 	:
It is Armstrong number
*/
function ChkArmstrong(num:number)
{
	var cube=0,last_number:number,temp=0;  
    temp=num;  
    while(num>0)  
    {  
	    last_number=num%10;  
	    num=Math.floor(num/10);  
	    cube=cube+(last_number*last_number*last_number);  
    }
    //console.log(temp+"+"+cube)  
    if(temp==cube)  
    	console.log("armstrong number");   
    else  
        console.log("Not armstrong number");     

}
ChkArmstrong(153)
ChkArmstrong(125)
ChkArmstrong(253)