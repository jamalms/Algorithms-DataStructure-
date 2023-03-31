// Factorial of a Number
// Problem - Gice an integer `n`, find the factorial of that integer?

// In mathmatics, the factorial of a non-negative integer `n`, denoted n!, is the product of all positive integers less than or equal to `n`.
// Factorial of zero is 1.
// factorial(4) = 4*3*2*2*1 = 24
// factorial(5) = 5*4*3*2*1 = 120 

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;
}
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));

// Big O = O(n)


//JAVA CODE
// public class Main {
//     public static void main(String[] args) {
//         System.out.println(factorial(0));
//         System.out.println(factorial(1));
//         System.out.println(factorial(5));
//     }

//     public static int factorial(int n) {
//         int result = 1;
//         for (int i = 2; i <= n; i++) {
//             result = result * i;
//         }
//         return result;
//     }
// }


// The time complexity of the factorial() function in the provided Java code is O(n), where n is the input value.

// The function uses a single for loop that iterates from 2 to n, and performs a constant-time operation in each iteration, which is the multiplication of the current result by the loop variable i. Therefore, the time complexity of the factorial() function is proportional to the size of the input n, and we can express it as O(n).

// Since the loop runs n-2 times, the exact number of iterations is n-2+1 = n-1. However, in big O notation, we ignore constant factors and lower-order terms, and focus on the dominant term, which is n in this case. Therefore, the time complexity of the factorial() function is O(n).

// To calculate time complexity?

// public class Main {
//     public static void main(String[] args) {
//         long startTime = System.nanoTime();
//         int result = factorial(10);
//         long endTime = System.nanoTime();
//         long duration = endTime - startTime;
//         System.out.println("Factorial of 10 = " + result);
//         System.out.println("Running time = " + duration + " nanoseconds");
//     }

//     public static int factorial(int n) {
//         int result = 1;
//         for (int i = 2; i <= n; i++) {
//             result = result * i;
//         }
//         return result;
//     }
// }