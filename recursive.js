//add ups all number up to and including the number given. must be a positive integer. 
const recAddition = (num) => {
// Write your base case
if (num === 1) {
    return 1
}

//Recursive Step
return num + recAddition(num - 1)
9 + 36
10 + 45
}

// console.log(recAddition(1))// => base case : 1
// console.log(recAddition(2)) // => 3
// console.log(recAddition(3)) // => 6
// console.log(recAddition(4)) // => 10
// console.log(recAddition(5)) // => 15
// console.log(recAddition(6)) // => 21
// console.log(recAddition(7)) // => 28
// console.log(recAddition(8)) // => 36
// console.log(recAddition(9)) // => 45
// console.log(recAddition(10)) // =>  55

//write a function that will take a number and multiply it by every number lower than that number until we get to one : 3! => 3 * 2 * 1 => 6 // 5 ! => 5 * 4 * 3 * 2 * 1 => 120
// Ex : 2! =>  2 * 1 => 2
// Ex : 3! =>  3* 2 * 1 =>6
const recFactorial = (num) => {
   //Base Case
if (num === 1) {
    return num
}

//Inductive  Step
return num + recAddition(num - 1)

}

// console.log(recFactorial(1)) // => base case => 1
// console.log(recFactorial(2)) // => 2
// console.log(recFactorial(3)) // => 6
// console.log(recFactorial(4)) // => 24
// console.log(recFactorial(5)) // => 120

//What is Fibonacci
// [1,1,2,3,5,8,13,21]
const fib = (num) => {
    //Base Case
    if (num < 2) {
        return num
    }

    //recursive/ inductive case
return fib (num - 1) + fib (num - 2) 

}

// console.log(fib(1)) // => BAse Case => 1
// console.log(fib(2)) // => 1
// console.log(fib(3)) // => 2
// console.log(fib(4)) // =>3
// console.log(fib(5)) // => 5
// console.log(fib(6)) // => 8
// console.log(fib(7)) // => 13
// console.log(fib(8)) // => 21
// console.log(fib(9)) // =>34
//  console.log(fib(10)) // => 55
// console.log(fib(11)) // => 89
console.log(fib(12)) // => 144
