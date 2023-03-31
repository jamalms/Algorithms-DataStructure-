package Arrays;
/*
Return the number of even ints in the given arra.
Note: the % "mod" operator computes the reminder, e.g. 5 % 2 is 1.

*/

public class CountEvens {

    // public int countEvens(int[] nums){
    //     int count = 0;
    //     int i = 0;

    //     while(i < nums.length)
    //     {
    //         if(nums[i] % 2 == 0)
    //         {
    //             count++;
    //         }
    //         i++;
    //     }
    //     return count;
    // }

    public int countEvens(int[] nums){
        int count = 0;

        for (int i = 0; i < nums.length; i++)
        {
            if(nums[i] % 2 == 0)
            {
                count++;
            }
        }
        return count;
    }

    public static void main(String args []){
        int nums [] = {1, 2, 3, 4, 5, 6};
        CountEvens count = new CountEvens();
        System.out.println(count.countEvens(nums));
    }
    
}
