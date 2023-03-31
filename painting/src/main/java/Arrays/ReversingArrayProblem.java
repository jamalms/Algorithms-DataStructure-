package Arrays;

import java.util.Arrays;

// Reversing an array in-place overview
/* 
The problem is that we want to reverse a T[] array in O(N) linear time complexity and we want the algorithm to be in-place as well - so the algorithm can not use additional memory!

For example: input is [1,2,3,4,5] then the output is [5,4,3,2,1]
*/
public class ReversingArrayProblem {

    // No need for extra memory (in-place algorithm)
    // O(N/2) = O(N) linear running time
    public int[] solve(int[] nums){
        
        int lowIndex = 0;
        int highIndex = nums.length-1;

        while(lowIndex < highIndex){
            swap(nums, lowIndex, highIndex);
            lowIndex++;
            highIndex--;
        }
        return nums;
        
    }

    private void swap(int[] nums, int index1, int index2) {
        int temp = nums[index1];
        nums[index1] = nums[index2];
        nums[index2] = temp;
    }

    public static void main(String args []){

        int[] nums = {1, 2, 3, 4, 5};

        ReversingArrayProblem problem = new ReversingArrayProblem();
        System.out.println(Arrays.toString(problem.solve(nums)));

    }
}
