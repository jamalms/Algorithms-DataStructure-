// Quick Sort

function quickSort(arr) { // Declare a function named 'quickSort' which takes an array as an argument.
    if (arr.length <= 1) { // Base case: if the length of the array is less than or equal to 1, return the array.
      return arr;
    }
  
    const pivot = arr[0]; // Declare a variable 'pivot' to be the first element of the array.
    const leftArr = []; // Declare an empty array 'leftArr'.
    const rightArr = []; // Declare an empty array 'rightArr'.
  
    for (let i = 1; i < arr.length; i++) { // Iterate over the array starting from the second element.
      if (arr[i] < pivot) { // If the current element is less than the pivot, add it to 'leftArr'.
        leftArr.push(arr[i]);
      } else { // If the current element is greater than or equal to the pivot, add it to 'rightArr'.
        rightArr.push(arr[i]);
      }
    }
  
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]; // Recursively call 'quickSort' on 'leftArr' and 'rightArr', and concatenate the sorted arrays with the pivot element.
  }

  const arr = [5, 3, 8, 4, 2];
  console.log(quickSort(arr)); // output: [2, 3, 4, 5, 8]
  
  //////
  // Java code

//   import java.util.Arrays;

// public class Main {
    
//     // Declare a function named 'quickSort' which takes an array as an argument.
//     public static int[] quickSort(int[] arr) {
//         // Base case: if the length of the array is less than or equal to 1, return the array.
//         if (arr.length <= 1) {
//             return arr;
//         }

//         // Choose the first element of the array as the pivot.
//         int pivot = arr[0];

//         // Declare two empty arrays to hold the elements less than and greater than the pivot.
//         int[] leftArr = new int[arr.length - 1];
//         int[] rightArr = new int[arr.length - 1];

//         // Initialize counters for the left and right arrays.
//         int leftCount = 0;
//         int rightCount = 0;

//         // Iterate over the array starting from the second element.
//         for (int i = 1; i < arr.length; i++) {
//             // If the current element is less than the pivot, add it to 'leftArr'.
//             if (arr[i] < pivot) {
//                 leftArr[leftCount] = arr[i];
//                 leftCount++;
//             } else {
//                 // If the current element is greater than or equal to the pivot, add it to 'rightArr'.
//                 rightArr[rightCount] = arr[i];
//                 rightCount++;
//             }
//         }

// // Recursively call 'quickSort' on 'leftArr' and 'rightArr',
// // and concatenate the sorted arrays with the pivot element.

// // Sort the left array recursively
// int[] sortedLeftArr = quickSort(Arrays.copyOfRange(leftArr, 0, leftCount));

// // Sort the right array recursively
// int[] sortedRightArr = quickSort(Arrays.copyOfRange(rightArr, 0, rightCount));

// // Create a new array 'sortedArr' with the same length as the original array
// int[] sortedArr = new int[arr.length];

// // Copy the sorted elements from the left array into 'sortedArr'
// System.arraycopy(sortedLeftArr, 0, sortedArr, 0, sortedLeftArr.length);

// // Insert the pivot element into the 'sortedArr'
// sortedArr[sortedLeftArr.length] = pivot;

// // Copy the sorted elements from the right array into 'sortedArr'
// System.arraycopy(sortedRightArr, 0, sortedArr, sortedLeftArr.length + 1, sortedRightArr.length);

// // Return the fully sorted array
// return sortedArr;
//     }

//     public static void main(String[] args) {
//         int[] arr = {5, 3, 8, 4, 2};
//         int[] sortedArr = quickSort(arr);
//         System.out.println(Arrays.toString(sortedArr)); // output: [2, 3, 4, 5, 8]
//     }
// }


// Quick sort for object of employees the sorting based on ID:

// import java.util.Arrays;

// public class Main {

//     // Declare a function named 'quickSort' which takes an array of 'Employee' objects as an argument.
//     public static Employee[] quickSort(Employee[] arr) {
//         // Base case: if the length of the array is less than or equal to 1, return the array.
//         if (arr.length <= 1) {
//             return arr;
//         }

//         // Choose the first element of the array as the pivot.
//         Employee pivot = arr[0];

//         // Declare two empty arrays to hold the elements less than and greater than the pivot.
//         Employee[] leftArr = new Employee[arr.length - 1];
//         Employee[] rightArr = new Employee[arr.length - 1];

//         // Initialize counters for the left and right arrays.
//         int leftCount = 0;
//         int rightCount = 0;

//         // Iterate over the array starting from the second element.
//         for (int i = 1; i < arr.length; i++) {
//             // If the current element is less than the pivot, add it to 'leftArr'.
//             if (arr[i].getId() < pivot.getId()) {
//                 leftArr[leftCount] = arr[i];
//                 leftCount++;
//             } else {
//                 // If the current element is greater than or equal to the pivot, add it to 'rightArr'.
//                 rightArr[rightCount] = arr[i];
//                 rightCount++;
//             }
//         }

//         // Recursively call 'quickSort' on 'leftArr' and 'rightArr',
//         // and concatenate the sorted arrays with the pivot element.

//         // Sort the left array recursively
//         Employee[] sortedLeftArr = quickSort(Arrays.copyOfRange(leftArr, 0, leftCount));

//         // Sort the right array recursively
//         Employee[] sortedRightArr = quickSort(Arrays.copyOfRange(rightArr, 0, rightCount));

//         // Create a new array 'sortedArr' with the same length as the original array
//         Employee[] sortedArr = new Employee[arr.length];

//         // Copy the sorted elements from the left array into 'sortedArr'
//         System.arraycopy(sortedLeftArr, 0, sortedArr, 0, sortedLeftArr.length);

//         // Insert the pivot element into the 'sortedArr'
//         sortedArr[sortedLeftArr.length] = pivot;

//         // Copy the sorted elements from the right array into 'sortedArr'
//         System.arraycopy(sortedRightArr, 0, sortedArr, sortedLeftArr.length + 1, sortedRightArr.length);

//         // Return the fully sorted array
//         return sortedArr;
//     }

//     public static void main(String[] args) {
//         Employee emp1 = new Employee(1, "John");
//         Employee emp2 = new Employee(3, "Alex");
//         Employee emp3 = new Employee(2, "Emily");
//         Employee emp4 = new Employee(5, "David");
//         Employee emp5 = new Employee(4, "Sarah");

//         Employee[] empArray = {emp1, emp2, emp3, emp4, emp5};
//         Employee[] sortedEmpArray = quickSort(empArray);

//         // Print the sorted array of employees
//         for (Employee emp : sortedEmpArray) {
//             System.out.println(emp.getId() + " " + emp.getName());
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

// Quick sort for object of employees the sorting based on name:

// import java.util.Arrays;

// public class Main {

//     // Declare a function named 'quickSort' which takes an array of 'Employee' objects as an argument.
//     public static Employee[] quickSort(Employee[] arr) {
//         // Base case: if the length of the array is less than or equal to 1, return the array.
//         if (arr.length <= 1) {
//             return arr;
//         }

//         // Choose the first element of the array as the pivot.
//         Employee pivot = arr[0];

//         // Declare two empty arrays to hold the elements less than and greater than the pivot.
//         Employee[] leftArr = new Employee[arr.length - 1];
//         Employee[] rightArr = new Employee[arr.length - 1];

//         // Initialize counters for the left and right arrays.
//         int leftCount = 0;
//         int rightCount = 0;

//         // Iterate over the array starting from the second element.
//         for (int i = 1; i < arr.length; i++) {
//             // If the current element is less than the pivot, add it to 'leftArr'.
//             if (arr[i].getName().compareTo(pivot.getName()) < 0) {
//                 leftArr[leftCount] = arr[i];
//                 leftCount++;
//             } else {
//                 // If the current element is greater than or equal to the pivot, add it to 'rightArr'.
//                 rightArr[rightCount] = arr[i];
//                 rightCount++;
//             }
//         }

//         // Recursively call 'quickSort' on 'leftArr' and 'rightArr',
//         // and concatenate the sorted arrays with the pivot element.

//         // Sort the left array recursively
//         Employee[] sortedLeftArr = quickSort(Arrays.copyOfRange(leftArr, 0, leftCount));

//         // Sort the right array recursively
//         Employee[] sortedRightArr = quickSort(Arrays.copyOfRange(rightArr, 0, rightCount));

//         // Create a new array 'sortedArr' with the same length as the original array
//         Employee[] sortedArr = new Employee[arr.length];

//         // Copy the sorted elements from the left array into 'sortedArr'
//         System.arraycopy(sortedLeftArr, 0, sortedArr, 0, sortedLeftArr.length);

//         // Insert the pivot element into the 'sortedArr'
//         sortedArr[sortedLeftArr.length] = pivot;

//         // Copy the sorted elements from the right array into 'sortedArr'
//         System.arraycopy(sortedRightArr, 0, sortedArr, sortedLeftArr.length + 1, sortedRightArr.length);

//         // Return the fully sorted array
//         return sortedArr;
//     }

//     public static void main(String[] args) {
//         Employee emp1 = new Employee(1, "Cohn");
//         Employee emp2 = new Employee(3, "Alex");
//         Employee emp3 = new Employee(2, "Emily");
//         Employee emp4 = new Employee(5, "David");
//         Employee emp5 = new Employee(4, "Barah");

//         Employee[] empArray = {emp1, emp2, emp3, emp4, emp5};
//         Employee[] sortedEmpArray = quickSort(empArray);

//         // Print the sorted array of employees
//         for (Employee emp : sortedEmpArray) {
//             System.out.println(emp.getId() + " " + emp.getName());
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
  

// Quick sort for object of employees the sorting based on birth date:

// import java.util.Arrays;
// import java.time.LocalDate;
// import java.time.format.DateTimeFormatter;

// public class Main {

//     // Declare a function named 'quickSort' which takes an array of 'Employee' objects as an argument.
//     public static Employee[] quickSort(Employee[] arr) {
//         // Base case: if the length of the array is less than or equal to 1, return the array.
//         if (arr.length <= 1) {
//             return arr;
//         }

//         // Choose the first element of the array as the pivot.
//         Employee pivot = arr[0];

//         // Declare two empty arrays to hold the elements less than and greater than the pivot.
//         Employee[] leftArr = new Employee[arr.length - 1];
//         Employee[] rightArr = new Employee[arr.length - 1];

//         // Initialize counters for the left and right arrays.
//         int leftCount = 0;
//         int rightCount = 0;

//         // Iterate over the array starting from the second element.
//         for (int i = 1; i < arr.length; i++) {
//             // If the current element is less than the pivot, add it to 'leftArr'.
//             if (arr[i].getBirthDate().isBefore(pivot.getBirthDate())) {
//                 leftArr[leftCount] = arr[i];
//                 leftCount++;
//             } else {
//                 // If the current element is greater than or equal to the pivot, add it to 'rightArr'.
//                 rightArr[rightCount] = arr[i];
//                 rightCount++;
//             }
//         }

//         // Recursively call 'quickSort' on 'leftArr' and 'rightArr',
//         // and concatenate the sorted arrays with the pivot element.

//         // Sort the left array recursively
//         Employee[] sortedLeftArr = quickSort(Arrays.copyOfRange(leftArr, 0, leftCount));

//         // Sort the right array recursively
//         Employee[] sortedRightArr = quickSort(Arrays.copyOfRange(rightArr, 0, rightCount));

//         // Create a new array 'sortedArr' with the same length as the original array
//         Employee[] sortedArr = new Employee[arr.length];

//         // Copy the sorted elements from the left array into 'sortedArr'
//         System.arraycopy(sortedLeftArr, 0, sortedArr, 0, sortedLeftArr.length);

//         // Insert the pivot element into the 'sortedArr'
//         sortedArr[sortedLeftArr.length] = pivot;

//         // Copy the sorted elements from the right array into 'sortedArr'
//         System.arraycopy(sortedRightArr, 0, sortedArr, sortedLeftArr.length + 1, sortedRightArr.length);

//         // Return the fully sorted array
//         return sortedArr;
//     }

//     public static void main(String[] args) {
//         DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");

//         Employee emp1 = new Employee(1, "Cohn", LocalDate.parse("10/03/1980", formatter));
//         Employee emp2 = new Employee(3, "Alex", LocalDate.parse("12/04/1975", formatter));
//         Employee emp3 = new Employee(2, "Emily", LocalDate.parse("01/01/1990", formatter));
//         Employee emp4 = new Employee(5, "David", LocalDate.parse("30/06/1985", formatter));
//         Employee emp5 = new Employee(4, "Barah", LocalDate.parse("15/09/1970", formatter));

//         Employee[] empArray = {emp1, emp2, emp3, emp4, emp5};
//         Employee[] sortedEmpArray = quickSort(empArray);
        
//         for (Employee emp : sortedEmpArray) {
//         System.out.println(emp.toString());
//     }
// }
// }
// class Employee {
// private int id;
// private String name;
// private LocalDate birthDate;

// public Employee(int id, String name, LocalDate birthDate) {
//     this.id = id;
//     this.name = name;
//     this.birthDate = birthDate;
// }

// public int getId() {
//     return id;
// }

// public String getName() {
//     return name;
// }

// public LocalDate getBirthDate() {
//     return birthDate;
// }

// public String toString() {
//     return "ID: " + id + ", Name: " + name + ", Birth Date: " + birthDate;
// }

// }

/// Javascript code:
// Declare a function named 'quickSort' which takes an array of 'Employee' objects as an argument.
function quickSort(arr) {
    // Base case: if the length of the array is less than or equal to 1, return the array.
    if (arr.length <= 1) {
    return arr;
    }
    
    // Choose the first element of the array as the pivot.
    let pivot = arr[0];
    
    // Declare two empty arrays to hold the elements less than and greater than the pivot.
    let leftArr = [];
    let rightArr = [];
    
    // Iterate over the array starting from the second element.
    for (let i = 1; i < arr.length; i++) {
    // If the current element is less than the pivot, add it to 'leftArr'.
    if (arr[i].getBirthDate() < pivot.getBirthDate()) {
    leftArr.push(arr[i]);
    } else {
    // If the current element is greater than or equal to the pivot, add it to 'rightArr'.
    rightArr.push(arr[i]);
    }
    }
    
    // Recursively call 'quickSort' on 'leftArr' and 'rightArr',
    // and concatenate the sorted arrays with the pivot element.
    
    // Sort the left array recursively
    let sortedLeftArr = quickSort(leftArr);
    
    // Sort the right array recursively
    let sortedRightArr = quickSort(rightArr);
    
    // Create a new array 'sortedArr' with the same length as the original array
    let sortedArr = [];
    
    // Copy the sorted elements from the left array into 'sortedArr'
    sortedArr = sortedArr.concat(sortedLeftArr);
    
    // Insert the pivot element into the 'sortedArr'
    sortedArr.push(pivot);
    
    // Copy the sorted elements from the right array into 'sortedArr'
    sortedArr = sortedArr.concat(sortedRightArr);
    
    // Return the fully sorted array
    return sortedArr;
    }
    
    // Define a class 'Employee' with properties 'id', 'name', and 'birthDate'.
    class Employee {
    constructor(id, name, birthDate) {
    this.id = id;
    this.name = name;
    this.birthDate = birthDate;
    }
    
    getId() {
    return this.id;
    }
    
    getName() {
    return this.name;
    }
    
    getBirthDate() {
    return this.birthDate;
    }
    
    toString() {
    return "ID: " + this.id + ", Name: " + this.name + ", Birth Date: " + this.birthDate;
    }
    }
    
    // Define an array of 'Employee' objects.
    let emp1 = new Employee(1, "Cohn", new Date(1980, 2, 10));
    let emp2 = new Employee(3, "Alex", new Date(1975, 3, 12));
    let emp3 = new Employee(2, "Emily", new Date(1990, 0, 1));
    let emp4 = new Employee(5, "David", new Date(1985, 5, 30));
    let emp5 = new Employee(4, "Barah", new Date(1970, 8, 15));
    
    let empArray = [emp1, emp2, emp3, emp4, emp5];
    
    // Sort the array using the 'quickSort' function.
    let sortedEmpArray = quickSort(empArray);
    
    // Print the sorted array to the console.
    for (let i = 0; i < sortedEmpArray.length; i++) {
    console.log(sortedEmpArray[i].toString());
    }