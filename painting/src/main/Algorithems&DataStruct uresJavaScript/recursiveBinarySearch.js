// Recursive Binary Search

// The binarySearchRecursive method takes four parameters: the sorted array to search (arr), the target value to search for (target), and the lower and upper bounds of the search interval (low and high, respectively).

// The method starts by checking if the lower bound is greater than the upper bound. If it is, the target value is not found in the array and -1 is returned to indicate this.

// If the target value is not found in the current search interval, the method calculates the middle index of the interval by adding the lower and upper bounds and dividing by 2. If the middle value is equal to the target value, the index of the middle value is returned.

// If the middle value is less than the target value, the method is called recursively with the search interval shifted to the right half of the array (i.e., from mid + 1 to high). If the middle value is greater than the target value, the method is called recursively with the search interval shifted to the left half of the array (i.e., from low to mid - 1).

// The recursion continues until the target value is found or the search interval becomes empty (i.e., low is greater than high). If the target value is not found, -1 is returned to indicate this.

// Note that this implementation assumes that the array is sorted in ascending order. Also, the method is called with the initial values of low and high set to 0 and arr.length - 1, respectively, to search the entire array.


//Java Code

// public class Main {
//     public static int binarySearchRecursive(int[] arr, int target, int low, int high) {
//         if (low > high) {
//             return -1; // target not found
//         }
        
//         int mid = (low + high) / 2; // find the middle index
        
//         if (arr[mid] == target) {
//             return mid; // target found
//         } else if (arr[mid] < target) {
//             return binarySearchRecursive(arr, target, mid + 1, high); // search right half
//         } else {
//             return binarySearchRecursive(arr, target, low, mid - 1); // search left half
//         }
//     }
    
//     public static void main(String[] args) {
//         int[] arr = {1, 2, 3, 4, 5};
//         int target = 3;
//         int result = binarySearchRecursive(arr, target, 0, arr.length - 1); // Call the binarySearchRecursive method with the initial bounds
        
//         if (result == -1) {
//             System.out.println("The Target of " + target + " NOT FOUND");
//         } else {
//             System.out.println("The Target of " + target + " exists in Index: " + result);
//         }
//     }
// }

/// Javascript code:
function binarySearchRecursive(arr, target, low, high) {
    if (low > high) {
        return -1; // target not found
    }
    
    let mid = Math.floor((low + high) / 2); // find the middle index
    
    if (arr[mid] == target) {
        return mid; // target found
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, high); // search right half
    } else {
        return binarySearchRecursive(arr, target, low, mid - 1); // search left half
    }
}

let arr = [1, 2, 3, 4, 5];
let target = 30;
let result = binarySearchRecursive(arr, target, 0, arr.length - 1); // Call the binarySearchRecursive method with the initial bounds

if (result == -1) {
    console.log(`The Target of ${target} NOT FOUND`);
} else {
    console.log(`The Target of ${target} exists in Index: ${result}`);
}



/// The time complexity of the binary search algorithm is O(log n) in the average and worst cases. This is because the algorithm divides the search space in half with each comparison, resulting in a logarithmic time complexity. In this specific implementation, the time complexity is also O(log n) because the function uses recursion to divide the search space.

// Java code for binary search recursivly for Objects:

// public class Main {
//     public static int binarySearchEmployee(Employee[] employees, int targetId, String targetName, int low, int high) {
//         if (low > high) {
//             return -1; // target not found
//         }

//         int mid = (low + high) / 2; // find the middle index

//         if (employees[mid].getId() == targetId && employees[mid].getName().equals(targetName)) {
//             return mid; // target found
//         } else if (employees[mid].getId() < targetId || (employees[mid].getId() == targetId && employees[mid].getName().compareTo(targetName) < 0)) {
//             return binarySearchEmployee(employees, targetId, targetName, mid + 1, high); // search right half
//         } else {
//             return binarySearchEmployee(employees, targetId, targetName, low, mid - 1); // search left half
//         }
//     }

//     public static void main(String[] args) {
//         Employee[] employees = {new Employee(1, "John"), new Employee(2, "Alex"), new Employee(3, "Chris"), new Employee(4, "Tom"), new Employee(5, "Zoe")};
//         int targetId = 3;
//         String targetName = "Chris";
//         int result = binarySearchEmployee(employees, targetId, targetName, 0, employees.length - 1); // Call the binarySearchEmployee method with the initial bounds

//         if (result == -1) {
//             System.out.println("The Employee with id " + targetId + " and name " + targetName + " NOT FOUND");
//         } else {
//             System.out.println("The Employee with id " + targetId + " and name " + targetName + " exists in Index: " + result);
//         }
//     }
// }

// class Employee {
//     private int id;
//     private String name;

//     public Employee(int id, String name) {
//         this.id = id;
//         this.name = name;
//     }

//     public int getId() {
//         return id;
//     }

//     public String getName() {
//         return name;
//     }
// }

// Javascript code for binary search recursivly for Objects:

function binarySearchEmployee(employees, targetId, targetName, low, high) {
    if (low > high) {
      return -1; // target not found
    }
  
    let mid = Math.floor((low + high) / 2); // find the middle index
  
    if (employees[mid].getId() === targetId && employees[mid].getName() === targetName) {
      return mid; // target found
    } else if (employees[mid].getId() < targetId || (employees[mid].getId() === targetId && employees[mid].getName().localeCompare(targetName) < 0)) {
      return binarySearchEmployee(employees, targetId, targetName, mid + 1, high); // search right half
    } else {
      return binarySearchEmployee(employees, targetId, targetName, low, mid - 1); // search left half
    }
  }
  
  class Employee {
    constructor(id, name) {
      this.id = id;
      this.name = name;
    }
  
    getId() {
      return this.id;
    }
  
    getName() {
      return this.name;
    }
  }
  
  const employees = [new Employee(1, "John"), new Employee(2, "Alex"), new Employee(3, "Chris"), new Employee(4, "Tom"), new Employee(5, "Zoe")];
  const targetId = 3;
  const targetName = "Chris";
  const result = binarySearchEmployee(employees, targetId, targetName, 0, employees.length - 1); // Call the binarySearchEmployee method with the initial bounds
  
  if (result === -1) {
    console.log(`The Employee with id ${targetId} and name ${targetName} NOT FOUND`);
  } else {
    console.log(`The Employee with id ${targetId} and name ${targetName} exists in Index: ${result}`);
  }
  
// Java code to allow the user to create the array numbers and input the target to search:

// import java.util.Scanner;

// public class Main {
//     public static int binarySearchRecursive(int[] arr, int target, int low, int high) {
//         if (low > high) {
//             return -1; // target not found
//         }
        
//         int mid = (low + high) / 2; // find the middle index
        
//         if (arr[mid] == target) {
//             return mid; // target found
//         } else if (arr[mid] < target) {
//             return binarySearchRecursive(arr, target, mid + 1, high); // search right half
//         } else {
//             return binarySearchRecursive(arr, target, low, mid - 1); // search left half
//         }
//     }
    
//     public static void main(String[] args) {
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
        
//         int result = binarySearchRecursive(arr, target, 0, arr.length - 1); // Call the binarySearchRecursive method with the initial bounds
        
//         if (result == -1) {
//             System.out.println("The Target of " + target + " NOT FOUND");
//         } else {
//             System.out.println("The Target of " + target + " exists in Index: " + result);
//         }
//     }
// }

// Java code to allow the user to create the array numbers and input the target to search:

function binarySearchRecursive(arr, target, low, high) {
  if (low > high) {
    return -1; // target not found
  }

  let mid = Math.floor((low + high) / 2); // find the middle index

  if (arr[mid] === target) {
    return mid; // target found
  } else if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, high); // search right half
  } else {
    return binarySearchRecursive(arr, target, low, mid - 1); // search left half
  }
}

 // prompt the user to enter a list of numbers and a target value
  const input = prompt("Enter the numbers separated by spaces:");
  // split the input into an array of numbers
  const arr = input.split(" ").map(Number);
  
  const target = parseInt(prompt("Enter the target:"));
  
  // start a timer to measure the execution time
  const startTime = Date.now();
    let result = binarySearchRecursive(arr, parseInt(target), 0, arr.length - 1); // Call the binarySearchRecursive method with the initial bounds

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