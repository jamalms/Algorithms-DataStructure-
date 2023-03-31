package JavaCodingInterview;

import java.util.HashSet;

/**
 * 
 * Find the missing number in given array from 0 to 9
 * INPUT = {2, 4, 1, 5, 7, 8, 0}
 * OUTPUT = 3 & 6
 */
public class MissingNumber {
    public static void main(String args []) {

        int a[] = {2, 4, 1, 5, 7, 8, 0};
        missingNumbers(a); 

    }

    public static void missingNumbers(int a[]) {

        // create a data structure to contains the array
        HashSet<Integer> set = new HashSet<>();

        for (int num : a) {
            set.add(num);
        }

        //int n = a.length + 1;
        for (int i=0; i < a.length; i++) {
            if (!set.contains(i)) {
                System.out.println(i);
            }
        }
    }
}
