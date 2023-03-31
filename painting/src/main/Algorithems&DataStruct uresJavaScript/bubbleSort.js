// Bubble Sort
//Bubble sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, 
//compares each pair of adjacent items and swaps them if they are in the wrong order. 
//The pass through the list is repeated until no swaps are needed, 
//which indicates that the list is sorted. 

// The time complexity of bubble sort algorithm is O(n^2), where "n" is the number of elements in the array being sorted. This means that the time taken by the algorithm to sort an array increases exponentially with the increase in the number of elements in the array.

// Bubble sort works by repeatedly swapping adjacent elements if they are in the wrong order, until the entire array is sorted. In the worst-case scenario, where the array is sorted in reverse order, each element would need to be compared with every other element, resulting in n^2 comparisons.

// While bubble sort is simple to implement, it is generally considered inefficient for large datasets. There are more efficient sorting algorithms such as merge sort and quick sort that have a better time complexity for larger datasets.
//Here's an implementation of Bubble sort in JavaScript:

// define a function called bubbleSort that takes an array as input
function bubbleSort(arr) {
    // get the length of the array
    const n = arr.length;
    
    // create a variable called "swapped" and set it to false
    let swapped = false;
    
    // use a do-while loop to repeat the following steps while "swapped" is true
    do {
      // set "swapped" to false
      swapped = false;
      
      // use a for loop to iterate through each pair of adjacent elements in the array
      for (let i = 0; i < n - 1; i++) {
        // if the current element is greater than the next element, swap them
        if (arr[i] > arr[i + 1]) {
          // swap arr[i] and arr[i+1]
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          // set "swapped" to true, indicating that a swap occurred
          swapped = true;
        }
      }
    } while (swapped); // repeat the loop as long as at least one swap occurred in the previous iteration
    
    // return the sorted array
    return arr;
  }
  
  const arr = [5, 3, 8, 4, 2];
console.log(bubbleSort(arr)); // output: [2, 3, 4, 5, 8]

// In this example, the array [5, 3, 8, 4, 2] is passed as an argument to the bubbleSort function. 
// The function then sorts the array using the bubble sort algorithm and returns the sorted array. 
//The output of the function call is [2, 3, 4, 5, 8].

// Java code

// import java.util.Arrays;

// public class Main
// {
// public static void bubbleSort(int[] arr) {
//     // get the length of the array
//     int n = arr.length - 1;
    
//     // create a variable called "swapped" and set it to false
//     boolean swapped = false;
    
//     // use a do-while loop to repeat the following steps while "swapped" is true
//     do {
//         // set "swapped" to false
//         swapped = false;
        
//         // use a for loop to iterate through each pair of adjacent elements in the array
//         for (int i = 0; i < n; i++) {
//             // if the current element is greater than the next element, swap them
//             if (arr[i] > arr[i + 1]) {
//                 // swap arr[i] and arr[i+1]
//                 int temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//                 // set "swapped" to true, indicating that a swap occurred
//                 swapped = true;
//             }
//         }
//     } while (swapped); // repeat the loop as long as at least one swap occurred in the previous iteration
// }

// public static void main(String[] args) {
//     int[] arr = {5, 3, 6, 4, 2};
//     bubbleSort(arr);
//     System.out.println(Arrays.toString(arr)); // output: [2, 3, 4, 5, 6]
// }

// }


/// Java Code for BubbleSort for Objects the sorting based on employees id

// import java.util.Arrays;

// public class Main {

//     // Define a method called bubbleSort that takes an array of Employee objects as input
//     public static void bubbleSort(Employee[] employees) {
//         int n = employees.length; // Get the length of the array
//         boolean swapped; // Define a boolean variable called swapped
//         do {
//             swapped = false; // Initialize swapped to false
//             // Loop through the array from the first to the second-to-last element
//             for (int i = 0; i < n - 1; i++) {
//                 // Check if the ID of the current employee is greater than the ID of the next employee
//                 if (employees[i].getId() > employees[i + 1].getId()) {
//                     // If so, swap the positions of the two employees
//                     Employee temp = employees[i];
//                     employees[i] = employees[i + 1];
//                     employees[i + 1] = temp;
//                     swapped = true; // Set swapped to true to indicate that a swap occurred
//                 }
//             }
//             n--; // Decrement n as the largest element will be at the end of the array after each iteration
//         } while (swapped); // Continue looping as long as a swap occurred in the previous iteration
//     }

//     public static void main(String[] args) {
//         // Define an array of Employee objects
//         Employee[] employees = {
//             new Employee(3, "John"), 
//             new Employee(1, "Alex"), 
//             new Employee(5, "Chris"), 
//             new Employee(2, "Tom"), 
//             new Employee(4, "Zoe")
            
//         };
//         bubbleSort(employees); // Sort the array using the bubbleSort method
//         System.out.println(Arrays.toString(employees)); // Print the sorted array
//     }
// }

// // Define a class called Employee
// class Employee {
//     private int id;
//     private String name;

//     // Define a constructor that takes an ID and name as input and sets the corresponding instance variables
//     public Employee(int id, String name) {
//         this.id = id;
//         this.name = name;
//     }

//     // Define a method called getId that returns the ID of the employee
//     public int getId() {
//         return id;
//     }

//     // Define a method called getName that returns the name of the employee
//     public String getName() {
//         return name;
//     }

//     // Override the toString method to print the name of the employee instead of the default Object toString
//     @Override
//     public String toString() {
//         return name;
//     }
// }


/// Java Code for BubbleSort for Objects the sorting based on employees name

// import java.util.Arrays;

// public class Main {

//  public static void bubbleSort(Employee[] employees) {
//     int n = employees.length;
//     boolean swapped;
//     do {
//         swapped = false;
//         for (int i = 0; i < n - 1; i++) {
//             // Compare the names of the current employee and the next employee
//             if (employees[i].getName().compareTo(employees[i + 1].getName()) > 0) {
//                 // If the name of the current employee comes after the name of the next employee in alphabetical order,
//                 // swap their positions
//                 Employee temp = employees[i];
//                 employees[i] = employees[i + 1];
//                 employees[i + 1] = temp;
//                 swapped = true;
//             }
//         }
//         n--;
//     } while (swapped);
// }


//     public static void main(String[] args) {
//         // Define an array of Employee objects
//         Employee[] employees = {
//             new Employee(3, "John"), 
//             new Employee(1, "Alex"), 
//             new Employee(5, "Chris"), 
//             new Employee(2, "Tom"), 
//             new Employee(4, "Zoe")
            
//         };
//         bubbleSort(employees); // Sort the array using the bubbleSort method
//         System.out.println(Arrays.toString(employees)); // Print the sorted array
//     }
// }

// // Define a class called Employee
// class Employee {
//     private int id;
//     private String name;

//     // Define a constructor that takes an ID and name as input and sets the corresponding instance variables
//     public Employee(int id, String name) {
//         this.id = id;
//         this.name = name;
//     }

//     // Define a method called getId that returns the ID of the employee
//     public int getId() {
//         return id;
//     }

//     // Define a method called getName that returns the name of the employee
//     public String getName() {
//         return name;
//     }

//     // Override the toString method to print the name of the employee instead of the default Object toString
//     @Override
//     public String toString() {
//         return name;
//     }
// }

/// Javascript Code for BubbleSort for Objects the sorting based on employees name

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
  
    toString() {
      return this.name;
    }
  }
  
  function bubbleSort(employees) {
    let n = employees.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (employees[i].getName() > employees[i + 1].getName()) {
          let temp = employees[i];
          employees[i] = employees[i + 1];
          employees[i + 1] = temp;
          swapped = true;
        }
      }
      n--;
    } while (swapped);
  }
  
  let employees = [
    new Employee(3, "John"), 
    new Employee(1, "Alex"), 
    new Employee(5, "Chris"), 
    new Employee(2, "Tom"), 
    new Employee(4, "Zoe")
  ];
  bubbleSort(employees);
  console.log(employees);
  

////
/// Javascript Code for BubbleSort for Objects the sorting based on employees id
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
  
    toString() {
      return this.name;
    }
  }
  
  function bubbleSort(employees) {
    let n = employees.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (employees[i].getId() > employees[i + 1].getId()) {
          let temp = employees[i];
          employees[i] = employees[i + 1];
          employees[i + 1] = temp;
          swapped = true;
        }
      }
      n--;
    } while (swapped);
  }
  
  let employees = [
    new Employee(3, "John"), 
    new Employee(1, "Alex"), 
    new Employee(5, "Chris"), 
    new Employee(2, "Tom"), 
    new Employee(4, "Zoe")
  ];
  bubbleSort(employees);
  console.log(employees);