// A prime number is a positive integer greater than 1 that has no positive integer divisors other than 1 and itself. In other words, a prime number is only divisible by 1 and itself.

// For example, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, and 97 are the first 25 prime numbers.

// Prime numbers are important in number theory and cryptography, as they are used in various mathematical algorithms and protocols. They also have interesting properties and patterns, such as the fact that there are infinitely many prime numbers, and the distribution of prime numbers becomes more sparse as the numbers get larger.

// Problem -Give a natural number `n`, determine if the number is prime or Not.

// isPrime(5) = true (1*5 or 5*1)
// isPrime(4) = false (1*4 or 2*2 or 4*1)

function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));

// The isPrime method: This method takes an integer argument n and returns a boolean value indicating whether the given number is prime or not. It does this by first checking if the given number is less than 2, in which case it returns false since any number less than 2 is not prime. If the number is greater than or equal to 2, it then loops through all numbers between 2 and n-1 (inclusive) and checks if n is divisible by any of them. If it is divisible by any of them, then it returns false since a prime number is only divisible by 1 and itself. If none of them divides n, then it returns true, indicating that n is a prime number.

// The main method: This method simply prints the results of calling the isPrime method with three different input values (1, 5, and 4) to the console using the System.out.println method. The output will be:

// The time complexity of the isPrime method in this code is O(n), where n is the input number.

// The reason for this is because the method loops through all the numbers from 2 to n-1 (inclusive) to check if n is divisible by any of them. The number of iterations in the loop is directly proportional to the input number n.

// Therefore, as the input number gets larger, the number of iterations in the loop increases linearly, leading to a linear increase in the time taken to execute the method.

// In the worst case scenario, when the input number is a large prime number, the loop will have to iterate through all the numbers from 2 to n-1, leading to a time complexity of O(n).

// Java code

// import java.util.Arrays;

// public class Main {
//     public static void main(String[] args) {
        
//         long startTime = System.nanoTime();
//         System.out.println("6 " + isPrime(6));
//         System.out.println("2 " + isPrime(2));
//         System.out.println("9 " + isPrime(9));
//         System.out.println("17 " + isPrime(17));
//         long endTime = System.nanoTime();
//         long duration = endTime - startTime;
        
//         System.out.println("Running time = " + duration + " nanosecond ");
//         System.out.println("Running time = " + (duration / 1_000_000) + " milliseconds");
//     }

//      public static boolean isPrime(int n) {
//     if (n < 2) { // Check if the input is less than 2 (since the smallest prime number is 2)
//         return false; // If n is less than 2, return false (as n cannot be a prime number)
//     }
//     for (int i = 2; i < n; i++) { // Iterate through all numbers from 2 up to n-1
//         if (n % i == 0) { // Check if n is divisible by the current number in the loop
//             return false; // If n is divisible by any number between 2 and n-1, return false (as n cannot be a prime number)
//         }
//     }
//     return true; // If n is not divisible by any number between 2 and n-1, return true (as n is a prime number)
// }
// }