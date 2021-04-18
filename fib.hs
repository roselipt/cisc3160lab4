--  This is straight outa Seven Languages in Seven Days
module Main where
    fib :: Integer -> Integer
    fib 0 = 1
    fib 1 = 1
    fib x = fib (x -1) + fib(x -2)

    {-- Compiler requires a value for main,
        this line is not needed in the book,
        I want to check out why later.
        And also writing this multi line to demonstrate that feature for myself.
        Using {-- [}] -} allows commenting a whole block in or out with a single change!
    -} 
    main = undefined
