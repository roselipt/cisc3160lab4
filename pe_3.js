/*  Problem 3, Project Euler
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/


let number = 600851475143;
//let number = 13195;

console.log("Hmmm, I wonder can javascript deal with this number?", number);

factors = []

counter = 2;
while (counter <= number) {
    if (number % counter == 0) {
        console.log(number, " divided by ", counter, " is ", number/counter);
        factors.push(counter);
        number = number/counter;
    }
    counter += 1;

}

console.log("After all that, ", factors);

console.log("Ahem.");




