package cinema;
import java.util.Scanner;
/*Modify the application again to allow the user to check the cost of one ticket
 *and then ask the user would they like to check another.  
 *If they answer yes, the application should run again, 
 *if they answer no, the application should end.*/
public class CinemaApp4 {
    public static void main(String args []){
        int age;
        double cost;
        String moreTix;

        Scanner scan = new Scanner(System.in);
        Cinema cinema = new Cinema(); 

        do {
            System.out.println("Enter the age for the person");
            age = scan.nextInt();
            cinema.setAge(age);
            cinema.compute();
            cost = cinema.getCost();
            System.out.println("The cinema ticket for a person aged: " + age + " is " +cost);

            System.out.println("Do you want more tickets, yes or no?");
            moreTix = scan.next();
        }while(moreTix.equalsIgnoreCase("yes"));
    }
}
