package Arrays;
/*
Given an array of ints, return true if 6 appears as either the first or las element in the array.
The array will be length 1 or more.
*/

public class FirsLast6 {
    public boolean firasLast6(int[] nums){
        if (nums[0] == 6 || nums[nums.length - 1] == 6)
        {
            return true;
        }
       
        else
        {
            return false;
        }
    }

    public static void main(String args []){
        FirsLast6 check = new FirsLast6();
        int nums [] = {1, 2, 3, 4, 5, 6};
        int nums1 [] = {6, 2, 3, 4, 5};
        int nums2 [] = {2, 3, 4, 5};
        System.out.println(check.firasLast6(nums));
        System.out.println(check.firasLast6(nums1));
        System.out.println(check.firasLast6(nums2));
    }
    
}
