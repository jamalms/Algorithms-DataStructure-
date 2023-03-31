// Binary Search

// Binary search is a search algorithm that works by repeatedly dividing the search interval in half. It is used to efficiently search for a specific value within a sorted array or list of elements.

// The algorithm works by first comparing the target value to the middle element of the array. If the target value is equal to the middle element, the search is complete. If the target value is less than the middle element, the search continues on the lower half of the array. If the target value is greater than the middle element, the search continues on the upper half of the array. This process is repeated until the target value is found or until there are no more elements left to search.

// The key advantage of binary search is that it has a time complexity of O(log n), which is much faster than a linear search algorithm that has a time complexity of O(n). However, binary search requires that the array be sorted beforehand, which can add additional time complexity if the array is not already sorted. Additionally, binary search may not be the best choice if the array is frequently changing or if the data structure is not an array.



////////////////////////////////////


// Here, we have a method called binarySearch that takes in an array of integers arr and a target integer target. The method returns the index of the target element in the array if it exists, and -1 if it does not.

// The method uses a while loop to repeatedly divide the search interval in half. We keep track of the left and right boundaries of the search interval using the variables left and right, respectively. We calculate the midpoint of the search interval using (left + right) / 2 and store it in the variable mid.

// If the element at the midpoint arr[mid] is equal to the target element, we have found our target and return mid.

// If the element at the midpoint is less than the target element, we know the target element can only be in the right half of the search interval, so we update left to mid + 1.

// If the element at the midpoint is greater than the target element, we know the target element can only be in the left half of the search interval, so we update right to mid - 1.

// We keep repeating this process until we find the target element or the search interval is empty, in which case we return -1 to indicate that the target element was not found in the array.

// Javascript code

function binarySearch(arr, target) {
    let left = 0;                           // Left boundary of the search interval
    let right = arr.length - 1;             // Right boundary of the search interval
  
    while (left <= right) {                 // While the search interval is not empty
      let mid = Math.floor((left + right) / 2);  // Calculate the midpoint of the search interval
  
      if (arr[mid] === target) {            // If we found the target element
        return mid;                         // Return its index
      } else if (arr[mid] < target) {       // If the target element is in the right half of the search interval
        left = mid + 1;                     // Update the left boundary to the right of the midpoint
      } else {                              // If the target element is in the left half of the search interval
        right = mid - 1;                    // Update the right boundary to the left of the midpoint
      }
    }
  
    return -1;                              // Target element was not found in the array
  }
  
  function main() {
    const startTime = performance.now();
    
    const arr = [1, 2, 3, 4, 5];
    const target = 3;
    const result = binarySearch(arr, target);  // Call the binarySearch method to get the result
  
    if (result === -1) {                     // If the target was not found
      console.log(`The Target of ${target} NOT FOUND`);
    } else {
      console.log(`The Target of ${target} exists in Index: ${result}`);
    }
  
    const endTime = performance.now();
    const timeElapsed = endTime - startTime;
    console.log(`Execution time in milliseconds: ${timeElapsed}`);
  }
  
  main();
  


/// Java code;


// public class Main
// {
  
// /**
//  * Binary search implementation for an integer array.
//  * Returns the index of the target element if found, or -1 otherwise.
//  *
//  * @param arr The array to search in.
//  * @param target The target element to search for.
//  * @return The index of the target element if found, or -1 otherwise.
//  */
// public static int binarySearch(int[] arr, int target) {
//     int left = 0;                           // Left boundary of the search interval
//     int right = arr.length - 1;             // Right boundary of the search interval
    
//     while (left <= right) {                 // While the search interval is not empty
//         int mid = (left + right) / 2;       // Calculate the midpoint of the search interval
        
//         if (arr[mid] == target) {           // If we found the target element
//             return mid;                     // Return its index
//         } else if (arr[mid] < target) {     // If the target element is in the right half of the search interval
//             left = mid + 1;                 // Update the left boundary to the right of the midpoint
//         } else {                            // If the target element is in the left half of the search interval
//             right = mid - 1;                // Update the right boundary to the left of the midpoint
//         }
//     }
    
//     return -1;                              // Target element was not found in the array
// }


// public static void main(String[] args) {
   
//     long startTime = System.nanoTime();
    
//     int[] arr = {1, 2, 3, 4, 5};
//     int target = 3;
//     int result = binarySearch(arr, target); // Call the binarySearch method to get the result

//         if (result == -1) {                     // If the target was not found
//             System.out.println("The Target of " + target + " NOT FOUND");
//         } else {
//             System.out.println("The Target of " + target + " exists in Index: " + result);
//         }
    
//     long endTime = System.nanoTime();
//     long timeElapsed = endTime - startTime;
//     System.out.println("Execution time in nanoseconds: " + timeElapsed);
//     System.out.println("Execution time in milliseconds: " + timeElapsed / 1000000);
// }


// }

// public class Employee {
//     private int id;
//     private String name;

//     public Employee(int id, String name) {
//         this.id = id;
//         this.name = name;
//     }

//     public String getName() {
//         return name;
//     }
// }

// public static int binarySearch(Employee[] arr, String target) {
//     int left = 0;
//     int right = arr.length - 1;

//     while (left <= right) {
//         int mid = (left + right) / 2;

//         int cmp = arr[mid].getName().compareTo(target);
//         if (cmp == 0) {
//             return mid;
//         } else if (cmp < 0) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }

//     return -1;
// }

// Here's an example of how you could use this binary search implementation to search for an employee's name in an array of Employee objects:

// public static void main(String[] args) {
//     Employee[] employees = new Employee[] {
//         new Employee(1, "Alice"),
//         new Employee(2, "Bob"),
//         new Employee(3, "Charlie"),
//         new Employee(4, "David"),
//         new Employee(5, "Emily")
//     };

//     int index = binarySearch(employees, "David");
//     if (index != -1) {
//         System.out.println("Employee found at index " + index);
//     } else {
//         System.out.println("Employee not found");
//     }
// }


// In this example, we have an Employee class with an id and a name. We also have a binarySearch method that takes in an array of Employee objects and a target string representing the name of the employee we are searching for.

// Inside the binarySearch method, we compare the target string to the name of the Employee object at the midpoint of the search interval using the compareTo method. If the result of the comparison is 0, we have found the target employee and return its index. If the result is less than 0, the target employee must be in the right half of the search interval, and we update the left boundary. If the result is greater than 0, the target



////////////// To allow the user to create the array 
// binarySearch function that takes an array and target value as input
// binarySearch function that takes an array and target value as input
function binarySearch(arr, target) {
    // set left and right pointers to the start and end of the array
    let left = 0;
    let right = arr.length - 1;
  
    // continue searching while the left pointer is less than or equal to the right pointer
    while (left <= right) {
      // calculate the midpoint index of the array
      let mid = Math.floor((left + right) / 2);
  
      // if the value at the midpoint index is the target, return the midpoint index
      if (arr[mid] === target) {
        return mid;
      }
      // if the value at the midpoint index is less than the target, move the left pointer to mid + 1
      else if (arr[mid] < target) {
        left = mid + 1;
      }
      // if the value at the midpoint index is greater than the target, move the right pointer to mid - 1
      else {
        right = mid - 1;
      }
    }
  
    // if the target is not found, return -1
    return -1;
  }
  
  // prompt the user to enter a list of numbers and a target value
  const input = prompt("Enter the numbers separated by spaces:");
  // split the input into an array of numbers
  const arr = input.split(" ").map(Number);
  
  const target = parseInt(prompt("Enter the target:"));
  
  // start a timer to measure the execution time
  const startTime = Date.now();
  
  // run the binary search function to search for the target in the array
  const result = binarySearch(arr, target);
  
  // if the target is not found, print a message saying so
  if (result === -1) {
    console.log(`The Target of ${target} NOT FOUND`);
  }
  // if the target is found, print a message with the index of the target in the array
  else {
    console.log(`The Target of ${target} exists in Index: ${result}`);
  }
  
  // stop the timer and calculate the elapsed time
  const endTime = Date.now();
  const timeElapsed = endTime - startTime;
  
  // print the execution time in milliseconds
  console.log(`Execution time in milliseconds: ${timeElapsed}`);
  
  //// Java code 

//   import java.util.Scanner;

// class Main {
//   // binarySearch function that takes an array and target value as input
//   static int binarySearch(int[] arr, int target) {
//     // set left and right pointers to the start and end of the array
//     int left = 0;
//     int right = arr.length - 1;

//     // continue searching while the left pointer is less than or equal to the right pointer
//     while (left <= right) {
//       // calculate the midpoint index of the array
//       int mid = (left + right) / 2;

//       // if the value at the midpoint index is the target, return the midpoint index
//       if (arr[mid] == target) {
//         return mid;
//       }
//       // if the value at the midpoint index is less than the target, move the left pointer to mid + 1
//       else if (arr[mid] < target) {
//         left = mid + 1;
//       }
//       // if the value at the midpoint index is greater than the target, move the right pointer to mid - 1
//       else {
//         right = mid - 1;
//       }
//     }

//     // if the target is not found, return -1
//     return -1;
//   }

//   public static void main(String[] args) {
//     Scanner input = new Scanner(System.in);

//     // prompt the user to enter a list of numbers and a target value
//     System.out.print("Enter the numbers separated by spaces: ");
//     String[] arrStr = input.nextLine().split(" ");
//     int[] arr = new int[arrStr.length];
//     for (int i = 0; i < arrStr.length; i++) {
//       arr[i] = Integer.parseInt(arrStr[i]);
//     }

//     System.out.print("Enter the target: ");
//     int target = input.nextInt();

//     // start a timer to measure the execution time
//     long startTime = System.currentTimeMillis();

//     // run the binary search function to search for the target in the array
//     int result = binarySearch(arr, target);

//     // if the target is not found, print a message saying so
//     if (result == -1) {
//       System.out.printf("The Target of %d NOT FOUND%n", target);
//     }
//     // if the target is found, print a message with the index of the target in the array
//     else {
//       System.out.printf("The Target of %d exists in Index: %d%n", target, result);
//     }

//     // stop the timer and calculate the elapsed time
//     long endTime = System.currentTimeMillis();
//     long timeElapsed = endTime - startTime;

//     // print the execution time in milliseconds
//     System.out.printf("Execution time in milliseconds: %d%n", timeElapsed);
//   }
// }




// The time complexity of binary search algorithm is O(log n), where n is the number of elements in the sorted array.

// Binary search algorithm works by repeatedly dividing the search interval in half, and determining which half of the interval the target element must be in, until the target element is found or the interval becomes empty. Each comparison eliminates half of the remaining elements, and so the time complexity of the algorithm is logarithmic.

// To be more precise, the maximum number of comparisons required to find the target element is log2 n, where n is the number of elements in the sorted array. This is because each comparison reduces the search interval by half, until the target element is found or the interval becomes empty.

// Therefore, the time complexity of binary search algorithm is O(log n), which makes it very efficient for searching large arrays