package Arrays;

public class ArraySum {
    private int[] nums;


    public ArraySum(int[] nums){
        this.nums = nums;
    }

    public int solve(int[] nums){
        int sum = 0;
        for(int i = 0; i < nums.length; i++){
            
            sum = nums[1] - nums[2];
            
        }
        System.out.println("The total sum is: " +sum);
        return sum;
    }

    public static void main(String args []){
        int bunny[] = {23, 30, 34, 50, 12, 23, 34, 23, 23, 23};

        ArraySum problem = new ArraySum(bunny);
       
        problem.solve(bunny);
    }
}
