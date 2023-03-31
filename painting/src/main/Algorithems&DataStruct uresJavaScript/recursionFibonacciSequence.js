// Recursion is a programming technique where a function calls itself repeatedly until it reaches a specific condition to return a result. Recursion is used to solve complex problems by breaking them down into smaller and simpler sub-problems, solving them individually, and then combining their results to get the final solution.

// A recursive function must have a base case that stops the recursion and returns the result. Without a base case, the function will keep calling itself indefinitely, leading to a stack overflow error.

// An example of a recursive function is the factorial function, which is defined as the product of all positive integers up to a given number. The factorial function can be implemented recursively as follows:

// python
// Copy code
// def factorial(n):
//     if n == 0:
//         return 1
//     else:
//         return n * factorial(n-1)
// In this example, the base case is when n is equal to 0, and the function returns 1. Otherwise, the function calls itself with n-1 as an argument and multiplies the result by n.

// Recursion can be a powerful tool, but it can also lead to performance issues if not implemented correctly. It is important to carefully consider the problem and the base case to ensure that the recursion stops at the appropriate time.

// Recursive Fibonacci Sequence
// Problem - Give a number `n`, find the n th element of the fibonacci sequence.
// In mathematics, the Fibonacci sequence in which each number is the sum of the two preceding ones.
// The two numbers in the sequence are 0 and 1. (0,1,1,2,3,5,8...)
// recursiveFibonacci(0) = 0
// recursiveFibonacci(1) = 1
// recursiveFibonacci(6) = 8

// - Figure ou how to break down the problem into smaller versions of the same problem.
// - Identify the base case for recursion.

function recursiveFibonacci(n) {
    if (n < 2) {
        return n;
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(1)) // 1
console.log(recursiveFibonacci(6)) // 8


//Time complexity
// O(n) - Iterative
// O(2^n) - Recursive

// The time complexity of the recursiveFibonacci function is O(2^n), where n is the input parameter.

// This is because the function makes two recursive calls for each invocation, each with an input value of n-1 and n-2, respectively. As a result, the number of function calls grows exponentially with n, leading to a time complexity of O(2^n).

// In practice, this means that the function can become very slow for large input values of n, as the number of function calls needed to compute the result grows very quickly. For this reason, it's generally not recommended to use this recursive approach to compute Fibonacci numbers for large values of n. Instead, iterative or memoization approaches can be used to achieve much better time complexity.


// Java Code

// import java.util.Arrays;

// public class Main {
//     public static void main(String[] args) {
        
//         long startTime = System.nanoTime();
//         System.out.println(recursiveFibonacci(0)); // Output: 0 (the 0th Fibonacci number is 0)
//         System.out.println(recursiveFibonacci(1)); // Output: 1 (the 1st Fibonacci number is 1)
//         System.out.println(recursiveFibonacci(6)); // Output: 8 (the 6th Fibonacci number is 8)
//         long endTime = System.nanoTime();
//         long duration = endTime - startTime;
        
//         System.out.println("Running time = " + duration + " nanosecond ");
//         System.out.println("Running time = " + (duration / 1_000_000) + " milliseconds");
//     }

//   public static int recursiveFibonacci(int n) {
//     if (n < 2) { // Check if n is less than 2 (the first two numbers in the Fibonacci sequence are 0 and 1)
//         return n; // If n is less than 2, return n (which will be either 0 or 1)
//     }
//     return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2); // Otherwise, return the sum of the previous two Fibonacci numbers
// }



// }

// Memoization
// One common approach to achieve better time complexity for computing Fibonacci numbers is to use memoization. Memoization involves storing the results of previous computations in a lookup table (or array) so that they can be reused instead of recomputed each time they are needed. This can lead to a significant speedup in cases where the same computations are repeated many times, such as in the recursive Fibonacci function.

// Here's an example Java code that uses memoization to compute Fibonacci numbers:


// Java code
// import java.util.Arrays;

// public class Main {
//     public static void main(String[] args) {
        
//         long startTime = System.nanoTime();
//     System.out.println(memoizedFibonacci(0)); // Output: 0 (the 0th Fibonacci number is 0)
// System.out.println(memoizedFibonacci(1)); // Output: 1 (the 1st Fibonacci number is 1)
// System.out.println(memoizedFibonacci(6)); // Output: 8 (the 6th Fibonacci number is 8)
//         long endTime = System.nanoTime();
//         long duration = endTime - startTime;
        
//         System.out.println("Running time = " + duration + " nanosecond ");
//         System.out.println("Running time = " + (duration / 1_000_000) + " milliseconds");
//     }

//  public static int memoizedFibonacci(int n) {
//     // Create a lookup table to store previously computed Fibonacci numbers
//     int[] fibTable = new int[n + 1];

//     // Call the recursive helper function with the lookup table
//     return memoizedFibonacciHelper(n, fibTable);
// }

// public static int memoizedFibonacciHelper(int n, int[] fibTable) {
//     // Check if the value of the nth Fibonacci number has already been computed
//     if (fibTable[n] != 0) {
//         return fibTable[n];
//     }

//     // Compute the nth Fibonacci number using the recursive formula
//     if (n < 2) {
//         fibTable[n] = n;
//     } else {
//         fibTable[n] = memoizedFibonacciHelper(n - 1, fibTable) + memoizedFibonacciHelper(n - 2, fibTable);
//     }

//     // Return the computed value
//     return fibTable[n];
// }

// // System.out.println(memoizedFibonacci(0)); // Output: 0 (the 0th Fibonacci number is 0)
// // System.out.println(memoizedFibonacci(1)); // Output: 1 (the 1st Fibonacci number is 1)
// // System.out.println(memoizedFibonacci(6)); // Output: 8 (the 6th Fibonacci number is 8)




// }

// In this code, we define two functions: memoizedFibonacci and memoizedFibonacciHelper.

// The memoizedFibonacci function initializes a lookup table with size n+1 and then calls the recursive helper function memoizedFibonacciHelper with the input value n and the lookup table.

// The memoizedFibonacciHelper function first checks if the nth Fibonacci number has already been computed and stored in the lookup table. If it has, the function simply returns the precomputed value. Otherwise, the function computes the nth Fibonacci number using the recursive formula, but instead of making recursive calls, it calls itself with the values of n-1 and n-2 and the lookup table. This ensures that previously computed values are reused whenever possible.

// After computing the nth Fibonacci number, the function stores it in the lookup table for future use and returns the computed value.

// Overall, this memoized approach has a time complexity of O(n) because each value is computed only once and then stored in the lookup table for reuse. This is much faster than the exponential time complexity of the original recursive function.

// Javascript Code:

function memoizedFibonacci(n) {
    // Create a lookup table to store previously computed Fibonacci numbers
    const fibTable = new Array(n + 1).fill(0);

    // Call the recursive helper function with the lookup table
    return memoizedFibonacciHelper(n, fibTable);
}

function memoizedFibonacciHelper(n, fibTable) {
    // Check if the value of the nth Fibonacci number has already been computed
    if (fibTable[n] !== 0) {
        return fibTable[n];
    }

    // Compute the nth Fibonacci number using the recursive formula
    if (n < 2) {
        fibTable[n] = n;
    } else {
        fibTable[n] = memoizedFibonacciHelper(n - 1, fibTable) + memoizedFibonacciHelper(n - 2, fibTable);
    }

    // Return the computed value
    return fibTable[n];
}

console.log(memoizedFibonacci(0)); // Output: 0 (the 0th Fibonacci number is 0)
console.log(memoizedFibonacci(1)); // Output: 1 (the 1st Fibonacci number is 1)
console.log(memoizedFibonacci(6)); // Output: 8 (the 6th Fibonacci number is 8)
