// Liner Search
// Problem - Given an array of'n' elements and a target element 't', find the index of 't' in the array.
// Return -1 if the target element is not found.
// arr = [-5, 2, 10, 4, 6] t = 10 -> Should return 2
// arr = [-5, 2, 10, 4, 6] t = 6 -> Should return 4
// arr = [-5, 2, 10, 4, 6] t = 20 -> Should return -1

// Start at the first element in the array and move towards the last.
// At each element though, check if the element is equal to the target element.
// If element found, return the index of the element.
// if element not found, return -1.

// JavaScript Code

function linerSearch (arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1 + " the target is not found";
}

console.log(linerSearch([-5, 2, 10, 4, 6], 10)); // 2
console.log(linerSearch([-5, 2, 10, 4, 6], 6)); // 4
console.log(linerSearch([-5, 2, 10, 4, 6], 20)); // -1


// Java code:

// public class Main {
//     public static String linearSearch(int[] arr, int target) {
//         for (int i = 0; i < arr.length; i++) {
//             if (arr[i] == target) {
//                 return Integer.toString(i);
//             }
//         }
//         return "The TARGET is NOT found!";
//     }

//     public static void main(String[] args) {
//         int[] arr = {-5, 2, 10, 4, 6};
//         int target1 = 10;
//         int target2 = 6;
//         int target3 = 20;

//         System.out.println(linearSearch(arr, target1)); // 2
//         System.out.println(linearSearch(arr, target2)); // 4
//         System.out.println(linearSearch(arr, target3)); // The TARGET is NOT found!
//     }
// }

// OR 

// public class Main {
//     public static String linearSearch(int[] arr, int target) {
//         for (int i = 0; i < arr.length; i++) {
//             if (arr[i] == target) {
//                 return Integer.toString(i);
//             }
//         }
//         return "The TARGET is NOT found!";
//     }

//     public static void main(String[] args) {
//         int[] arr = {-5, 2, 10, 4, 6};
//         int target1 = 10;
//         int target2 = 6;
//         int target3 = 20;

//         System.out.println(linearSearch(arr, target1)); // 2
//         System.out.println(linearSearch(arr, target2)); // 4
//         System.out.println(linearSearch(arr, target3)); // The TARGET is NOT found!
//     }
// }




// The time complexity of linear search is O(n), where n is the length of the input array. This is because in the worst case, the algorithm may have to iterate through the entire array to find the target value.

// To calculate the time complexity in nanoseconds, we can use Java's System.nanoTime() method to measure the time taken to execute the linear search function. Here's an example:


// public class Main
// {
// 	public static int linearSearch(int[] arr, int target) {
// 	    for (int i = 0; i < arr.length; i++) {
//         if (arr[i] == target) {
//             return i;
//         }
//     }
//     return -1;
// }

// public static void main(String[] args) {
//     int[] arr = {-5, 2, 10, 4, 6};
//     int target = 10;
//     System.out.println("The target is in index: " + linearSearch(arr, target));

//     long startTime = System.nanoTime();
//     linearSearch(arr, target);
//     long endTime = System.nanoTime();

//     long timeElapsed = endTime - startTime;
//     System.out.println("Execution time in nanoseconds: " + timeElapsed);
//     System.out.println("Execution time in milliseconds: " + timeElapsed / 1000000);
// }


// }

// In this example, we measure the time taken to execute the linearSearch function with an input array 
// of length 5 and a target value of 10. We use the System.nanoTime() method to record the start and end times 
// of the function execution, and then subtract the start time from the end time to get the elapsed time in nanoseconds. We print out the elapsed time using System.out.println. 
// Note that the actual time taken may vary depending on the hardware and other factors.



// Liner Search for Object Java Code:

// public class Main
// {
  
//   public static String linearSearch(Object[] arr, Object target) {
//     for (int i = 0; i < arr.length; i++) {
//         if (arr[i].equals(target)) {
//             return Integer.toString(i);
//         }
//     }
//     return " IS NOT FOUND!";
// }

    
// public static void main(String[] args) {
   
//     long startTime = System.nanoTime();
    
//     Integer[] arr = {-5, 2, 10, 4, 6};
//     Integer target1 = 10;
//     Integer target2 = 6;
//     Integer target3 = 20;
//     System.out.println("The target " + target1 + " is in index: " + linearSearch(arr, target1));
//     System.out.println("The target " + target2 + " is in index: " + linearSearch(arr, target2));
//     System.out.println("The TARGET: " + target3 + linearSearch(arr, target3));


//     String[] stringArr = {"apple", "banana", "cherry", "date"};
//     String target4 = "cherry";
//     String target5 = "fig";
//     System.out.println("The target " + target4 + " is in index: " + linearSearch(stringArr, target4)); // 2
//     System.out.println("The TARGET: " + target5 + linearSearch(stringArr, target5)); // The TARGET is NOT found!
    
//     long endTime = System.nanoTime();
//     long timeElapsed = endTime - startTime;
//     System.out.println("Execution time in nanoseconds: " + timeElapsed);
//     System.out.println("Execution time in milliseconds: " + timeElapsed / 1000000);
    
//     }

// }


// Liner Search for object javascript code:

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i.toString();
      }
    }
    return " IS NOT FOUND!";
  }
  
  const startTime = performance.now();
  
  const arr = [-5, 2, 10, 4, 6];
  const target1 = 10;
  const target2 = 6;
  const target3 = 20;
  console.log(`The target ${target1} is in index: ${linearSearch(arr, target1)}`);
  console.log(`The target ${target2} is in index: ${linearSearch(arr, target2)}`);
  console.log(`The TARGET: ${target3}${linearSearch(arr, target3)}`);
  
  const stringArr = ["apple", "banana", "cherry", "date"];
  const target4 = "cherry";
  const target5 = "fig";
  console.log(`The target ${target4} is in index: ${linearSearch(stringArr, target4)}`);
  console.log(`The TARGET: ${target5}${linearSearch(stringArr, target5)}`);
  
  const endTime = performance.now();
  const timeElapsed = endTime - startTime;
  console.log(`Execution time in milliseconds: ${timeElapsed}`);
  console.log(`Execution time in nanosecond: ${timeElapsed * 1000}`);
  
