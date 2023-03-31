// The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1. The sequence goes like this: 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on.

// Here's an example of a recursive function in Python to calculate the nth term of the Fibonacci sequence:

// python
// Copy code
// def fibonacci(n):
//     if n <= 1:
//         return n
//     else:
//         return (fibonacci(n-1) + fibonacci(n-2))
// The function takes an integer n as input and returns the nth term of the Fibonacci sequence.

// The base case for the recursive function is when n is 0 or 1, where we simply return n. For any other value of n, we recursively call the function with the previous two values of the sequence (n-1 and n-2) and add them together.

// Note that this implementation is not very efficient, especially for large values of n, because it recalculates the same values over and over again. A more efficient approach would be to use dynamic programming to store the previously calculated values in a list or dictionary and reuse them when needed

function recursiveFibonacci(n) {
    if (n < 2) {
        return n;
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
};
console.log(recursiveFibonacci(0)) // 0
console.log(recursiveFibonacci(1)) // 1
console.log(recursiveFibonacci(6)) // 8


/// Java code:
// public class Fibonacci {
//     public static int recursiveFibonacci(int n) {
//         if (n < 2) {
//             return n;
//         }
//         return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
//     }
    
//     public static void main(String[] args) {
//         System.out.println(recursiveFibonacci(0)); // 0
//         System.out.println(recursiveFibonacci(1)); // 1
//         System.out.println(recursiveFibonacci(6)); // 8
//     }
// }

// The time complexity of this recursive Fibonacci function is O(2^n).

// This is because, for each recursive call, the function makes two additional recursive calls, except for the base case where n < 2. This means that the number of function calls grows exponentially as n increases, leading to an overall time complexity of O(2^n).

// As an example, calling recursiveFibonacci(6) would result in 25 total function calls (including the base case), which is equal to 2^6 - 1. Therefore, as the value of n grows, the number of function calls and the time required to compute the Fibonacci sequence using this method will increase dramatically.