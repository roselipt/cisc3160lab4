
module Main where
    -- function returns true for divisible by 3 or 5
    --divisible :: [Integer] -> [Integer]
    divisible x = if rem x 3 == 0 || rem x 5 == 0 
        then x
        else 0

    
    -- compiler needs this
    main = undefined
