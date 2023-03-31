// A power of two is a number of the form 2^n, where n is a non-negative integer. In other words, a power of two is the result of multiplying 2 by itself some number of times. For example:

// 2^0 = 1
// 2^1 = 2
// 2^2 = 4
// 2^3 = 8
// 2^4 = 16
// 2^5 = 32
// ...
// Powers of two have several interesting properties that make them useful in computer science and digital technology. For example, in binary (base-2) representation, a power of two is represented by a single 1 followed by n zeroes. This makes it easy to perform bitwise operations on powers of two, which can be useful for bit manipulation and computer memory management.

// In addition, many computer algorithms and data structures rely on the fact that the size of a binary tree, hash table, or other data structure can be expressed as a power of two. This allows for efficient memory allocation and indexing, among other things.

// It's also worth noting that powers of two grow very quickly, and can become very large for relatively small values of n. For example, 2^64 is approximately 18.4 quintillion, which is much larger than the estimated number of atoms in the observable universe!

// Problem - Give a positive integer `n`, determine if the number is a pwoer of two or not

// isPowerOfTwo(1) = true (2^0)
// isPowerOfTwo(2) = true (2^1)
// isPowerOfTwo(5) = false

// The given code checks if a given integer n is a power of two or not.

// The isPowerOfTwo() method takes an integer n as input and returns a boolean value indicating whether n is a power of two or not. It does this by first checking if n is less than 1, in which case it immediately returns false. If n is greater than or equal to 1, the method enters a while loop that continues as long as n is greater than 1. Within the loop, the method checks if n is divisible by 2 (i.e., even). If it is not, the method immediately returns false, because any power of two must be even. If n is even, the method divides n by 2 and continues to the next iteration of the loop. The loop continues until n is less than or equal to 1. If the loop completes without returning false, it means that

function isPowerOfTwo(n) {
    if (n < 1) {
        return false;
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n = n / 2
    }
    return true;
}
console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(5)); // false

// The time complexity of the provided code is O(log n).

// The while loop iterates until n is reduced to 1. In each iteration, the value of n is divided by 2, which takes O(1) time. Therefore, the number of iterations required to reduce n to 1 is log2(n) (base 2 logarithm of n).

// Hence, the overall time complexity of the code is O(log n).

//Java code


// import java.util.Arrays;

// public class Main {
//     public static void main(String[] args) {
        
//         long startTime = System.nanoTime();
//         System.out.println(isPowerOfTwo(6));
//         System.out.println(isPowerOfTwo(8));
//         long endTime = System.nanoTime();
//         long duration = endTime - startTime;
        
//         System.out.println("Running time = " + duration + " nanosecond ");
//         System.out.println("Running time = " + (duration / 1_000_000) + " milliseconds");
//     }

//     public static boolean isPowerOfTwo(int n) {
//         if (n < 1) {
//             return false;
//         }
//         while (n > 1) {
//             if (n % 2 !=0) {
//                 return false;
//             }
//             n = n / 2;
//         }
//         return true;
//     }
// }