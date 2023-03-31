package cinema;
import java.util.Scanner;
/*
 * Cinema3App:
Modify the application to first ask the user how many tickets they would like to purchase.  
The application should then allow the user to check the cost of that number of tickets.  
*/
public class CinemaApp3 {
    public static void main(String args []){
        int age;
        double cost;
        int numTix;

        Scanner scan = new Scanner(System.in);
        Cinema cinema = new Cinema();

        System.out.println("Enter the number of tickets you want to but");
        numTix = scan.nextInt();

        for (int i = 0; i < numTix; i++)
        {
            System.out.println("Enter the age for the person: " +(i+1));
            age = scan.nextInt();
            cinema.setAge(age);
            cinema.compute();
            cost = cinema.getCost();
            System.out.println("The cinema for a person aged: " +age + " is: " +cost);

        }
    }
}
