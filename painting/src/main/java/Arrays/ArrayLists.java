package Arrays;

import java.util.ArrayList;
import java.util.List;

public class ArrayLists {
    public static void main(String args []){
        // ArrayLists use standard arrays under the hood
        // Capacity = 10

        List<String> names = new ArrayList<String>();
        names.add("Kevin");
        names.add("Danial");
        names.add("Adam");
        names.add("Ana");

         System.out.println("The ArrayLis size is: " + names.size());

        //O(N)
        names.remove(0);
        System.out.println(names.get(0));


        for(String name : names)
        {
            System.out.println(name);
            
        }
        System.out.println("The ArrayLis size after removing is: " + names.size());
        

    }
    
}
