package JavaCodingInterview;
/*
Write a java program to find intersection of 2 arrays in java
{1, 2, 3, 4} {4, 4, 7, 8}
print the element 4
*/
import java.util.HashSet;
public class Intersection {
    public static void main(String args []){

        int arr1[] = {1, 2, 3, 4}; 
        int arr2[] = {4, 4, 7, 8};

        printIntersection(arr1, arr2);
    }

    private static void printIntersection(int[] arr1, int[] arr2) {
       // we need a data structure to collect the elements from the arrays
        HashSet<Integer> hs = new HashSet<>();
        // itrating the first array 
        for(int i = 0; i < arr1.length; i++){
            hs.add(arr1[i]);
        }
        for(int i = 0; i < arr2.length; i++){
            if(hs.contains(arr2[i])){
                System.out.println(arr2[i]);
            }
        }
    }
}
