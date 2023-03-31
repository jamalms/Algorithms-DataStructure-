package Arrays;
/*
Given an array of ints, return the sum of the first 2 elements in the array.
If the array length is less than 2, just sum up the elements that exist, 
returning 0 if the array is length 0.

*/
public class Sum {
    
    public int sum(int[] nums){
        if (nums.length >= 2)
        {
            return nums[0] + nums[1];
        }
        else if (nums.length == 1)
        {
            return nums[0];
        }
        else
        {
            return 0;
        }
    }

    public static void main(String args []){
        Sum solve = new Sum();
        int nums[] = {1, 2, 3};
        int nums1[] = {1};
        int nums2[] = {};
        System.out.println(solve.sum(nums));
        System.out.println(solve.sum(nums1));
        System.out.println(solve.sum(nums2));
    }
}
