package Arrays;

import java.util.Arrays;

/*
Retuen an int array length 3 containing the first 3 digits of pi,
{3, 1, 4}.

*/
public class MakePi {
    
    public int[] makePi(){
        int[] pi = new int[3];

        pi[0] = 3;
        pi[1] = 1;
        pi[2] = 4;

        return pi;
    }
    public static void main(String args []){

        MakePi createArray = new MakePi();
        System.out.println(Arrays.toString(createArray.makePi()));
    }
}
