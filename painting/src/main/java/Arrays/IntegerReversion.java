package Arrays;

// Integer reversion problem overview

/*
Your task is to design an efficient algorithm to reverse a given integer. For example if the input of the algorithm is 1234 then the output should be 4321.

NOTE: the input is an integer (and not a string) !!!
*/
public class IntegerReversion {
    
    public int reverse(int n){

        int reversed = 0;
        int reminder = 0;

        while(n>0){
            reminder = n % 10;
            n = n / 10;
            reversed = reversed * 10 + reminder;
        }
        return reversed;
    }

    public static void main(String args []){

        IntegerReversion problem = new IntegerReversion();
        System.out.println(problem.reverse(1234));
    }
}
