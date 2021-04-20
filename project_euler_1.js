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


multiples = [];
sum = 0;

let number = 1;
while (number < 10) {
    //console.log(number, divisible(number));
    if (divisible(number)) {
        multiples.push(number);
        sum += number;
    }
    number += 1;
}

console.log("For natural numbers below 10, multiples are", multiples, "and their sum is ", sum);

multiples = [];
sum = 0;

number = 1;
while (number < 1000) {
    //console.log(number, divisible(number));
    if (divisible(number)) {
        multiples.push(number);
        sum += number;
    }
    number += 1;
}

console.log("For natural numbers below 1000, we'll skip the list, but their sum is ", sum);



