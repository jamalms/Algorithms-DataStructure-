package Arrays;

// Palindrome problem overview
/*
"A palindrome is a string that reads the same forward and backward"

For example: radar or madam

Your task is to design an optimal algorithm for checking whether a given string is palindrome or not!
*/

public class Palindrome {
    
    // it has O(N) linear time comlexity

    public boolean solve(String s) {
        int forward = 0;
        int backward = s.length() - 1;

        while(forward < backward){
            if(s.charAt(forward) != s.charAt(backward))
            return false;

            forward++;
            backward--;
        }
        return true;
    }

    public static void main(String args []){

        Palindrome problem = new Palindrome();
        System.out.println(problem.solve("madam"));
        System.out.println(problem.solve("adam"));
    }
}
