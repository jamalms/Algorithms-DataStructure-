// Insertion Sort is a simple sorting algorithm that works by sorting an array one element at a time. 
// It sorts the elements in place by repeatedly inserting a current unsorted element 
// into the correct position in the sorted part of the array.

// The algorithm works as follows:

// 1- Start with the second element in the array, and compare it with the first element.
// 2- If the second element is smaller than the first, swap them.
// 3- Compare the third element with the second element, 
// and swap if necessary to insert it into the correct position in the sorted array.
// 4- Repeat this process for all remaining elements in the array.

// The time complexity of insertion sort is O(n^2) in the worst case, 
// where "n" is the number of elements in the array. However, 
// it is more efficient than other quadratic sorting algorithms like bubble sort and selection sort, 
// particularly for small datasets or partially sorted arrays.

// This is a function called insertionSort that takes an array as input
function insertionSort(arr) {
    // Loop through the array, starting from the second element
    for (let i = 1; i < arr.length; i++) {
      // Set j to the index of the previous element
      let j = i - 1;
      // Loop through the sorted part of the array and find the correct position for the current element
      while (j >= 0 && arr[j] > arr[j + 1]) {
        // Swap the current and next elements in the array using destructuring assignment
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        // Decrement j to continue comparing with the previous elements
        j--;
      }
    }
    // Return the sorted array
    return arr;
  }

  const arr = [5, 3, 8, 4, 2];
  console.log(insertionSort(arr)); // output: [2, 3, 4, 5, 8]
  
  // In this implementation, we used destructuring assignment to swap the elements in the array, and replaced the "key" variable with direct access to the current and next elements in the array. We also used the comparison operator ">" to compare the elements in the array. The time complexity of this algorithm is O(n^2) in the worst case, where "n" is the number of elements in the array.

  // Java Code

//   import java.util.Arrays;
// public class Main
// {
// public static int[] insertionSort(int[] arr) {
//     // Loop through the array, starting from the second element
//     for (int i = 1; i < arr.length; i++) {
//         // Set j to the index of the previous element
//         int j = i - 1;
//         // Loop through the sorted part of the array and find the correct position for the current element
//         while (j >= 0 && arr[j] > arr[j + 1]) {
//             // Swap the current and next elements in the array using a temporary variable
//             int temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//             // Decrement j to continue comparing with the previous elements
//             j--;
//         }
//     }
//     // Return the sorted array
//     return arr;
// }

// public static void main(String[] args) {
//     int[] arr = {5, 3, 8, 4, 2};
//     int[] sortedArr = insertionSort(arr);
//     System.out.println(Arrays.toString(sortedArr)); // output: [2, 3, 4, 5, 8]
// }

// }

// public static int[] insertionSort(int[] arr) defines a function called insertionSort that takes an integer array as input and returns an integer array as output.
// for (int i = 1; i < arr.length; i++) loops through the input array arr starting from the second element.
// int j = i - 1; sets the variable j to the index of the previous element.
// while (j >= 0 && arr[j] > arr[j + 1]) loops through the sorted part of the array and finds the correct position for the current element by comparing it with the previous elements.
// int temp = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = temp; swaps the current and next elements in the array using a temporary variable.
// j--; decrements j to continue comparing with the previous elements.
// return arr; returns the sorted array.
// int[] arr = {5, 3, 8, 4, 2}; initializes an integer array arr with the values 5, 3, 8, 4, and 2.
// int[] sortedArr = insertionSort(arr); calls the insertionSort function with the array arr as input and assigns the sorted array to sortedArr.
// System.out.println(Arrays.toString(sortedArr)); prints the sorted array sortedArr to the console.

// To apply the Insertion sort on Employee Object the sorting based on the ID:

// import java.util.Arrays;

// public class Main {
//     public static void insertionSort(Employee[] arr) {
//         // Loop through the array, starting from the second element
//         for (int i = 1; i < arr.length; i++) {
//             // Set j to the index of the previous element
//             int j = i - 1;
//             // Loop through the sorted part of the array and find the correct position for the current element
//             while (j >= 0 && arr[j].getId() > arr[j + 1].getId()) {
//                 // Swap the current and next elements in the array
//                 Employee temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//                 // Decrement j to continue comparing with the previous elements
//                 j--;
//             }
//         }
//     }

//     public static void main(String[] args) {
//         // Create an array of Employee objects
//         Employee[] employees = {
//                 new Employee(5, "John"),
//                 new Employee(3, "Sarah"),
//                 new Employee(8, "Mike"),
//                 new Employee(4, "Kate"),
//                 new Employee(2, "Tom")
//         };

//         // Sort the array of employees based on their IDs using insertion sort
//         insertionSort(employees);

//         // Print the sorted array of employees
//         for (Employee employee : employees) {
//             System.out.println(employee.getId() + " " + employee.getName());
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


// To apply the Insertion sort on Employee Object the sorting based on the names:
// import java.util.Arrays;

// public class Main {
//     public static void insertionSort(Employee[] arr) {
//         // Loop through the array, starting from the second element
//         for (int i = 1; i < arr.length; i++) {
//             // Set j to the index of the previous element
//             int j = i - 1;
//             // Loop through the sorted part of the array and find the correct position for the current element
//             while (j >= 0 && arr[j].getName().compareTo(arr[j + 1].getName()) > 0) {
//                 // Swap the current and next elements in the array
//                 Employee temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//                 // Decrement j to continue comparing with the previous elements
//                 j--;
//             }
//         }
//     }

//     public static void main(String[] args) {
//         // Create an array of Employee objects
//         Employee[] employees = {
//                 new Employee(5, "John"),
//                 new Employee(3, "Sarah"),
//                 new Employee(8, "Mike"),
//                 new Employee(4, "Kate"),
//                 new Employee(2, "Tom")
//         };

//         // Sort the array of employees based on their names using insertion sort
//         insertionSort(employees);

//         // Print the sorted array of employees
//         for (Employee employee : employees) {
//             System.out.println(employee.getId() + " " + employee.getName());
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



// // To apply the Insertion sort on Employee Object the sorting based on the birth date:
// import java.time.LocalDate;
// public class Main {
//     public static void insertionSort(Employee[] arr) {
//         // Loop through the array, starting from the second element
//         for (int i = 1; i < arr.length; i++) {
//             // Set j to the index of the previous element
//             int j = i - 1;
//             // Loop through the sorted part of the array and find the correct position for the current element
//             while (j >= 0 && arr[j].getBirthDate().compareTo(arr[j + 1].getBirthDate()) > 0) {
//                 // Swap the current and next elements in the array
//                 Employee temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//                 // Decrement j to continue comparing with the previous elements
//                 j--;
//             }
//         }
//     }

//     public static void main(String[] args) {
//         // Create an array of Employee objects
//         Employee[] employees = {
//                 new Employee(5, "John", LocalDate.of(1990, 12, 15)),
//                 new Employee(3, "Sarah", LocalDate.of(1985, 6, 20)),
//                 new Employee(8, "Mike", LocalDate.of(1995, 8, 10)),
//                 new Employee(4, "Kate", LocalDate.of(1992, 3, 5)),
//                 new Employee(2, "Tom", LocalDate.of(1988, 2, 12))
//         };

//         // Sort the array of employees based on their birth dates using insertion sort
//         insertionSort(employees);

//         // Print the sorted array of employees
//         for (Employee employee : employees) {
//             System.out.println(employee.getId() + " " + employee.getName() + " " + employee.getBirthDate());
//         }
//     }
// }

// class Employee {
//     private int id;
//     private String name;
//     private LocalDate birthDate;

//     public Employee(int id, String name, LocalDate birthDate) {
//         this.id = id;
//         this.name = name;
//         this.birthDate = birthDate;
//     }

//     public int getId() {
//         return id;
//     }

//     public String getName() {
//         return name;
//     }

//     public LocalDate getBirthDate() {
//         return birthDate;
//     }
// }
