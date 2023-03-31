// Recursive Factorial
// Factorial of a non-negative integer `n` is the product of all positive integers less than or equl to `n`.

// n = n * (n - 1)

// 5 = 5*4*3*2*1  5*4
// 4 = 4*3*2*1    4*3
// 3 = 3*2*1      3*2
// 2 = 2*1        2*1
// 1 = 1*1        1*0

// This function calculates the factorial of a number recursively
function recursiveFactorial(n) {
    // If the number is equal 0, return 1
    if (n === 0) {
    return 1;
    }
    // Otherwise, multiply the number by the factorial of n-1
    return n * recursiveFactorial(n-1);
    }
    
    // Call the function with different inputs and log the result to the console
    console.log(recursiveFactorial(0)); // 1
    console.log(recursiveFactorial(1)) // 1
    console.log(recursiveFactorial(6)) // 720

    // Java Code
//     import java.util.Arrays;

// public class Main {
//     public static void main(String[] args) {
        
//         long startTime = System.nanoTime();
//         System.out.println(recursiveFactorial(0)); // 1
//         System.out.println(recursiveFactorial(1)); // 1
//         System.out.println(recursiveFactorial(6)); // 720
//         long endTime = System.nanoTime();
//         long duration = endTime - startTime;
        
//         System.out.println("Running time = " + duration + " nanosecond ");
//         System.out.println("Running time = " + (duration / 1_000_000) + " milliseconds");
//     }

//  public static int recursiveFactorial(int n) {
//          // If the number is equal 0, return 1
//   if (n === 0) {
//             return 1;
//         }
//         // Otherwise, multiply the number by the factorial of n-1
//         return n * recursiveFactorial(n-1);
//     }
// }