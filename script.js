function firstNonRepeatedChar(str) {
 // Write your code here
	let mp=new Map();
	for (let char of str) {
	    if(mp.has(char)){
	        mp.set(char,mp.get(char)+1);
	    }else{
	        mp.set(char, 1);
	    }
	}
	for (let [key, value] of mp.entries()) {
	    if (value<2) {
	        return key;
	    }
	}
	return "null";

}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
