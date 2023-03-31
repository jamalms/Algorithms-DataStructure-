package BigO;

public class BigO {
    
    // O(1) - Constant time complexity:

public void printFirstElement(int[] arr) {
    System.out.println(arr[0]);
}
// This method takes a constant amount of time regardless of the size of the input array arr, 
// because it only prints the first element.

// O(n) - Linear time complexity:

public void printAllElements(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
        System.out.println(arr[i]);
    }
}
// This method prints all the elements in the input array arr, 
// so the time it takes to execute is directly proportional to the size of the array.

// O(n^2) - Quadratic time complexity:

public void printAllPairs(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
        for (int j = i+1; j < arr.length; j++) {
            System.out.println("(" + arr[i] + ", " + arr[j] + ")");
        }
    }
}
// This method prints all possible pairs of elements in the input array arr, 
// so the time it takes to execute is proportional to the square of the size of the array.

// O(log n) - Logarithmic time complexity:

public int binarySearch(int[] arr, int target) {
    int left = 0;
    int right = arr.length - 1;
    while (left <= right) {
        int mid = (left + right) / 2;
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
// This method performs a binary search on the input array arr to find the index of the target element. 
// The time it takes to execute is proportional to the logarithm of the size of the array, 
// because at each step the search space is halved.



}
