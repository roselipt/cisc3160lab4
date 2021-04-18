{-  From Seven Languages in Seven Days
    Kind of a mindblower: This tuple form gives even quick, giant answers!
    Simpler recursive fib froze at fib(40), where fib(1000) here is lightning fast
    and returns an integer that seems to exceed the range of anything I'm used to seeing.
    Note also use of helper function: fib x function need not match file name.
-}
module Main where
    fibTuple :: (Integer, Integer, Integer) -> (Integer, Integer, Integer)
    fibTuple (x, y, 0) = (x, y, 0)
    fibTuple (x, y, index) = fibTuple (y, x + y, index -1)

    --  Tate calls this a "helper function". It simply pulls the first value from the tuple
    fibResult :: (Integer, Integer, Integer) -> Integer
    fibResult (x,y,z) = x

    --  The helper allows us to wrap the tuple function, so an index returns the fibonnaci number
    fib :: Integer -> Integer
    fib x = fibResult (fibTuple (0, 1, x))

    -- required by compiler
    main = undefined

