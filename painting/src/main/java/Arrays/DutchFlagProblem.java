package Arrays;

import java.util.Arrays;

// Dutch national flag problem overview

/*
The problem is that we want to sort a T[] one-dimensional array of integers in O(N) running time - and without any extra memory. 
The array can contain values: 0, 1 and 2 (check out the theoretical section for further information).
*/
public class DutchFlagProblem {

    // this will contain the values (0s, 1s, 2s)
    private int[] nums;

    public DutchFlagProblem(int[] nums){
        this.nums = nums;
    }

    public void solve(){

        int i = 0;
        int j = 0;
        int k = nums.length - 1;
        int pivot = 1;

        // it has O(N) linear running time
        while(j<=k) {
            // when the item with index j = 0
            if(nums[j] < pivot) {
                swap(i, j);
                i++;
                j++;
                // item is 2
            } else if(nums[j] > pivot){
                swap(j, k);
                k--;
                // the item is 1
            } else {
                j++;
            }
        }

    }

    private void swap(int index1, int index2){
        int temp = nums[index1];
        nums[index1] = nums[index2];
        nums[index2] = temp;
    }

    public void showResult(){
        System.out.println(Arrays.toString(nums));
    }
    


    public static void main(String args []){

        int[] nums = {2, 1, 0, 0, 2, 2, 1, 0, 1 };

        DutchFlagProblem problem = new DutchFlagProblem(nums);
        problem.solve();
        problem.showResult();
    }
}
