{-  Project Euler nubmer 4
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
-}

{-  pseudo code
  
I want to do this with list comprehensions.

-}

module Main where
    m = show 41214    

    -- check if palindrome
    palindrome x = if ((show x) == reverse (show x)) then True else False
    
    allProducts = [i*j | i <- [100..999], j <- [100..999] ]

    --for me this is modified from "Learn you a Haskell"
    --though I've learned it's all over
    quicksort_descending :: (Ord a) => [a] -> [a]  
    quicksort_descending [] = []  
    quicksort_descending (x:xs) =   
        let smallerSorted = quicksort_descending [a | a <- xs, a <= x]  
            biggerSorted = quicksort_descending [a | a <- xs, a > x]  
        in  biggerSorted ++ [x] ++ smallerSorted
    
    -- helper function (wrapper?) to get solution
    -- takes the first item from sorted descending list of only the palidromes 
    -- of all products of three digit numbers 
    f = head (quicksort_descending (filter palindrome allProducts))

{-  RESULT

f produces 906606, correct answer

-}
    -- needs main value to compile
    main = undefined