package Arrays;

public class Array {
    public static void main(String args []){

    // Arrays are not dynamic data structures = we have to define the size in advance
    int[] nums = new int[10];
    // Randome indexing: we can use the indexes of the array solts
    //O(1)
    for(int i=0; i<10;i++)
        nums[i] = i;
    // We know the index of the item we want to manipulate
    nums[0] = 100;

    // If we don't know the index of the item (search)
    //LINEAR SEARCH 0(N) - if we don't know the index of the item we are looking for
    // W e want to find the index of item 6
        for(int i=0; i<10;i++)
            System.out.println(nums[i]);
            //if(nums[i]==6)
           // System.out.println("We have found the item at index: " +i);

        
    

    }
    
}
