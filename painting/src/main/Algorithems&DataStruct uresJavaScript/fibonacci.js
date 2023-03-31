// Fibonacci sequence
// The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1. In mathematical terms, the sequence is defined by the recurrence relation:

// scss
// Copy code
// F(n) = F(n-1) + F(n-2)
// where F(0) = 0 and F(1) = 1.

// So the first few numbers in the sequence are:

// yaml
// Copy code
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, ...
// The Fibonacci sequence has many interesting mathematical properties and appears in a variety of natural phenomena, such as the growth patterns of plants and the spirals of seashells. The sequence is named after the Italian mathematician Leonardo Fibonacci, who introduced it to the Western world in his book "Liber Abaci" in 1202.
// Problem - Give a number `n`, find the first `n` elements of the Fibonacci sequence

function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
};

console.log(fibonacci(5));
console.log(fibonacci(8));
console.log(fibonacci(10));


// Big O = O(n)

//Java code

// import java.util.Arrays;

// public class Main {
//     public static void main(String[] args) {
//         long startTime = System.nanoTime();
//         int[] result = fibonacci(10);
//         long endTime = System.nanoTime();
//         long duration = endTime - startTime;
//         System.out.println(Arrays.toString(result));
//         System.out.println("Running time = " + duration + " nanosecond ");
//         System.out.println("Running time = " + (duration / 1_000_000) + " milliseconds");
//     }

//     public static int[] fibonacci(int n) {
//         int[] fib = new int[n];
//         fib[0] = 0;
//         fib[1] = 1;
//         for (int i = 2; i < n; i++) {
//             fib[i] = fib[i - 1] + fib[i - 2];
//         }
//         return fib;
//     }
// }
