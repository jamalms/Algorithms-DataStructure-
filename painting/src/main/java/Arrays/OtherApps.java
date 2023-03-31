package Arrays;

import java.util.Arrays;

/**
 * 
 * Find the missing numbers in given array from 0 to 9
 * INPUT = {2, 4, 1, 5, 7, 8, 0}
 * OUTPUT = 3 & 6
 */

public class OtherApps {

    public static void main(String[] args) {
        int[] nums = {2, 4, 1, 5, 7, 8, 0};
        int[] missingNums = findMissingNumbers(nums);
        System.out.println(Arrays.toString(missingNums));
    }

    private static int[] findMissingNumbers(int[] nums) {
        int[] missingNums = new int[10 - nums.length];
        int index = 0;
        for (int i = 0; i < 10; i++) {
            if (!contains(nums, i)) {
                missingNums[index] = i;
                index++;
            }
        }
        return missingNums;
    }

    private static boolean contains(int[] nums, int target) {
        for (int num : nums) {
            if (num == target) {
                return true;
            }
        }
        return false;
    }
}
