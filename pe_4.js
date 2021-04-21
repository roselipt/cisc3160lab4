/*  Project Euler nubmer 4
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

/*  pseudo code
  
  function isPalindrome returns boolean

  for i = 999 downto ...
     for j = i downto ...
         isPalindrome?
         break
*/

//Changed to true to skip the loops for debugging
let found = false;
let i = 999;
palindromes = [];
let highest = 1;

while (( !found) && (i > 99)) {
    let j = i;
    while ((!found) && (j > 99)) {
        test = i * j;
        if (isPalindrome(test)) {
            //found = true;
            if (test > highest) highest = test;
			if ((palindromes.length > 0) && (test > palindromes[0]))
			    palindromes.unshift(test);
			else
				palindromes.push(test);
        }
        j -= 1;
    }
    i -= 1;
}

console.log("Ahem.");
console.log(palindromes);
console.log("From highest ", highest, " and from the list ", palindromes[0]);
//let number = 9187;
//console.log("From main ", number);
/*while (number > 9000) {
	isPalindrome(number)
	number --;
}*/
function isPalindrome (x) {
    //convert number to string
    let string = x.toString();
    let backwards = string.split('').reverse().join('');
	 if (string == backwards) {
		  //console.log(string, " is palindrome!");
        return true;
	 }
	 else {
		  //console.log(string, " ain't!");
        return false
	 }
        
}