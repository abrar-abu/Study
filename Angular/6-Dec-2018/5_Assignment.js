/*
5. Write a typescript program which contains one function named as ChkString. That function accept
one string and check whether that string contains “Marvellous” word or not.
Input 	:	“Pune Kothrud Marvellous Infosystems”
Output 	:	String contains Marvellous in it.
*/
function ChkString(haystack, needel) {
    haystack = haystack.toLowerCase().trim();
    needel = needel.toLowerCase().trim();
    if (haystack.search(needel) == -1) {
        console.log("Does not contain " + needel);
    }
    else {
        console.log("Contains " + needel);
    }
}
ChkString("Pune Kothrud Marvellous Infosystems", "Marvellous");
ChkString("My name is abrar i live in have meet abraham", "  abr ");
ChkString("My name is abrar i live in have meet abraham", "abr i");
