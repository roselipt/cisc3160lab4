/*  Problem 1, Project Euler
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

//  Determines if x is divisible by 3 or 5, returns true or false
function divisible(x) {
    if ((x % 3 == 0) || (x % 5 == 0))
        return true;
    else
        return false;
}

let number = 1;
while (number <= 10) {
    console.log(number, divisible(number));
    number += 1;
}

let message = "Hello world!";
console.log(message);

