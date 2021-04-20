{-
Problem 1, Project Euler
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
-}
module Main where
    
    --divisible :: [Integer] -> [Integer]
    --I couldn't make this typing work (I think) with literals 3 and 5
    --I'd like to return with more time to puzzle that out.

    --function returns x if divisible by 3 or 5, or 0 otherwise
    divisible x = if rem x 3 == 0 || rem x 5 == 0 
        then x 
        else 0

    --f will use divisible along with a fold and map to get the answer.
    --Beginning with the right term, map yields a list applying function divisible to 1 to x. 
    f x = foldl (+) 0 (map divisible [1..x]) 

    -- f 9  produces 23
    -- f 999 produces 233168, which is confirmed correct with project euler

    -- compiler requirement
    main = undefined
