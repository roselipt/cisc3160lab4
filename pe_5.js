/* Project Euler number 5
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

/* pseudocode
for x counting up from 1 until found
    test for condition (divisible by all)
*/

// Initialize found to false to enter test loop for divisors
let found = false;

// Begin testing at 11 and increment 
let divisor = 11;
while (found != true) {
    // Initialize divisible to true to enter test loop for dividends
    let divisible = true;
    // Initialize dividends at 2 to begin testing divisibility and increment to 10
    let dividend = 2;    
    // Loop while dividend hasn't reached 10 AND no dividend has failed
    // (divisible means here presumed until proven otherwise)
    while ((dividend <= 20) && (divisible)) {
        if (divisor % dividend == 0) 
            dividend ++;            
        else {
            divisible = false;
            //console.log(dividend, "doesn't divide", divisor);
        }
    }
    // If solution is NOT found, increment divisor
    if (divisible == false)
        divisor++;
    // Else solution was found, assign true to exit while loop
    else
        found = true;
}

console.log(divisor);

/* RESULTS
produces 2520 for numbers 1 to 10
& 
232792560 for numbers 1 to 20,
*/
