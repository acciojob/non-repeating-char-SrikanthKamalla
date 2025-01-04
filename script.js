function firstNonRepeatedChar(str) {
 // Write your code here
	for (let i = 0; i < str.length-1; i+=2) {
    if(str.charAt(i)!=str.charAt(i+1)){
        return str.charAt(i);
	}
	return null; 
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
